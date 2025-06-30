import { Form, FormInstance, Modal } from "antd"
import { FC, ReactNode, useState } from "react"
import { useTranslation } from "react-i18next"

import { CheckIcon } from "@assets/icons/CheckIcon"
import { ONE, TWO } from "@utils/constants/numbers"
import { SuccessRes } from "@utils/models/responseModel"
import styles from "./modalSteps.module.scss"

type Props = {
  visible: boolean
  close: () => void
  title: string
  formInstance: FormInstance
  steps: {
    title: string
    hidden?: boolean
    description?: string
    component: (active: boolean) => ReactNode
  }[]
  onFinish: (fields: unknown) => Promise<SuccessRes>
  isLoading: boolean
  onSecondStep: () => void
  destroyOnClose?: boolean
  width?: number
}

export const ModalSteps: FC<Props> = ({
  visible,
  close,
  steps,
  title,
  formInstance,
  onFinish,
  isLoading,
  destroyOnClose,
  onSecondStep,
  width,
}) => {
  const [step, setStep] = useState(ONE)
  const { t } = useTranslation("app")

  const filteredSteps = steps.filter((step) => !step.hidden)
  const isFirst = step === ONE
  const isLast = step === filteredSteps.length
  const cancelText = isFirst ? t("close") : t("previous")
  const okText = isLast ? t("save") : t("next")

  const onCancel = () => {
    if (step === 1) {
      close()
    } else {
      setStep((prev) => prev - ONE)
    }
  }

  const onClose = () => {
    close()
    setStep(ONE)
  }

  const onOk = () => {
    formInstance.submit()
  }

  const onFinishForm = (fields: unknown) => {
    if (step === TWO) {
      onSecondStep()
    }
    if (isLast) {
      onFinish(fields).then(() => {
        close()
        formInstance.resetFields()
        setStep(ONE)
      })
    } else {
      setStep((prev) => prev + ONE)
    }
  }

  const activeClass = (isActive: boolean) => {
    if (isActive) return styles.active
  }

  const successClass = (isSuccess: boolean) => {
    if (isSuccess) return styles.success
  }

  const countStep = (index: number) =>
    index + ONE - steps.filter((step, stepIndex) => step.hidden && stepIndex < index).length

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={onOk}
      okText={okText}
      cancelText={cancelText}
      className={styles.modal}
      title={title}
      centered
      width={width ?? 1006}
      okButtonProps={{
        loading: isLoading,
      }}
      cancelButtonProps={{
        onClick: onCancel,
      }}
      destroyOnHidden={destroyOnClose}
    >
      <div className={styles.body}>
        <div className={styles.steps}>
          {filteredSteps.map((item, index) => (
            <div className={`${styles.step} ${item.hidden ? "d-n" : ""}`} key={index + ONE}>
              <div className={styles.step__left}>
                <div
                  className={`${styles.icon} ${activeClass(step === countStep(index))} ${successClass(
                    step > countStep(index)
                  )}`}
                >
                  {successClass(step > countStep(index)) ? <CheckIcon /> : <span>{countStep(index)}</span>}
                </div>
                {countStep(index) !== filteredSteps.length && (
                  <div className={`${styles.line} ${successClass(step > countStep(index))}`} />
                )}
              </div>
              <div
                className={`${styles.step__right} ${activeClass(step === countStep(index))} ${successClass(
                  step > countStep(index)
                )}`}
              >
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Form
          autoComplete='off'
          form={formInstance}
          layout='vertical'
          className={styles.form}
          onFinish={onFinishForm}
          onFinishFailed={(err) => console.log(err)}
        >
          {filteredSteps.map((item, index) => (
            <div
              key={index}
              className={`${styles.component} ${activeClass(step === countStep(index))} ${
                item.hidden ? "d-n" : ""
              }`}
            >
              {item.component(step === countStep(index))}
            </div>
          ))}
        </Form>
      </div>
    </Modal>
  )
}

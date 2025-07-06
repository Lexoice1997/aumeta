import { Flex, Form, Modal, Input, TimePicker } from "antd"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { setInformationModalData } from '../../slices/profileSlice'
import { useSetClientInformation } from '../../services/profileMutations'
import { useForm } from "antd/es/form/Form"
import dayjs from 'dayjs'
import { CompanySizeSelect } from "../company-size-select.tsx/CompanySizeSelect"
import { useGetClientProfile } from "../../services/profileQueries"
import { useTranslation } from "react-i18next"

export const ClientInformationModal = () => {
  const { t } = useTranslation('profile')
  const { t: appT } = useTranslation('app')
  const { data } = useGetClientProfile()
  const [formInstance] = useForm()
  const dispatch = useAppDispatch()
  const { visible } = useAppSelector(state => state.profile.informationModalData)
  const setClientInformation = useSetClientInformation()

  const onClose = () => {
    dispatch(setInformationModalData({visible:false}))
  }

  const onFinish = (values: any) => {
    const [start, end] = values.workHours
    const workHours = `${dayjs(start).format("HH:mm")} - ${dayjs(end).format("HH:mm")}`
    const fields = {
      workHours,
      information: values.information,
      companySize: values.companySize,
    } as any

    setClientInformation.mutateAsync(fields).then(onClose)
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      title={t('modalsForm.editInformations.title')}
      okText={appT('save')}
      cancelText={appT('close')}
      centered
      width={500}
      onOk={() => formInstance.submit()}>
      <Form
        form={formInstance}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          companySize: data?.companySize.default,
          workHours: data?.workHours ? [
            dayjs(data?.workHours.split(' - ')[0], "HH:mm"), dayjs(data?.workHours.split(' - ')[1], "HH:mm")
          ] : [dayjs("08:00", "HH:mm"), dayjs("18:00", "HH:mm")],
          information: data?.information ?? "",
        }}>
        <Flex gap={12} align="center">
          <Form.Item
            label={t('modalsForm.editInformations.workingHours')}
            name="workHours"
            rules={[{ required: true, message: "" }]}>
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
          <CompanySizeSelect />
        </Flex>

        <Form.Item
          label={t('modalsForm.editInformations.information')}
          name="information"
          rules={[{ required: true, message: "" }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
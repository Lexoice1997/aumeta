import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { rootPaths } from "@utils/constants/rootPaths"
import { useCheckEmail } from "../../../services/authMutations"

import styles from "./signUpEmail.module.scss"

const { Item, useForm } = Form

type Props = {
  afterSuccess: (username: string) => void
}

export const SignUpEmail = ({ afterSuccess }: Props) => {
  const { t } = useTranslation('auth')
  const [formInstance] = useForm()
  const checkEmail = useCheckEmail()

  const onFinish = (fields: { email: string }) => {
    checkEmail.mutateAsync({ email: fields?.email }).then(() => {
      afterSuccess(fields?.email)
    })
  }

  return (
    <div className={styles.body}>
      <div className={styles.body__title}>
        <h1>{t('authHeadline')}</h1>
        <p>
          {t('agreement')}{" "}
        </p>
      </div>
      <Form form={formInstance} layout='vertical' className={styles.body__form} onFinish={onFinish}>
        <Item label={t('enterEmail.email')} rules={[{ required: true, message: "" }]} name='email'>
          <Input size='large' placeholder='Email' type='email' />
        </Item>
        <Button size='large' loading={checkEmail.isPending} type='primary' htmlType='submit'>
          {t('enterEmail.continue')}
        </Button>
        <div className={styles.body__sign_up}>
          {t('signInPrompt')} <Link to={rootPaths.AUTH.SIGN_IN}>{t('singInLink')}</Link>
        </div>
      </Form>
    </div>
  )
}

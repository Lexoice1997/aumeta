import { Button, Form, Input } from "antd"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

import { useAppDispatch } from "@hooks/useRedux.ts"
import { setIsAuth, setPermissions, setUser } from "@slices/userSlice"
import { rootPaths } from "@utils/constants/rootPaths"
import { currentUserToUser } from "@utils/helpers/currentUserToUser"
import { useSignIn } from "../../services/authMutations"
import { SignInBodyModel } from "../../utils/models/signInBodyModel"

import styles from "./signIn.module.scss"

const { Item } = Form

export const SignIn = () => {
  const { t } = useTranslation('auth')
  const [formInstance] = Form.useForm()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signIn = useSignIn()

  const onFinish = (fields: SignInBodyModel) => {
    signIn.mutateAsync(fields).then((res) => {
      if (res.accept) {
        dispatch(setIsAuth(true))
        dispatch(setPermissions(res.data.permissions))
        dispatch(setUser(currentUserToUser(res.data)))
        navigate(rootPaths.MAIN.INDEX)
        formInstance.resetFields()
      }
    })
  }

  return (
    <div className={styles.sign_in}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.body__title}>
          <h1>{t('signInSection.header')}</h1>
          <p>{t('signInSection.welcomeMessage')}</p>
        </div>
        <Form form={formInstance} layout='vertical' className={styles.body__form} onFinish={onFinish}>
          <Item label={t('enterEmail.email')} rules={[{ required: true, message: "" }]} name='email'>
            <Input size='large' />
          </Item>
          <Item label={t('formFields.password')} rules={[{ required: true, message: "" }]} name='password'>
            <Input.Password size='large' />
          </Item>
          <Link to={rootPaths.AUTH.RESET_PASSWORD}>{t('signInSection.forgotPassword')}</Link>
          <Button size='large' loading={signIn.isPending} type='primary' htmlType='submit'>
            {t('signInSection.header')}
          </Button>
          <div className={styles.body__sign_up}>
            {t('signInSection.noAccountPrompt')} <Link to={rootPaths.AUTH.SIGN_UP}>{t('signInSection.createAccount')}</Link>
          </div>
        </Form>
      </div>
      <div className={styles.footer}>
        <p>Hi Solution® - 2025</p>
      </div>
    </div>
  )
}

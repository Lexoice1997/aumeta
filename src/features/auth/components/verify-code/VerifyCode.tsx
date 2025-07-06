import { Button } from "antd"
import { FC, useState } from "react"
import OTPInput from "react-otp-input"
import { useTranslation } from "react-i18next"

import { useCheckCode } from "../../services/authMutations"
import { ReSendCode } from "./ReSendCode"

import styles from "../../pages/reset-password/resetPassword.module.scss"

type Props = {
  afterSuccess: () => void
  username: string
}

export const VerifyCode: FC<Props> = ({ afterSuccess, username }) => {
  const { t } = useTranslation('auth')
  const [code, setCode] = useState("")
  const checkCode = useCheckCode()

  const onVerifyCode = () => {
    if (code.length === 6) {
      checkCode.mutateAsync({ username: username, code }).then(() => {
        afterSuccess()
      })
    }
  }

  return (
    <div className={styles.code}>
      <OTPInput
        value={code}
        onChange={setCode}
        numInputs={6}
        inputType='number'
        shouldAutoFocus
        renderInput={(props) => <input {...props} />}
      />
      <ReSendCode username={username} />
      <Button size='large' loading={checkCode.isPending} onClick={onVerifyCode} type='primary'>
        {t('enterEmail.continue')}
      </Button>
    </div>
  )
}

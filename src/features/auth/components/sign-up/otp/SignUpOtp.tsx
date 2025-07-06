import { Button } from "antd"
import { FC, useState } from "react"
import OTPInput from "react-otp-input"
import { useTranslation } from "react-i18next"

import { useCheckVerifyEmailCode } from "../../../services/authMutations"
import { ReSendCode } from "./ReSendCode"

import styles from "./signUpOtp.module.scss"

type Props = {
  afterSuccess: () => void
  email: string
}

export const SignUpVerifyCode: FC<Props> = ({ afterSuccess, email }) => {
  const { t } = useTranslation('auth')
  const [code, setCode] = useState("")
  const checkCode = useCheckVerifyEmailCode()

  const onVerifyCode = () => {
    if (code.length === 6) {
      checkCode.mutateAsync({ email: email, code }).then(() => {
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
      <ReSendCode email={email} />
      <Button size='large' loading={checkCode.isPending} onClick={onVerifyCode} type='primary'>
        {t('enterEmail.continue')}
      </Button>
    </div>
  )
}

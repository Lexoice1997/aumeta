import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { rootPaths } from "@utils/constants/rootPaths"
import { EnterEmail } from "../../components/enter-email/EnterEmail"
import { NewPassword } from "../../components/new-password/NewPassword"
import { VerifyCode } from "../../components/verify-code/VerifyCode"
import { resetPasswordSteps } from "../../utils/enums/resetPasswordSteps"
import { LogoIcon } from "@assets/icons/LogoIcon"

import styles from "./resetPassword.module.scss"

export const ResetPassword = () => {
  const { t } = useTranslation('auth')
  const navigate = useNavigate()
  const [step, setStep] = useState(resetPasswordSteps.FIRST)
  const [username, setUsername] = useState("")

  const afterEnterEmail = (username: string) => {
    setUsername(username)
    setStep(resetPasswordSteps.SECOND)
  }

  const afterVerifyCode = () => {
    setStep(resetPasswordSteps.THIRD)
  }

  const afterNewPassword = () => {
    navigate(rootPaths.AUTH.INDEX)
  }

  const description = {
    1: t('resetPassword.messages.message1'),
    2: t('resetPassword.messages.message2'),
    3: t('resetPassword.messages.message3'),
  }

  const body = {
    1: <EnterEmail afterSuccess={afterEnterEmail} />,
    2: <VerifyCode afterSuccess={afterVerifyCode} username={username} />,
    3: <NewPassword afterSuccess={afterNewPassword} username={username} />,
  }

  return (
    <div className={styles.reset}>
      <div className={styles.header}>
        <div>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.body__title}>
          <h1>{t('resetPassword.button')}</h1>
          <p>{description[step as keyof typeof description]}</p>
        </div>
        {body[step as keyof typeof body]}
      </div>
      <div className={styles.footer}>
        <p>Hi Solution® {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

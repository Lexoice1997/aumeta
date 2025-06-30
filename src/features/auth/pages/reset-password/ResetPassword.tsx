import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { rootPaths } from "@utils/constants/rootPaths"
import { EnterEmail } from "../../components/enter-email/EnterEmail"
import { NewPassword } from "../../components/new-password/NewPassword"
import { VerifyCode } from "../../components/verify-code/VerifyCode"
import { resetPasswordSteps } from "../../utils/enums/resetPasswordSteps"

import styles from "./resetPassword.module.scss"

export const ResetPassword = () => {
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
    1: "Ваш пароль будет сброшен по электронной почте.",
    2: "Код был отправлен на ваш адрес электронной почты, введите его здесь.",
    3: "Введите новый пароль, состоящий из 6 букв или символов.",
  }

  const body = {
    1: <EnterEmail afterSuccess={afterEnterEmail} />,
    2: <VerifyCode afterSuccess={afterVerifyCode} username={username} />,
    3: <NewPassword afterSuccess={afterNewPassword} username={username} />,
  }

  return (
    <div className={styles.reset}>
      <div className={styles.header}>
        <div>logo</div>
      </div>
      <div className={styles.body}>
        <div className={styles.body__title}>
          <h1>Восстановить пароль</h1>
          <p>{description[step as keyof typeof description]}</p>
        </div>
        {body[step as keyof typeof body]}
      </div>
      <div className={styles.footer}>
        <p>Hi Solution® 2025</p>
      </div>
    </div>
  )
}

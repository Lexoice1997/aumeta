import { useState } from "react"

import { SignUpEmail } from "../../components/sign-up/email/SignUpEmail"
import { SignUpForm } from "../../components/sign-up/form/SignUpForm"
import { SignUpVerifyCode } from "../../components/sign-up/otp/SignUpOtp"

import styles from "./signUp.module.scss"

export const SignUpPage = () => {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")

  const afterEnterEmail = (username: string) => {
    setEmail(username)
    setStep(1)
  }

  const afterVerifyCode = () => {
    setStep(2)
  }

  const body = [
    <SignUpEmail afterSuccess={afterEnterEmail} />,
    <SignUpVerifyCode afterSuccess={afterVerifyCode} email={email} />,
    <SignUpForm email={email} />,
  ]

  return (
    <div className={styles.sign_up}>
      <div className={styles.header}></div>
      {body[step]}
      <div className={styles.footer}>
        <p>Hi Solution® - 2025</p>
      </div>
    </div>
  )
}

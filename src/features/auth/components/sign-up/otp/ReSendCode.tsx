import { Button } from "antd"
import { FC, useEffect, useRef, useState } from "react"

import { useCheckEmail } from "../../../services/authMutations"

import styles from "./signUpOtp.module.scss"
import { useTranslation } from "react-i18next"

type Props = {
  email: string
}

export const ReSendCode: FC<Props> = ({ email }) => {
  const { t } = useTranslation('auth')
  const [timer, setTimer] = useState(59)
  const ref = useRef<number>(0)
  const sendCode = useCheckEmail()

  const clear = () => {
    clearInterval(ref.current)
  }

  const start = () => {
    ref.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
  }

  useEffect(() => {
    start()

    return () => clear()
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  const onReSendCode = () => {
    sendCode.mutateAsync({ email }).then(() => {
      setTimer(59)
      start()
    })
  }

  return (
    <div className={styles.resend}>
      {timer ? (
        <p>
          {t('resetForm.resendSmsAfter')} <span>00:{timer < 10 ? `0${timer}` : timer}</span>
        </p>
      ) : (
        <Button loading={sendCode.isPending} type='link' onClick={onReSendCode}>
          {t('resetForm.resendSmsAfter')}
        </Button>
      )}
    </div>
  )
}

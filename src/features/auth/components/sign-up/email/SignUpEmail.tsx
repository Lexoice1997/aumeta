import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"

import { rootPaths } from "@utils/constants/rootPaths"
import { useCheckEmail } from "../../../services/authMutations"

import styles from "./signUpEmail.module.scss"

const { Item, useForm } = Form

type Props = {
  afterSuccess: (username: string) => void
}

export const SignUpEmail = ({ afterSuccess }: Props) => {
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
        <h1>Create an account or sing in</h1>
        <p>
          By creating an account or singing in, you understand and agree to Aumeta’s Terms. You also
          acknowledge our Cookie and Privacy policies.{" "}
        </p>
      </div>
      <Form form={formInstance} layout='vertical' className={styles.body__form} onFinish={onFinish}>
        <Item label='Email address' rules={[{ required: true, message: "" }]} name='email'>
          <Input size='large' placeholder='Email' type='email' />
        </Item>
        <Button size='large' loading={checkEmail.isPending} type='primary' htmlType='submit'>
          Continue
        </Button>
        <div className={styles.body__sign_up}>
          Already have an account? <Link to={rootPaths.AUTH.SIGN_IN}>Sing in</Link>
        </div>
      </Form>
    </div>
  )
}

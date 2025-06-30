import { Form } from "antd"
import clsx from "clsx"
import React from "react"
import { IMaskInput } from "react-imask"

import { SpinIndicator } from "../spin-indicator/SpinIndicator"

import styles from "./phoneInput.module.scss"
import { lengthValidator } from "@utils/helpers/lengthValidator"
import { inputMasks } from "@utils/constants/inputMasks"

type Props = {
  name?: string
  label?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  loading?: boolean
  className?: string
  placeholder?: string
}

export const PhoneInput: React.FC<Props> = ({
  name = "phone",
  label = "Телефон",
  required = false,
  onChange,
  disabled = false,
  loading = false,
  placeholder = "",
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={clsx(styles.phone_input, className)}>
      <Form.Item
        name={name}
        extra={<span>+998</span>}
        label={label}
        className={styles.phone_input}
        rules={[{ required: required, message: "" }, lengthValidator(9)]}
      >
        <IMaskInput
          mask={inputMasks.PHONE_MASK}
          unmask={true}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(styles.input_mask, "input-mask")}
        />
      </Form.Item>
      {loading && (
        <div className={styles.spin}>
          <SpinIndicator size={16} />
        </div>
      )}
    </div>
  )
}

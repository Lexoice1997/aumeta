import React from "react"

import { CrocodileIcon } from "@assets/icons/CrocodileIcon"

import styles from "./emptyCrocodile.module.scss"

interface PropsInterface {
  title?: string
  description?: string
  extra?: React.ReactNode
}

export const EmptyCrocodile = ({ title, description, extra }: PropsInterface) => {
  return (
    <div className={styles.container}>
      <CrocodileIcon />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {extra}
    </div>
  )
}

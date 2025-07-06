import { ReactNode } from "react"

import styles from '../../index.module.scss'

interface Props {
  icon: ReactNode
  title?: string
}

export const ContactItem = ({icon, title}: Props) => {
  return (
    <div className={styles.contact_item}>
      <div>
        <div className={styles.contact_icon}>
          {icon}
        </div>
      </div>
      {title && <p className={styles.contact_title}>{title}</p>}
    </div>
  )
}
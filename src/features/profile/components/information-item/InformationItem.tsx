import { ReactNode } from 'react'

import styles from '../../index.module.scss'

interface Props {
  title: string
  icon: ReactNode
}

export function InformationItem ({ icon, title }: Props) {
  return (
    <div className={styles.information_item}>
      <div>
        {icon}
      </div>
      <span className={styles.information_item__title}>{title}</span>
    </div>
  )
}
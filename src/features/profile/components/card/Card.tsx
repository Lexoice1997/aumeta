import { ReactNode } from 'react'
import styles from '../../index.module.scss'

interface Props {
  title: string
  topRightRender?: ReactNode
  children?: ReactNode
}

export const Card = ({ title, children, topRightRender }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <h1 className={styles.card_title}>{title}</h1>
        {topRightRender}
      </div>

      {children}
    </div>
  )
}
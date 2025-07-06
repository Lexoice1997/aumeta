import { Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import styles from "./index.module.scss"

export const Auth = () => {
  const { t } = useTranslation('auth')
  
  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.bg}>
          <h2>{t('headline')}</h2>
          <p>{t('description')}</p>
        </div>
      </div>
      <div className={styles.auth__right}>
        <Outlet />
      </div>
    </div>
  )
}

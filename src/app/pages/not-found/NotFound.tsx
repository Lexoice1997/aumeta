import { Button } from "antd"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { EmptyCrocodile } from "@components/empty-crocodile/EmptyCrocodile.tsx"

import styles from "./notFound.module.scss"

export const NotFound = () => {
  const { t } = useTranslation('app')
  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.not_found}>
      <EmptyCrocodile
        title={t('notfound.header')}
        description={t('notfound.description')}
        extra={<Button onClick={onBack}>{t('back')}</Button>}
      />
    </div>
  )
}

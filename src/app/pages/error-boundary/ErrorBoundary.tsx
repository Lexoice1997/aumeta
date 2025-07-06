import { Button } from "antd"
import { useErrorBoundary } from "react-error-boundary"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { EmptyCrocodile } from "@components/empty-crocodile/EmptyCrocodile"
import { ROOT_INDEX } from "@utils/constants/rootIndex"

import styles from "./errorBoundary.module.scss"

export const ErrorBoundaryPage = () => {
  const { t } = useTranslation('app')
  const { resetBoundary } = useErrorBoundary()
  const navigate = useNavigate()

  const onBack = () => {
    navigate(ROOT_INDEX)
    resetBoundary()
  }

  return (
    <div className={styles.not_found}>
      <EmptyCrocodile
        title='Uppps!'
        description={t('error')}
        extra={<Button onClick={onBack}>{t('back')}</Button>}
      />
    </div>
  )
}

import { Button } from "antd"
import { useNavigate } from "react-router-dom"

import { EmptyCrocodile } from "@components/empty-crocodile/EmptyCrocodile.tsx"

import styles from "./notFound.module.scss"

export const NotFound = () => {
  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.not_found}>
      <EmptyCrocodile
        title='Страница не найдено!'
        description='Запрошенная страница могла быть перемещена в другое место на сайте или вообще удалена.'
        extra={<Button onClick={onBack}>Назад</Button>}
      />
    </div>
  )
}

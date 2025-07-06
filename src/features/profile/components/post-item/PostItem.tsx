import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

import styles from '../../index.module.scss'

interface Props {
  title: string
}

export const PostItem = ({title}: Props) => {
  const { t } = useTranslation('main')

  return (
    <div className={styles.post_item}>
      <h2 className={styles.post_item__title}>{title}</h2>
      <Button type="primary">
        {t('homePage.templates.useThisTemplate')}
      </Button>
    </div>
  )
}
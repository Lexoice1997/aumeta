import { useTranslation } from 'react-i18next'
import styles from './stepButton.module.scss'

const StepButton = ({ number }: { number: number }) => {
	const { t } = useTranslation('main')
	return (
		<div className={styles.step_indicator}>
			<div className={styles.container}>
				<div className={styles.circle}>{number}</div>
				<span className={styles.label}>{t('homePage.infoHowToUse.step')}</span>
			</div>
		</div>
	)
}

export default StepButton

import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { ArrowRightIcon } from "@assets/icons/ArrowRightIcon"
import { BriefCaseIcon } from "@assets/icons/BriefCaseIcon"
import { UserIcon } from "@assets/icons/UserIcon"
import { UserSearchIcon } from "@assets/icons/UserSearchIcon"
import { rootPaths } from "@utils/constants/rootPaths"

import styles from "./joinUs.module.scss"

export const JoinUsPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('auth')

  const onSignIn = () => {
    navigate(rootPaths.AUTH.SIGN_IN)
  }

  const onSignUp = () => {
    navigate(rootPaths.AUTH.SIGN_UP)
  }

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3>{t('joinUs')}</h3>
          <p>{t('placeholder')}</p>
        </div>
        <div className={styles.list}>
          <div className={styles.item} onClick={onSignUp}>
            <div className={styles.item__logo}>
              <BriefCaseIcon />
            </div>
            <div className={styles.item__content}>
              <h4>{t('accountTypes.company.title')}</h4>
              <p>{t('accountTypes.company.description')}</p>
            </div>
            <div className={styles.arrow}>
              <ArrowRightIcon />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__logo}>
              <UserSearchIcon />
            </div>
            <div className={styles.item__content}>
              <h4>{t('accountTypes.hr.title')}</h4>
              <p>{t('accountTypes.hr.title')}.</p>
            </div>
            <div className={styles.arrow}>
              <ArrowRightIcon />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__logo}>
              <UserIcon />
            </div>
            <div className={styles.item__content}>
              <h4>{t('accountTypes.user.title')}</h4>
              <p>{t('accountTypes.user.title')}</p>
            </div>
            <div className={styles.arrow}>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {t('signInPrompt')} <span onClick={onSignIn}>{t('singInLink')}</span>
        </div>
      </div>
    </div>
  )
}

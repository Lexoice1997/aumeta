import { ArrowRightIcon } from "@assets/icons/ArrowRightIcon"
import { BriefCaseIcon } from "@assets/icons/BriefCaseIcon"
import { UserIcon } from "@assets/icons/UserIcon"
import { UserSearchIcon } from "@assets/icons/UserSearchIcon"

import { rootPaths } from "@utils/constants/rootPaths"
import { useNavigate } from "react-router-dom"
import styles from "./joinUs.module.scss"

export const JoinUsPage = () => {
  const navigate = useNavigate()

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
          <h3>Join Us!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className={styles.list}>
          <div className={styles.item} onClick={onSignUp}>
            <div className={styles.item__logo}>
              <BriefCaseIcon />
            </div>
            <div className={styles.item__content}>
              <h4>Company</h4>
              <p>Own or belong to a company, this is for you.</p>
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
              <h4>HR</h4>
              <p>Personal account to manage all you activities.</p>
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
              <h4>User</h4>
              <p>Personal account to manage all you activities.</p>
            </div>
            <div className={styles.arrow}>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          Already have an account? <span onClick={onSignIn}>Sign In</span>
        </div>
      </div>
    </div>
  )
}

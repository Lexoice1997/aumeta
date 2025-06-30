import { Outlet } from "react-router-dom"

import styles from "./index.module.scss"

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.bg}>
          <h2>Welcome to Aumeta</h2>
          <p>No matter the industry, here you'll find team members who truly make a difference</p>
        </div>
      </div>
      <div className={styles.auth__right}>
        <Outlet />
      </div>
    </div>
  )
}

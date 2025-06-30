import { Avatar, Dropdown, MenuProps } from "antd"
import { Outlet } from "react-router-dom"

import { EngIcon } from "@assets/icons/EngIcon"

import { FacebookIcon } from "@assets/icons/FacebookIcon"
import { InstagramIcon } from "@assets/icons/InstagramIcon"
import { LinkedInIcon } from "@assets/icons/LinkedInIcon"
import { TwitterIcon } from "@assets/icons/TwitterIcon"
import styles from "./mainLayout.module.scss"

export const MainLayout = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className={styles.dropdown__item}>
          <EngIcon /> En
        </div>
      ),
    },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>Logo</div>
        <ul className={styles.header__navbar}>
          <li>Post Job</li>
          <li>Start up</li>
          <li>Events</li>
          <li>Grants</li>
        </ul>
        <div className={styles.header__right}>
          <Dropdown menu={{ items }}>
            <div className={styles.dropdown__item}>
              <EngIcon /> En
            </div>
          </Dropdown>
          <div className={styles.profile}>
            <div className={styles.profile__left}>
              <h3>Jacob Jones</h3>
              <p>HR company</p>
            </div>
            <Avatar style={{ backgroundColor: "#d9d9d9", verticalAlign: "middle" }} size='large'>
              U
            </Avatar>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.top__item}>
            Logo
            <div>
              This service web portal connects businesses with freelancers, facilitating project collaboration
              and hiring
            </div>
            <div className={styles.socials}>
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className={styles.top__item}>
            <h3>Quick Link</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Pricing</p>
          </div>
          <div className={styles.top__item}>
            <h3>Employers</h3>
            <p>Post a Job</p>
            <p>Recently post</p>
            <p>Information</p>
          </div>
          <div className={styles.top__item}>
            <h3>Support</h3>
            <p>Faqs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>© 2025 Aumeta</div>
          <div className={styles.bottom__right}>
            <p>Privacy</p>
            <p>Site map</p>
            <p>Company</p>
          </div>
        </div>
      </div>
    </div>
  )
}

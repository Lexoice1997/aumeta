import { Avatar, Button, Dropdown, MenuProps, Modal } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import i18next from 'i18next'
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { useState } from "react"

import { FacebookIcon } from "@assets/icons/FacebookIcon"
import { InstagramIcon } from "@assets/icons/InstagramIcon"
import { LinkedInIcon } from "@assets/icons/LinkedInIcon"
import { TwitterIcon } from "@assets/icons/TwitterIcon"
import { rootPaths } from '../../utils/constants/rootPaths'
import { useGetClientProfile } from "../../../features/profile/services/profileQueries"
import { Languages } from '@utils/constants/menuLanguages'
import { languages } from "@utils/enums/languages"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { setLanguage, setSidebar } from "@slices/appSlice"
import { imgSrc } from "@utils/helpers/getSrc"
import { LogoIcon } from "@assets/icons/LogoIcon"
import { MenuIcon } from "@assets/icons/MenuIcon"
import { useLogOut } from "@services/appMutations"

import styles from "./mainLayout.module.scss"
import { LocalStorage } from "@utils/helpers/localStorage"
import { setIsAuth } from "@slices/userSlice"
import { UserIcon } from "@assets/icons/UserIcon"
import { LogOutIcon } from "@assets/icons/LogOutIcon"

export const MainLayout = () => {
  const { t } = useTranslation('app')
  const navigate = useNavigate()
	const dispatch = useAppDispatch();
  const logout = useLogOut()
  const [menuOpen, setMenuOpen] = useState(false)
  const language = useAppSelector(state => state.app.language)
  const { data, isLoading, isError } = useGetClientProfile()

  const onChangeLanguage = (lang: languages) => {
		dispatch(setLanguage(lang));
		i18next.changeLanguage(lang);
		window.location.reload();
	};

  const onLogout = () => {
    logout.mutateAsync().then(() => {
      dispatch(setIsAuth(false))
      dispatch(
        setSidebar({
          collapsed: false,
          collapsible: true,
        })
      )
      LocalStorage.clear()
      navigate(rootPaths.AUTH.INDEX)
    })
  }

  const items: MenuProps["items"] = Object.keys(Languages).map(lang => ({
    key: lang,
    label: (
      <div className={styles.dropdown__item}>
        {Languages[lang as languages].icon} {Languages[lang as languages].title}
      </div>
    ),
    onClick: () => onChangeLanguage(lang as languages)
  }))

  const profileDropdownItems: MenuProps["items"] = [
    { key: 'profile', label: (<div className={styles.dropdown__item}>
        <UserIcon color="var(--gray-900)" />
        {t('profile')}
      </div>), onClick: () => navigate(rootPaths.PROFILE.INDEX) },
    { key: 'logout', label: (<div className={styles.dropdown__item}>
      <LogOutIcon color="var(--gray-900)" />
      {t('logout')}
    </div>), onClick: onLogout },
  ] 

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={clsx(styles.container, styles.header_items)}>
          <Link to={rootPaths.MAIN.INDEX}>
            <LogoIcon />
          </Link>
          <ul className={styles.header__navbar}>
            <li>{t('navbar.postJob')}</li>
            <li>{t('navbar.startUp')}</li>
            <li>{t('navbar.events')}</li>
            <li>{t('navbar.grants')}</li>
          </ul>
          <div className={styles.header__right}>
            <Dropdown menu={{ items }}>
              <div className={styles.dropdown__item}>
                {Languages[language].icon}{" "}<span className={styles.md_hidden}>{Languages[language].title}</span>
              </div>
            </Dropdown>
            {!isLoading && !isError && <Dropdown menu={{ items: profileDropdownItems }}>
                <div className={styles.profile}>
                  <div className={clsx(styles.profile__left, styles.md_hidden)}>
                    <h3>{data?.name}</h3>
                    <p>{t('navbar.hrCompany')}</p>
                  </div>
                  <Avatar src={data?.avatar ? imgSrc(data.avatar.absolutePath) : null} style={{ backgroundColor: "#d9d9d9", verticalAlign: "middle" }} size='large'>
                    {String(data?.name[0]).toUpperCase()}
                  </Avatar>
                </div>
              </Dropdown>}
            <Button onClick={() => setMenuOpen(true)} className={styles.md_visible} type="text" shape="circle">
              <MenuIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.top__item}>
              <Link to={rootPaths.MAIN.INDEX}>
                <LogoIcon color="white" />
              </Link>
              <div>
                {t('footer.description')}
              </div>
              <div className={styles.socials}>
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className={styles.top__item}>
              <h3>{t('footer.quickLink.title')}</h3>
              <p>{t('footer.quickLink.about')}</p>
              <p>{t('footer.quickLink.contact')}</p>
              <p>{t('footer.quickLink.pricing')}</p>
            </div>
            <div className={styles.top__item}>
              <h3>{t('footer.employers.title')}</h3>
              <p>{t('footer.employers.postAJob')}</p>
              <p>{t('footer.employers.recentlyPost')}</p>
              <p>{t('footer.information.title')}</p>
            </div>
            <div className={styles.top__item}>
              <h3>{t('footer.information.support')}</h3>
              <p>{t('footer.information.faqs')}</p>
              <p>{t('footer.information.privacyPolicy')}</p>
              <p>{t('footer.information.termsAndConditions')}</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div>© {new Date().getFullYear()} Aumeta</div>
            <div className={styles.bottom__right}>
              <p>{t('footer.privacy')}</p>
              <p>{t('footer.siteMap')}</p>
              <p>{t('footer.company')}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal footer open={menuOpen} onCancel={() => setMenuOpen(false)}>
        <div className={styles.column_links}>
          <Button block>
            {t('navbar.postJob')}
          </Button>
          <Button block>
            {t('navbar.startUp')}
          </Button>
          <Button block>
            {t('navbar.events')}
          </Button>
          <Button block>
            {t('navbar.grants')}
          </Button>
        </div>
      </Modal>
    </div>
  )
}

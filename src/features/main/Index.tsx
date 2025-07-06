import { Button } from "antd"
import { useTranslation } from "react-i18next"

import { FreelanceIcon } from "@assets/icons/FreelanceIcon"
import { JobIcon } from "@assets/icons/JobIcon"
import { SendIcon } from "@assets/icons/SendIcon"
import MainPagePng from "@assets/images/MainPage.png"
import { useAppDispatch } from "@hooks/useRedux"
import { PostFreelanceModal } from "./components/post-freelance/PostFreelance"
import { PostInternshipModal } from "./components/post-internship/PostInternship"
import { PostJobModal } from "./components/post-job/PostJobModal"
import { PostOneTimeJobModal } from "./components/post-one-time-job/PostOneTimeJob"
import { setPostFreelanceModalData, setPostInternshipModalData, setPostModalData, setPostOneTimeModalData } from "./slices/mainSlice"

import styles from "./index.module.scss"

export const MainPage = () => {
  const { t } = useTranslation("main")

  const dispatch = useAppDispatch()

  const onOpenPostModal = () => {
    dispatch(setPostModalData({ visible: true }))
  }

  const onOpenFreelanceModal = () => {
    dispatch(setPostFreelanceModalData({ visible: true }))
  }

  const onOpenOneTimeModal = () => {
    dispatch(setPostOneTimeModalData({ visible: true }))
  }

  const onOpenInternshipModal = () => {
    dispatch(setPostInternshipModalData({ visible: true }))
  }

  return (
    <div className={styles.main}>
      <div className={styles.section_top}>
        <div className={styles.left}>
          <h1>{t("homePage.headline")}</h1>
          <p>{t("homePage.description")}</p>
          <div className={styles.left__buttons}>
            <Button type='primary' onClick={onOpenPostModal}>
              {t("homePage.actions.postJob")}
            </Button>
            <Button type='primary'>{t("homePage.actions.howToUse")}</Button>
          </div>
        </div>
        <div className={styles.right}>
          <img src={MainPagePng} />
        </div>
      </div>
      <div className={styles.section_post}>
        <h2>{t("homePage.postYourInformation")}</h2>
        <div className={styles.posts}>
          <div className={styles.post}>
            <JobIcon />
            <h3>{t("homePage.jobTypes.job.title")}</h3>
            <p>{t("homePage.jobTypes.job.description")}</p>
            <Button type='primary' onClick={onOpenPostModal}>
              {t("homePage.templates.templates")} <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <FreelanceIcon />
            <h3>{t("homePage.jobTypes.freelance.title")}</h3>
            <p>{t("homePage.jobTypes.freelance.description")}</p>
            <Button type='primary' onClick={onOpenFreelanceModal}>
              {t("homePage.templates.templates")} <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <JobIcon />
            <h3>{t("homePage.jobTypes.oneTimeJob.title")}</h3>
            <p>{t("homePage.jobTypes.oneTimeJob.description")}</p>
            <Button type='primary' onClick={onOpenOneTimeModal}>
              {t("homePage.templates.templates")} <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <FreelanceIcon />
            <h3>{t("homePage.jobTypes.internship.title")}</h3>
            <p>{t("homePage.jobTypes.internship.description")}</p>
            <Button type='primary' onClick={onOpenInternshipModal}>
              {t("homePage.templates.templates")} <SendIcon />
            </Button>
          </div>
        </div>
      </div>
      <PostJobModal />
      <PostFreelanceModal />
      <PostOneTimeJobModal />
      <PostInternshipModal />
    </div>
  )
}

import { Button } from "antd"

import { FreelanceIcon } from "@assets/icons/FreelanceIcon"
import { JobIcon } from "@assets/icons/JobIcon"
import { SendIcon } from "@assets/icons/SendIcon"
import MainPagePng from "@assets/images/MainPage.png"
import { useAppDispatch } from "@hooks/useRedux"
import { PostFreelanceModal } from "./components/post-freelance/PostFreelance"
import { PostInternshipModal } from "./components/post-internship/PostInternship"
import { PostJobModal } from "./components/post-job/PostJobModal"
import { PostOneTimeJobModal } from "./components/post-one-time-job/PostOneTimeJob"
import {
  setPostFreelanceModalData,
  setPostInternshipModalData,
  setPostModalData,
  setPostOneTimeModalData,
} from "./slices/mainSlice"

import styles from "./index.module.scss"

export const MainPage = () => {
  const dispatch = useAppDispatch()

  const onOpenPostModal = () => {
    dispatch(setPostModalData({ visible: true }))
  }

  const onOpenFreelancetModal = () => {
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
          <h1>Hire Top Talent Without Breaking the Bank!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className={styles.left__buttons}>
            <Button type='primary'>Post job</Button>
            <Button type='primary'>How to use?</Button>
          </div>
        </div>
        <div className={styles.right}>
          <img src={MainPagePng} />
        </div>
      </div>
      <div className={styles.section_post}>
        <h2>Post your information</h2>
        <div className={styles.posts}>
          <div className={styles.post}>
            <JobIcon />
            <h3>Job</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <Button type='primary' onClick={onOpenPostModal}>
              Templates <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <FreelanceIcon />
            <h3>Freelance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <Button type='primary' onClick={onOpenFreelancetModal}>
              Templates <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <JobIcon />
            <h3>One-time job</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <Button type='primary' onClick={onOpenOneTimeModal}>
              Templates <SendIcon />
            </Button>
          </div>
          <div className={styles.post}>
            <FreelanceIcon />
            <h3>Internship</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <Button type='primary' onClick={onOpenInternshipModal}>
              Templates <SendIcon />
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

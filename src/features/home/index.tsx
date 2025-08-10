import clsx from 'clsx'

import { GlobalMarkIcon } from '@assets/icons/GlobalMarkIcon'
import { BuildingsIcon } from '@assets/icons/Buildings'
import { UsersIcon } from '@assets/icons/UsersIcon'
import { BriefCaseIcon } from '@assets/icons/BriefCaseIcon'
import { HomeIcon } from './assets/icons/HomeIcon'
import { Link } from 'react-router-dom'
import { rootPaths } from '@utils/constants/rootPaths'
import { ArrowRightIcon } from '@assets/icons/ArrowRightIcon'
import { LogoIcon } from '@assets/icons/LogoIcon'
import { StarIcon } from './assets/icons/StarIcon'
import { Reviews } from './utils/constants/reviews'

import CompanyImage from './assets/images/company.png'
import PostJobsImage from './assets/images/post-jobs.png'
import UseTemplatesImage from './assets/images/use-templates.png'

import styles from './index.module.scss'


export function HomePage() {

  return (
    <main>
      <header className={styles.hero}>
        <div className={clsx(styles.container, styles.hero__wrapper)}>
          <div className={styles.hero__content}>
            <div className={styles.hero__left}>
              <h1>Auemta - Where Global <br /> Talent Meets Purpose</h1>
              <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Quia libero ipsum maiores deserunt quibusdam ut.</p>
              <Link className={styles.button} to={rootPaths.MAIN.INDEX}>POST JOB <ArrowRightIcon /></Link>
            </div>
            <div className={styles.hero__image}>
              <HomeIcon />
            </div>
          </div>
          <div className={styles.cards_wrapper}>

            <div className={styles.card_item}>
              <div className={styles.card_item__icon}>
                <GlobalMarkIcon />
              </div>
              <div className={styles.card_item__info}>
                <h3>150</h3>
                <p>Country</p>
              </div>
            </div>
            <div className={styles.card_item}>
              <div className={styles.card_item__icon}>
                <BuildingsIcon />
              </div>
              <div className={styles.card_item__info}>
                <h3>97,354</h3>
                <p>Companies</p>
              </div>
            </div>
            <div className={styles.card_item}>
              <div className={styles.card_item__icon}>
                <UsersIcon />
              </div>
              <div className={styles.card_item__info}>
                <h3>3,847,154</h3>
                <p>Candidates</p>
              </div>
            </div>
            <div className={styles.card_item}>
              <div className={styles.card_item__icon}>
                <BriefCaseIcon />
              </div>
              <div className={styles.card_item__info}>
                <h3>150</h3>
                <p>Country</p>
              </div>
            </div>

          </div>
        </div>
      </header>

      <section className={styles.about_us}>
        <div className={clsx(styles.container, styles.about_us__wrapper)}>
          <div className={styles.about_us__info}>
            <h1>What's Aumeta?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam officia omnis odio perspiciatis quos distinctio consequatur recusandae fugit! Fugiat ipsam quis optio modi at dolores facere? Laboriosam quod aut nostrum quae? Qui officia architecto obcaecati minima cumque vitae non, nesciunt voluptate ipsa accusantium nemo iste tempore, in deleniti reiciendis numquam eligendi perferendis dolore sed fugit odio modi! Totam, quam debitis?</p>
          </div>
          <div className={styles.about_us__image}>
          </div>
        </div>
      </section>

      <section className={styles.how_to_use}>

        <div className={clsx(styles.container, styles.how_to_use__wrapper)}>
          <div className={styles.center_title}>
            <h1>Information how to use</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas soluta, saepe omnis optio impedit quae eligendi temporibus numquam et?</p>
          </div>

          <div className={styles.step_wrapper}>
            <div className={styles.step_number}>
              <div className={styles.step_circle}>1</div>
              <span>Step</span>
            </div>

            <div className={styles.step_body}>

              <div className={styles.step_left}>
                <h2 className={styles.step_body_title}>Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae enim debitis autem. Quas, dignissimos nisi perferendis unde corrupti consequuntur architecto laboriosam exercitationem sed, quasi, esse tempora provident possimus enim?</p>
              </div>
              <div className={styles.step_right}>
                <img src={CompanyImage} alt="About us" />
              </div>

            </div>
          </div>

          <div className={styles.step_wrapper}>
            <div className={styles.step_number}>
              <div className={styles.step_circle}>2</div>
              <span>Step</span>
            </div>

            <div className={styles.step_body}>

              <div className={styles.step_left}>
                <div className={styles.step_cards}>
                  <img src={UseTemplatesImage} alt="Use Templates" />
                </div>
              </div>
              <div className={styles.step_right}>
                <h2 className={styles.step_body_title}>Use Templates</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae enim debitis autem. Quas, dignissimos nisi perferendis unde corrupti consequuntur architecto laboriosam exercitationem sed, quasi, esse tempora provident possimus enim?</p>
              </div>

            </div>
          </div>

          <div className={styles.step_wrapper}>
            <div className={styles.step_number}>
              <div className={styles.step_circle}>3</div>
              <span>Step</span>
            </div>

            <div className={styles.step_body}>

              <div className={styles.step_left}>
                <div className={styles.step_cards}>
                  <h2 className={styles.step_body_title}>Post job</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae enim debitis autem. Quas, dignissimos nisi perferendis unde corrupti consequuntur architecto laboriosam exercitationem sed, quasi, esse tempora provident possimus enim?</p>
                </div>
              </div>
              <div className={styles.step_right}>
                <img src={PostJobsImage} alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className={styles.partners}>
        <div className={clsx(styles.container, styles.partners_wrapper)}>
          <div className={styles.partners_title}>
            <h1>Our Partners</h1>
            <p>Togetger we make Aumeta a reality.</p>
          </div>

          <div className={styles.partners_content}>
            <div className={styles.parners_item}>
              <LogoIcon color="white" />
            </div>
            <div className={styles.parners_item}>
              <LogoIcon color="white" />
            </div>
            <div className={styles.parners_item}>
              <LogoIcon color="white" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <div className={clsx(styles.container, styles.reviews_wrapper)}>
          <h1 className={styles.reviews_title}>Reviews</h1>

          <div className={styles.reviews_items}>

            {
              Reviews.map((review, i) => (
                <div className={styles.reviews_item} key={i}>
                  <div className={styles.reviews_star}>
                    {Array(review.star).fill(0).map((_,i) => <StarIcon key={i} />)}
                  </div>
                  <div className={styles.reviews_body}>
                    <p>{review.comment}</p>
                  </div>
                  <div className={styles.reviews_footer}>
                    <div className={styles.reviews_author}>
                      <div className={styles.reviewsauthor__avatar}>
                        <img src={review.avatar} alt="" />
                      </div>
                      <p className={styles.reviews_author__name}>{review.author}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>

      </section>
    </main>
  )
}
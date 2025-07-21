import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { JobIcon } from '@assets/icons/JobIcon'
import MainAddress from '@assets/images/MainAddress.png'
import MainBack from '@assets/images/MainBack.png'
import MainCheck from '@assets/images/MainCheakinfo.png'
import MainPageImg from '@assets/images/MainPage2.png'
import MainRow from '@assets/images/MainStepTwo.png'
import MainRowCursor from '@assets/images/MainStepTwoCursor.png'
import MainTop from '@assets/images/MainTop.png'
import { Button, Card, Carousel, Rate, Space } from 'antd'
import { PostFreelanceModal } from './components/post-freelance/PostFreelance'
import { PostInternshipModal } from './components/post-internship/PostInternship'
import { PostJobModal } from './components/post-job/PostJobModal'
import { PostOneTimeJobModal } from './components/post-one-time-job/PostOneTimeJob'

import { LogoIcon } from '@assets/icons/LogoIcon'
import PostJobsIcon from '@assets/icons/PostJobsIcon'
import GoogleIcon from '@assets/images/Google.png'
import DellIcon from '@assets/images/dell.png'
import MicrosoftIcon from '@assets/images/microsoft.png'
import { CarouselRef } from 'antd/es/carousel'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import StepButton from './components/step-button/StepButton'
import styles from './index.module.scss'

const data = [
	{
		logo: <img src={GoogleIcon} className={styles.logo} />,
		company: 'Google LLC',
		feedback:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		rating: 5,
	},
	{
		logo: <img src={DellIcon} className={styles.logo} />,
		company: 'DELL company',
		feedback:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		rating: 5,
	},
	{
		logo: <img src={MicrosoftIcon} className={styles.logo} />,
		company: 'Microsoft',
		feedback:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		rating: 5,
	},
]

type CardType = 'company' | 'hr' | 'oneTimeJob'

export const MainPage = () => {
	const carouselRef = useRef<CarouselRef>(null)

	const next = () => carouselRef.current?.next()
	const prev = () => carouselRef.current?.prev()

	const { t } = useTranslation('main')

	const cardContent: Record<CardType, { title: string }> = {
		company: {
			title: t('homePage.infoHowToUse.firstStep.cards.company.title'),
		},
		hr: {
			title: t('homePage.infoHowToUse.firstStep.cards.hr.title'),
		},
		oneTimeJob: {
			title: t('homePage.infoHowToUse.firstStep.cards.oneTimeJob.title'),
		},
	}

	// const dispatch = useAppDispatch()

	// const onOpenPostModal = () => {
	// 	dispatch(setPostModalData({ visible: true }))
	// }

	// const onOpenFreelanceModal = () => {
	// 	dispatch(setPostFreelanceModalData({ visible: true }))
	// }

	// const onOpenOneTimeModal = () => {
	// 	dispatch(setPostOneTimeModalData({ visible: true }))
	// }

	// const onOpenInternshipModal = () => {
	// 	dispatch(setPostInternshipModalData({ visible: true }))
	// }

	const [selected, setSelected] = useState<CardType>('company')

	return (
		<div className={styles.main}>
			<section>
				<div className={styles.new_section_top}>
					<div className={styles.new_section_top__container}>
						<div>
							<h1>{t('homePage.purpose')}</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								sed libero nobis in, voluptas quia repellendus voluptatem
								blanditiis, assumenda at repellat dolorum tempora, cupiditate
								perferendis! Eum voluptates eveniet est nobis.
							</p>

							<Button
								type='default'
								iconPosition='end'
								icon={<PostJobsIcon />}
								style={{
									background:
										'linear-gradient(45deg, rgba(186,213,243,1), rgba(186,213,243,0))',
								}}
							>
								{t('homePage.actions.postJob')}
							</Button>
						</div>
						<img src={MainPageImg} alt='main-page-img' />
					</div>
				</div>
			</section>
			<section className={styles.statistics}>
				<div className={styles.statistics__cards_container}>
					<div className={styles.card}>
						<div className={styles.card__icon}>
							<JobIcon />
						</div>
						<div>
							<h2>150</h2>
							<p>{t('homePage.statistics.country')}</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.card__icon}>
							<JobIcon />
						</div>
						<div>
							<h2>97,354</h2>
							<p>{t('homePage.statistics.companies')}</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.card__icon}>
							<JobIcon />
						</div>
						<div>
							<h2>38,47,154</h2>
							<p>{t('homePage.statistics.candidates')}</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.card__icon}>
							<JobIcon />
						</div>
						<div>
							<h2>7,532</h2>
							<p>{t('homePage.statistics.newJobs')}</p>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.about_us}>
				<main className={styles.about_us__container}>
					<aside className={styles.about_us__texts}>
						<h1>{t('homePage.aboutUs.title')}</h1>
						<p>{t('homePage.aboutUs.text')}</p>
					</aside>
				</main>
			</section>
			<section className={styles.info_use}>
				<header>
					<h1>{t('homePage.infoHowToUse.title')}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br />
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</header>
				<section className={styles.info_use__step_first}>
					<header>
						<StepButton number={1} />

						<h1>{t('homePage.infoHowToUse.firstStep.signUp')}</h1>
					</header>
					<div className={styles.cards_container}>
						<div
							className={`${styles.card} ${
								selected === 'company' ? styles.active : ''
							}`}
							onClick={() => setSelected('company')}
						>
							<div className={styles.card__icon}>
								<JobIcon />
							</div>
							<div>
								<h2>
									{t('homePage.infoHowToUse.firstStep.cards.company.title')}
								</h2>
								<p>{t('homePage.infoHowToUse.firstStep.cards.company.text')}</p>
							</div>
						</div>
						<div
							className={`${styles.card} ${
								selected === 'hr' ? styles.active : ''
							}`}
							onClick={() => setSelected('hr')}
						>
							<div className={styles.card__icon}>
								<JobIcon />
							</div>
							<div>
								<h2>{t('homePage.infoHowToUse.firstStep.cards.hr.title')}</h2>
								<p>{t('homePage.infoHowToUse.firstStep.cards.hr.text')}</p>
							</div>
						</div>
						<div
							className={`${styles.card} ${
								selected === 'oneTimeJob' ? styles.active : ''
							}`}
							onClick={() => setSelected('oneTimeJob')}
						>
							<div className={styles.card__icon}>
								<JobIcon />
							</div>
							<div>
								<h2>
									{t('homePage.infoHowToUse.firstStep.cards.oneTimeJob.title')}
								</h2>
								<p>
									{t('homePage.infoHowToUse.firstStep.cards.oneTimeJob.text')}
								</p>
							</div>
						</div>
					</div>
					<main>
						<aside>
							<h2>{cardContent[selected].title}</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
								exercitationem maxime numquam rem obcaecati, eligendi hic
								tempora natus minima est? Harum rem tenetur perferendis eaque
								explicabo saepe totam quos doloremque?
								<br />
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
								commodi, consequatur a ut inventore suscipit magnam ullam,
								quibusdam dolorum cumque deleniti itaque similique quis tenetur
								aliquid totam ex eum corporis!
								<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
								velit laboriosam? Nobis minus quia iste, alias animi, sapiente
								fugiat officia commodi qui similique impedit labore sint,
								explicabo quibusdam deserunt voluptates?
							</p>
						</aside>
						<div>
							<img
								src={MainTop}
								alt=''
								className={styles.info_use__step_first__img_top}
							/>
							<img
								src={MainBack}
								alt=''
								className={styles.info_use__step_first__img_back}
							/>
						</div>
					</main>
				</section>
				<section className={styles.info_use__step_second}>
					<header>
						<StepButton number={2} />
					</header>
					<main>
						<div>
							<img src={MainRow} alt='' className={styles.main_row} />
							<img src={MainRowCursor} alt='' className={styles.main_cursor} />
						</div>
						<aside>
							<h2>{t('homePage.infoHowToUse.secondStep.useTemp')}</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</aside>
					</main>
				</section>
				<section className={styles.info_use__step_third}>
					<header>
						<StepButton number={3} />
						<h1>{t('homePage.infoHowToUse.thirdStep.postJob')}</h1>
					</header>
					<main>
						<aside>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</aside>
						<div>
							<img
								src={MainAddress}
								alt=''
								className={styles.info_use__step_first__img_top}
							/>
							<img
								src={MainCheck}
								alt=''
								className={styles.info_use__step_first__img_back}
							/>
						</div>
					</main>
				</section>
			</section>
			<section className={styles.our_partners}>
				<header>
					<h1>{t('homePage.ourPartners.title')}</h1>
					<p>{t('homePage.ourPartners.subtitle')}</p>
				</header>
				<div className={styles.cards_container}>
					<LogoIcon color='white' />
					<LogoIcon color='white' />
					<LogoIcon color='white' />
				</div>
			</section>
			<section className={styles.reviews}>
				<header>
					<h1>{t('homePage.reviews.title')}</h1>
				</header>
				<div className={styles.wrapper}>
					<Button
						shape='circle'
						icon={<LeftOutlined />}
						onClick={prev}
						className={styles.navBtn}
					/>
					<Carousel
						ref={carouselRef}
						dots
						autoplay
						slidesToShow={3}
						className={styles.carousel}
					>
						{data.map((item, index) => (
							<div key={index}>
								<Card className={styles.card} bordered>
									<Rate disabled defaultValue={item.rating} />
									<p>{item.feedback}</p>
									<Space size='middle' className={styles.footer}>
										{item.logo}
										<strong>{item.company}</strong>
									</Space>
								</Card>
							</div>
						))}
					</Carousel>
					<Button
						shape='circle'
						icon={<RightOutlined />}
						onClick={next}
						className={styles.navBtn}
					/>
				</div>
			</section>

			<PostJobModal />
			<PostFreelanceModal />
			<PostOneTimeJobModal />
			<PostInternshipModal />
		</div>
	)
}

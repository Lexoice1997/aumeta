import { Button } from 'antd'

import { Card } from './components/card/Card'
import { PostItem } from './components/post-item/PostItem'
import { EditIcon } from '@assets/icons/EditIcon'
import { ContactItem } from './components/contact-item/ContactItem'
import { PhoneIcon } from '@assets/icons/PhoneIcon'
import { EmailIcon } from '@assets/icons/EmailIcon'
import { GlobusIcon } from '@assets/icons/GlobusIcon'
import { MapMarkerIcon } from '@assets/icons/MapMarkerIcon'
import { InformationItem } from './components/information-item/InformationItem'
import { ClockIcon } from '@assets/icons/ClockIcon'
import { UsersIcon } from '@assets/icons/UsersIcon'
import { EyeIcon } from '@assets/icons/EyeIcon'
import { ShareIcon } from '@assets/icons/ShareIcon'
import { useGetClientProfile, useGetWorkModes } from './services/profileQueries'
import { useAppDispatch } from '@hooks/useRedux'
import { setInformationModalData, setProfileModalData, setContactModalData } from './slices/profileSlice'
import { ClientInformationModal } from './components/client-information-modal/ClientInformationModal'
import { ClientProfileModal } from './components/profile-modal/ProfileModal'
import { ContactFormModal } from './components/contacts-modal/ContactsModal'
import { imgSrc } from '@utils/helpers/getSrc'
import { useTranslation } from 'react-i18next'
import { languages } from '@utils/enums/languages'

import styles from './index.module.scss'

export const ProfilePage = () => {
  const { t, i18n } = useTranslation('profile')
  const { t: appT } = useTranslation('app')
  const { data } = useGetClientProfile()
  const { data: modes, isLoading: workModeLoading } = useGetWorkModes()

  const dispatch = useAppDispatch()
  
  const onOpenInformation = () => {
    dispatch(setInformationModalData({visible:true}))
  }

  const onOpenProfile = () => {
    dispatch(setProfileModalData({visible:true}))
  }

  const onOpenContact = () => {
    dispatch(setContactModalData({visible:true}))
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.profile_panel}>
            <div className={styles.profile_panel__top}></div>
            <div className={styles.profile_panel__body}>
              <div className={styles.profile_panel__information}>
                <div className={styles.profile_panel__company_name}>
                  <h2>{data?.name}</h2>
                  <h3>{data?.country?.name?.[i18n.language as languages]}, {data?.city}</h3>
                </div>

                <ul className={styles.profile_panel__company_items}>
                  <li className={styles.profile_panel__company_item}>
                    <p>{t('profilePage.industry')}</p>
                    <span>{data?.industry.name?.[i18n.language as languages]}</span>
                  </li>
                  <li className={styles.profile_panel__company_item}>
                    <p>{t('profilePage.services')}</p>
                    {!data?.services?.length && <span>{t('profilePage.servicesEmpty')}</span>}
                    <span>{data?.services.map(service => service.name?.[i18n.language as languages]).join(', ')}</span>
                  </li>
                </ul>
              </div>
              <div className={styles.profile_panel__actions}>
                <div>
                  <Button onClick={onOpenProfile} block type="primary">
                    <EditIcon />
                    {appT('edit')}
                  </Button>
                </div>
                <div className={styles.profile_panel__actions_bottom}>
                  <ContactItem icon={<EyeIcon />} />
                  <ContactItem icon={<ShareIcon />} />
                </div>
              </div>
            </div>
            <div className={styles.profile_panel__avatar}>
              {data?.avatar
                ? <img src={imgSrc(data?.avatar?.absolutePath)} alt="Company Avatar" className={styles.profile_panel__image} />
                : <p className={styles.profile_panel__avatar_name}>{String(data?.name?.[0]??"").toUpperCase()}</p>}
            </div>
          </div>
          
          <Card title={t('profilePage.recentlyPost')}>
            <div className={styles.posts_wrapper}>
              {modes?.map(mode => <PostItem key={mode.id} title={mode.name} />)}
              {(modes?.length === 0 && !workModeLoading) && <p>{t('profilePage.postsEmpty')}</p>}
              {workModeLoading && <span>{appT('loading')}...</span>}
            </div>
          </Card>
          
          <Card title={t('profilePage.information')} topRightRender={
            <Button type="primary" onClick={onOpenInformation}>
              <EditIcon />
              {appT('edit')}
            </Button>
          }>
            <div className={styles.information_wrapper}>
              <div className={styles.information_top}>
                <InformationItem title={t('profilePage.personals', { size: data?.companySize[i18n.language as languages] })} icon={<UsersIcon />} />
                <InformationItem title={`${data?.workHours}`} icon={<ClockIcon />} />
              </div>
              <div className={styles.information_body}>
                <p className={styles.information_text}>
                  {data?.information}
                </p>
              </div>
            </div>
          </Card>

          <Card title={t('profilePage.contacts')} topRightRender={
            <Button type="primary" onClick={onOpenContact}>
              <EditIcon />
              {appT('edit')}
            </Button>
          }>
            <div className={styles.contacts_wrapper}>
              {data?.phone && <ContactItem title={data?.phone} icon={<PhoneIcon />} />}
              {data?.email && <ContactItem title={data?.email} icon={<EmailIcon />} />}
              {data?.website && <ContactItem title={data?.website} icon={<GlobusIcon />} />}
              {data?.address && <ContactItem title={data?.address} icon={<MapMarkerIcon />} />}
            </div>
          </Card>
        </div>

        <ClientInformationModal />
        <ClientProfileModal />
        <ContactFormModal />
      </div>
    </div>
  )
} 
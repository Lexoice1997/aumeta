import { DatePicker, Flex, Form, Input, Select } from "antd"
import dayjs from "dayjs"
import { useState } from "react"

import { ModalSteps } from "@components/modal-steps/ModalSteps"
import { PhoneInput } from "@components/phone-input/PhoneInput"
import { SelectSuffix } from "@components/select-suffix/SelectSuffix"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { useGetCountries, useGetIndustries, useGetRegions } from "@services/appQueries"
import { dayjsFormats } from "@utils/constants/dayJsFormats"
import { useCreateWorkMode } from "../../services/mainMutations"
import { useGetJobCategories } from "../../services/mainQueries"
import { setPostFreelanceModalData } from "../../slices/mainSlice"
import { workModeTypeEnums } from "../../utils/enums/workModeTypeEnums"
import { WorkModelReqModel } from "../../utils/models/workModelReqModel"

import styles from "./postFreelance.module.scss"
import { useTranslation } from "react-i18next"

const { useForm, Item, useWatch } = Form
const { TextArea } = Input

export const PostFreelanceModal = () => {
  const dispatch = useAppDispatch()
  const [formInstance] = useForm()
  const visible = useAppSelector((state) => state.main.postFreelanceModalData.visible)
  const countryId = useWatch("countryId", formInstance)
  const { data: countries, isLoading: loadingCountries } = useGetCountries(visible)
  const { data: regions, isLoading: loadingRegions } = useGetRegions(countryId)
  const { data: jobCategories, isLoading: loadingJobCategories } = useGetJobCategories(visible)
  const { data: industries, isLoading: loadingIndustries } = useGetIndustries(visible)
  const [state, setState] = useState<WorkModelReqModel>()
  const create = useCreateWorkMode()
  const { t } = useTranslation('main')
  const { t: appT } = useTranslation('app')

  const onClose = () => {
    dispatch(setPostFreelanceModalData({ visible: false }))
    formInstance.resetFields()
  }

  const onSecondStep = () => {
    setState(formInstance.getFieldsValue())
  }

  const onFinish = (fields: WorkModelReqModel | unknown) => {
    const obj = fields as WorkModelReqModel

    return create.mutateAsync({
      ...obj,
      workModeType: workModeTypeEnums.JOB,
      jobCategoryId: 1,
      jobTime: dayjs(obj?.jobTime).format(dayjsFormats.DATE),
    })
  }

  return (
    <ModalSteps
      width={1147}
      visible={visible}
      destroyOnClose
      close={onClose}
      title={t('homeModals.titles.postFreelance')}
      formInstance={formInstance}
      onFinish={onFinish}
      onSecondStep={onSecondStep}
      isLoading={create.isPending}
      steps={[
        {
          title: t('homeModals.titles.postFreelance'),
          description: t('homeModals.description'),
          component: () => (
            <div className={styles.content}>
              <Flex gap='small'>
                <Item name='countryId' label={t('homeModals.contactInformation.country')} rules={[{ required: true, message: "" }]}>
                  <Select
                    suffixIcon={<SelectSuffix isLoading={loadingCountries} />}
                    showSearch
                    optionFilterProp='label'
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={countries?.map((el) => ({
                      label: el?.name?.default?.toString(),
                      value: el?.id,
                    }))}
                  />
                </Item>
                <Item name='regionId' label={t('homeModals.contactInformation.region')} rules={[{ required: true, message: "" }]}>
                  <Select
                    suffixIcon={<SelectSuffix isLoading={loadingRegions} />}
                    showSearch
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={regions?.map((el) => ({ label: el?.name?.default?.toString(), value: el?.id }))}
                  />
                </Item>
              </Flex>
              <Flex gap='small'>
                <Item name='city' label={t('homeModals.contactInformation.city')} rules={[{ required: true, message: "" }]}>
                  <Input />
                </Item>
                <Item name='address' label={t('homeModals.contactInformation.address')} rules={[{ required: true, message: "" }]}>
                  <Input />
                </Item>
              </Flex>
              <Flex gap='small'>
                <PhoneInput label={t('homeModals.checkInformation.phoneNumber')} />
                <Item name='email' label={t('homeModals.contactInformation.email')}>
                  <Input />
                </Item>
              </Flex>
            </div>
          ),
        },
        {
          title: t('homeModals.freelancerInformation.header'),
          component: () => (
            <div className={styles.content}>
              <Item name='name' label={t('homeModals.internshipInformation.professionTitle')}>
                <Input />
              </Item>
              <Flex gap='small'>
                <Item name='jobCategoryId' label={t('homeModals.internshipInformation.jobCategory')}>
                  <Select
                    suffixIcon={<SelectSuffix isLoading={loadingJobCategories} />}
                    showSearch
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={jobCategories?.data?.map((el) => ({
                      label: el?.name?.default?.toString(),
                      value: el?.id,
                    }))}
                  />
                </Item>
                <Item name='industryId' label={t('homeModals.internshipInformation.industry')}>
                  <Select
                    suffixIcon={<SelectSuffix isLoading={loadingIndustries} />}
                    showSearch
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={industries?.data?.map((el) => ({
                      label: el?.name?.default?.toString(),
                      value: el?.id,
                    }))}
                  />
                </Item>
              </Flex>
              <Flex gap='small'>
                <Item name='requirements' label={t('homeModals.checkInformation.requirements')}>
                  <TextArea />
                </Item>
                <Item name='responsibilities' label={t('homeModals.checkInformation.obligations')}>
                  <TextArea />
                </Item>
              </Flex>
              <Item name='description' label={t('homeModals.freelancerInformation.skillsAndExperience')}>
                <TextArea />
              </Item>
              <Flex gap='small'>
                <Item name='jobTime' label={t('homeModals.freelancerInformation.deadline')}>
                  <DatePicker size='large' placeholder={appT('date')} />
                </Item>
                <Item name='salary' label={t('homeModals.freelancerInformation.jobSalary')}>
                  <Input />
                </Item>
              </Flex>
            </div>
          ),
        },
        {
          title: t('homeModals.checkInformation.header'),
          component: () => (
            <div className={styles.content}>
              <div className={styles.content__item}>
                <p className={styles.organisation}>{state?.organisation}</p>
                <h2>{state?.name}</h2>
                <Flex gap={20}>
                  <p>
                    {countries?.find((el) => el.id === state?.countryId)?.name?.default} {state?.city}
                  </p>
                  <p>{state?.salary}</p>
                </Flex>
              </div>
              <div className={styles.content__item}>
                <h3>{t('homeModals.checkInformation.jobSummery')}</h3>
                <p>{state?.summery}</p>
                <h3>{t('homeModals.checkInformation.requirements')}</h3>
                <p>{state?.requirements}</p>
                <h3>{t('homeModals.checkInformation.obligations')}</h3>
                <p>{state?.responsibilities}</p>
                <h3>{t('homeModals.freelancerInformation.skillsAndExperience')}</h3>
                <p>{state?.description}</p>
                <h3>{appT('time')}</h3>
                <Flex gap={8}>
                  <p>
                    {t('homeModals.freelancerInformation.deadline')}: <span>{dayjs(state?.jobTime).format(dayjsFormats.DATE)}</span>
                  </p>
                </Flex>
              </div>
              <div className={styles.content__item}>
                <h3>{t('homeModals.checkInformation.contacts')}</h3>
                <Flex gap={8}>
                  <p>
                    {t('homeModals.checkInformation.phoneNumber')}: <span>{state?.phone}</span>
                  </p>
                  <p>
                    {t('homeModals.contactInformation.email')}: <span>{state?.email}</span>
                  </p>
                </Flex>
              </div>
              <div className={styles.content__item}>
                <h3>{t('homeModals.contactInformation.address')}</h3>
                <Flex gap={8}>
                  <p>
                    {t('homeModals.contactInformation.country')}: <span>{countries?.find((el) => el.id === state?.countryId)?.name?.default}</span>
                  </p>
                  <p>
                    {t('homeModals.contactInformation.region')}: <span>{regions?.find((el) => el.id === state?.regionId)?.name?.default}</span>
                  </p>
                  <p>
                    {t('homeModals.contactInformation.city')}: <span>{state?.city}</span>
                  </p>
                </Flex>
                <Flex>
                  <p>
                    {t('homeModals.contactInformation.address')}: <span>{state?.address}</span>
                  </p>
                </Flex>
              </div>
            </div>
          ),
        },
      ]}
    />
  )
}

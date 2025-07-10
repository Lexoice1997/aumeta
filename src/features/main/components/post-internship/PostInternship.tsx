import { Flex, Form, Input, Select } from "antd"
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
import { setPostInternshipModalData } from "../../slices/mainSlice"
import { workModeTypeEnums } from "../../utils/enums/workModeTypeEnums"
import { WorkModelReqModel } from "../../utils/models/workModelReqModel"
import { useTranslation } from "react-i18next"
// import { languages } from "@utils/enums/languages"

import styles from "./postInternship.module.scss"

const { useForm, Item, useWatch } = Form
const { TextArea } = Input

export const PostInternshipModal = () => {
  const dispatch = useAppDispatch()
  const [formInstance] = useForm()
  const visible = useAppSelector((state) => state.main.postInternshipModalData.visible)
  const countryId = useWatch("countryId", formInstance)
  const { data: countries, isLoading: loadingCountries } = useGetCountries(visible)
  const { data: regions, isLoading: loadingRegions } = useGetRegions(countryId)
  const { data: jobCategories, isLoading: loadingJobCategories } = useGetJobCategories(visible)
  const { data: industries, isLoading: loadingIndustries } = useGetIndustries(visible)
  const [state, setState] = useState<WorkModelReqModel>()
  const create = useCreateWorkMode()
  const { t } = useTranslation('main')

  const onClose = () => {
    dispatch(setPostInternshipModalData({ visible: false }))
    formInstance.resetFields()
  }

  const onSecondStep = () => {
    setState(formInstance.getFieldsValue())
  }

  const onFinish = (fields: WorkModelReqModel | unknown) => {
    const obj = fields as WorkModelReqModel

    return create.mutateAsync({
      ...obj,
      workModeType: workModeTypeEnums.INTERNSHIP,
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
      title={t('homeModals.titles.postInternship')}
      formInstance={formInstance}
      onFinish={onFinish}
      onSecondStep={onSecondStep}
      isLoading={create.isPending}
      steps={[
        {
          title: t('homeModals.titles.postInternship'),
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
              {/* <Flex>
                
              </Flex> */}
            </div>
          ),
        },
        {
          title: t('homeModals.titles.postInternship'),
          component: () => (
            <div className={styles.content}>
              <Item name='name' label={t('homeModals.freelancerInformation.professionTitle')}>
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
              <Item name='organisation' label={t('homeModals.internshipInformation.companyName')} rules={[{ required: true, message: "" }]}>
                <Input />
              </Item>
              <Item name='description' label={t('homeModals.internshipInformation.jobDescription')}>
                <TextArea />
              </Item>
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
                <h3>{t('homeModals.internshipInformation.industry')}</h3>
                <p>
                  <span>{industries?.data?.find((el) => el.id === state?.industryId)?.name?.default}</span>
                </p>
                <h3>{t('homeModals.checkInformation.conditions')}</h3>
                <p>{state?.description}</p>
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

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
      workModeType: workModeTypeEnums.FREELANCE,
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
      title='Post freelance'
      formInstance={formInstance}
      onFinish={onFinish}
      onSecondStep={onSecondStep}
      isLoading={create.isPending}
      steps={[
        {
          title: "Post freelance",
          description: "To submit a vacancy, please fill in the form",
          component: () => (
            <div className={styles.content}>
              <Flex gap='small'>
                <Item name='countryId' label='Country' rules={[{ required: true, message: "" }]}>
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
                <Item name='regionId' label='Region' rules={[{ required: true, message: "" }]}>
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
                <Item name='city' label='City' rules={[{ required: true, message: "" }]}>
                  <Input />
                </Item>
                <Item name='address' label='Address' rules={[{ required: true, message: "" }]}>
                  <Input />
                </Item>
              </Flex>
              <Flex gap='small'>
                <PhoneInput />
                <Item name='email' label='Email'>
                  <Input />
                </Item>
              </Flex>
            </div>
          ),
        },
        {
          title: "Freelancer information",
          component: () => (
            <div className={styles.content}>
              <Item name='name' label='Profession title'>
                <Input />
              </Item>
              <Flex gap='small'>
                <Item name='jobCategoryId' label='Job category'>
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
                <Item name='industryId' label='Industry'>
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
                <Item name='requirements' label='Requirements'>
                  <TextArea />
                </Item>
                <Item name='responsibilities' label='Obligations'>
                  <TextArea />
                </Item>
              </Flex>
              <Item name='description' label='Skills and Experience'>
                <TextArea />
              </Item>
              <Flex gap='small'>
                <Item name='jobTime' label='Deadline'>
                  <DatePicker size='large' placeholder='Дата' />
                </Item>
                <Item name='salary' label='Job salary'>
                  <Input />
                </Item>
              </Flex>
            </div>
          ),
        },
        {
          title: "Check information",
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
                <h3>Job Summery</h3>
                <p>{state?.summery}</p>
                <h3>Requirements</h3>
                <p>{state?.requirements}</p>
                <h3>Obligations</h3>
                <p>{state?.responsibilities}</p>
                <h3>Skills and Experience</h3>
                <p>{state?.description}</p>
                <h3>Time</h3>
                <Flex gap={8}>
                  <p>
                    Deadline: <span>{dayjs(state?.jobTime).format(dayjsFormats.DATE)}</span>
                  </p>
                </Flex>
              </div>
              <div className={styles.content__item}>
                <h3>Contacts</h3>
                <Flex gap={8}>
                  <p>
                    Phone number: <span>{state?.phone}</span>
                  </p>
                  <p>
                    Email: <span>{state?.email}</span>
                  </p>
                </Flex>
              </div>
              <div className={styles.content__item}>
                <h3>Address</h3>
                <Flex gap={8}>
                  <p>
                    Country: <span>{countries?.find((el) => el.id === state?.countryId)?.name?.default}</span>
                  </p>
                  <p>
                    Region: <span>{regions?.find((el) => el.id === state?.regionId)?.name?.default}</span>
                  </p>
                  <p>
                    City: <span>{state?.city}</span>
                  </p>
                </Flex>
                <Flex>
                  <p>
                    Address: <span>{state?.address}</span>
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

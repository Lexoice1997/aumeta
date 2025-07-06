import { useTranslation } from "react-i18next"
import { Button, Form, Input, Select } from "antd"
import { useNavigate } from "react-router-dom"

import { SelectSuffix } from "@components/select-suffix/SelectSuffix"
import { useGetCountries, useGetPublicIndustries, useGetRegions, useGetTimeZones } from "@services/appQueries"
import { rootPaths } from "@utils/constants/rootPaths"
import { useSignUp } from "../../../services/authMutations"
import { SignUpBodyModel } from "../../../utils/models/signUpBodyModel"

import styles from "./signUpForm.module.scss"

const { Item, useForm, useWatch } = Form
const { Option } = Select

type Props = {
  email: string
}

export const SignUpForm = ({ email }: Props) => {
  const { t } = useTranslation('auth')
  const navigate = useNavigate()
  const [formInstance] = useForm()
  const { data: industries, isLoading: loadingIndustries } = useGetPublicIndustries()
  const countryId = useWatch("countryId", formInstance)
  const { data: countries, isLoading: loadingCountries } = useGetCountries()
  const { data: regions, isLoading: loadingRegions } = useGetRegions(countryId)
  const { data: timeZones, isLoading: loadingTimeZones } = useGetTimeZones()
  const signUp = useSignUp()

  const onOk = () => {
    formInstance.submit()
  }

  const onFinish = (fields: SignUpBodyModel) => {
    signUp.mutateAsync({ ...fields, email }).then(() => {
      navigate(rootPaths.AUTH.SIGN_IN)
    })
  }

  return (
    <Form form={formInstance} layout='vertical' onFinish={onFinish} className={styles.form}>
      <Item name='name' label={t('formFields.nameOrganisation')} rules={[{ required: true, message: "" }]}>
        <Input />
      </Item>
      <Item name='industryId' label={t('formFields.industry')} rules={[{ required: true, message: "" }]}>
        <Select suffixIcon={<SelectSuffix isLoading={loadingIndustries} />}>
          {industries?.data?.map((item) => (
            <Option key={item.id} value={item.id}>
              {item?.name?.default}
            </Option>
          ))}
        </Select>
      </Item>
      <Item name='countryId' label={t('formFields.country')} rules={[{ required: true, message: "" }]}>
        <Select
          suffixIcon={<SelectSuffix isLoading={loadingCountries} />}
          showSearch
          optionFilterProp='label'
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={countries?.map((el) => ({ label: el?.name?.default?.toString(), value: el?.id }))}
        />
      </Item>
      <Item name='regionId' label={t('formFields.region')} rules={[{ required: true, message: "" }]}>
        <Select
          suffixIcon={<SelectSuffix isLoading={loadingRegions} />}
          showSearch
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={regions?.map((el) => ({ label: el?.name?.default?.toString(), value: el?.id }))}
        />
      </Item>
      <Item name='city' label={t('formFields.city')} rules={[{ required: true, message: "" }]}>
        <Input />
      </Item>
      <Item name='address' label={t('formFields.address')} rules={[{ required: true, message: "" }]}>
        <Input />
      </Item>
      <Item name='timezone' label={t('formFields.timezone')} rules={[{ required: true, message: "" }]}>
        <Select
          suffixIcon={<SelectSuffix isLoading={loadingTimeZones} />}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={timeZones?.map((el) => ({ label: el?.toString(), value: el }))}
        />
      </Item>
      <Item name='password' label={t('formFields.password')} rules={[{ required: true, message: "" }]}>
        <Input.Password />
      </Item>
      <Button size='large' loading={signUp.isPending} onClick={onOk} type='primary' className={styles.submit}>
        {t('registerButton')}
      </Button>
    </Form>
  )
}

import { Form, Select } from "antd"
import { DefaultOptionType } from "antd/es/select"
import { useGetIndustries } from "../../services/profileQueries"
import { useTranslation } from "react-i18next"

export const IndustriesSelect = () => {
  const { t } = useTranslation('profile')
  const { data, isLoading } = useGetIndustries()

  const options = isLoading ? [] : data?.map(d => ({
    title: d.name?.uz,
    value: d?.id,
    label: d.name?.ru,
  })) as DefaultOptionType[]

  return (
    <Form.Item label={t('modalsForm.editProfile.industry')} name='industryId'>
      <Select size="middle" options={options}></Select>
    </Form.Item>
  )
} 
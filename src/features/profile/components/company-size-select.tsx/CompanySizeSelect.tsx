import { Form, Select } from "antd"
import { DefaultOptionType } from "antd/es/select"
import { useGetClientCompanySize } from "../../services/profileQueries"
import { useTranslation } from "react-i18next"

export const CompanySizeSelect = () => {
  const { t } = useTranslation('profile')
  const { data, isLoading } = useGetClientCompanySize()

  const options = isLoading ? [] : data?.map(d => ({
    title: d.uz,
    value: d.default,
    label: d.ru,
  })) as DefaultOptionType[]

  return (
    <Form.Item label={t('modalsForm.editInformations.companySize')} name='companySize'>
      <Select size="middle" options={options}></Select>
    </Form.Item>
  )
} 
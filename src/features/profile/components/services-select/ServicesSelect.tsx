import { Form, Select } from "antd"
import { DefaultOptionType } from "antd/es/select"
import { useGetServices } from "../../services/profileQueries"
import { useTranslation } from "react-i18next"

export const ServicesSelect = () => {
  const { t } = useTranslation('profile')
  const { data, isLoading } = useGetServices()

  const options = isLoading ? [] : data?.map(d => ({
    title: d.name.uz,
    value: d.id,
    label: d.name.ru,
  })) as DefaultOptionType[]

  return (
    <Form.Item label={t('modalsForm.editProfile.service')} name='services'>
      <Select mode="tags" tokenSeparators={[',']} size="middle" options={options}></Select>
    </Form.Item>
  )
} 
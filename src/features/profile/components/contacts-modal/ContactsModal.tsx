import { Form, Input, Modal, Select } from "antd"
import { useForm, useWatch } from "antd/es/form/Form"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { setContactModalData } from "../../slices/profileSlice"
import { useGetClientProfile } from "../../services/profileQueries"
import { useSetClientContacts } from "../../services/profileMutations"
import { SelectSuffix } from "@components/select-suffix/SelectSuffix"
import { useGetCountries, useGetRegions } from "@services/appQueries"
import { useTranslation } from "react-i18next"

export const ContactFormModal = () => {
  const { t } = useTranslation('profile')
  const { t: appT } = useTranslation('app')
  const [formInstance] = useForm()
  const dispatch = useAppDispatch()
  const { data } = useGetClientProfile()
  const countryId = useWatch("countryId", formInstance)
  const { data: countries, isLoading: loadingCountries } = useGetCountries()
  const { data: regions, isLoading: loadingRegions } = useGetRegions(countryId)
  const setClientContacts = useSetClientContacts()
  const { visible } = useAppSelector(state => state.profile.contactModalData)

  const onClose = () => {
    dispatch(setContactModalData({ visible: false }))
  }

  const onFinish = async (values: any) => {
    const payload = [
      { type: "PHONE", value: values.phone },
      { type: "EMAIL", value: values.email },
      { type: "WEBSITE", value: values.website },
      { type: "ADDRESS", value: values.address, regionId: values.regionId, city: values.city },
    ];
    
    try {
      (payload[0].value !== data?.phone) && setClientContacts.mutateAsync(payload[0] as any);
      (payload[1].value !== data?.email) && setClientContacts.mutateAsync(payload[1] as any);
      (payload[2].value !== data?.website) && setClientContacts.mutateAsync(payload[2] as any);
      (
        payload[3].value !== data?.address ||
        payload[3].regionId !== data?.region?.id ||
        payload[3].city !== data?.city
      ) && setClientContacts.mutateAsync(payload[3] as any);
  
      onClose()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={() => formInstance.submit()}
      title={t('modalsForm.editContactInformation.title')}
      okText={appT('save')}
      cancelText={appT('close')}
      centered
      width={500}
    >
      <Form
        form={formInstance}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          phone: data?.phone ?? "",
          email: data?.email ?? "",
          website: data?.website ?? "",
          address: data?.address ?? "",
          regionId: data?.region?.id,
          countryId: data?.country?.id,
          city: data?.city,
        }}
      >
        <Form.Item
          name="phone"
          label={t('modalsForm.editContactInformation.phone')}
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder="+998 -- --- -- --" />
        </Form.Item>

        <Form.Item
          name="email"
          label={t('modalsForm.editContactInformation.email')}
          rules={[
            { required: true, message: "" },
            { type: "email", message: "" },
          ]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item
          name="website"
          label={t('modalsForm.editContactInformation.website')}
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder="https://example.com" />
        </Form.Item>

        <div>
          <Form.Item name='countryId' label={t('modalsForm.editContactInformation.country')} rules={[{ required: true, message: "" }]}>
            <Select
              suffixIcon={<SelectSuffix isLoading={loadingCountries} />}
              showSearch
              optionFilterProp='label'
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={countries?.map((el) => ({ label: el?.name?.default?.toString(), value: el?.id }))}
            />
          </Form.Item>
          <Form.Item name='regionId' label={t('modalsForm.editContactInformation.region')} rules={[{ required: true, message: "" }]}>
            <Select
              suffixIcon={<SelectSuffix isLoading={loadingRegions} />}
              showSearch
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={regions?.map((el) => ({ label: el?.name?.ru?.toString(), value: el?.id }))}
            />
          </Form.Item>
          <Form.Item name='city' label={t('modalsForm.editContactInformation.city')} rules={[{ required: true, message: "" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label={t('modalsForm.editContactInformation.address')}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="123 Main St, New York, USA" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}
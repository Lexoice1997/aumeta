import { Form, Modal, Input } from "antd"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { setProfileModalData } from '../../slices/profileSlice'
import { useSetClientProfile } from '../../services/profileMutations'
import { useForm } from "antd/es/form/Form"
import { ServicesSelect } from "../services-select/ServicesSelect"
import { useGetClientProfile } from "../../services/profileQueries"
import { IndustriesSelect } from "../industries-select/IndustriesSelect"
import { ImageUpload } from "../image-upload/ImageUpload"
import { useTranslation } from "react-i18next"

export const ClientProfileModal = () => {
  const { t } = useTranslation('profile')
  const { t: appT } = useTranslation('app')
  const [formInstance] = useForm()
  const dispatch = useAppDispatch()
  const { visible } = useAppSelector(state => state.profile.profileModalData)
  const { data, isLoading } = useGetClientProfile()
  const setClientProfile = useSetClientProfile()

  const onClose = () => {
    dispatch(setProfileModalData({visible:false}))
  }

  const onFinish = (values: any) => {
    const payload = {
      name: values.name,
      industryId: values.industryId,
      services: values.services,
      avatarId: values.avatarId,
    } as any

    setClientProfile.mutateAsync(payload).then(onClose)
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      title={t('modalsForm.editProfile.title')}
      okText={appT('save')}
      cancelText={appT('close')}
      centered
      width={500}
      onOk={() => formInstance.submit()}>
      <Form
        form={formInstance}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: !isLoading ? data?.name : '',
          industryId: !isLoading ? data?.industry?.id : null,
          services: !isLoading ? data?.services?.map(s => s.id) : null,
          avatarId: !isLoading ? data?.avatar?.id : undefined,
        }}
      >
        <Form.Item name="avatarId"
          label={t('modalsForm.editProfile.companyLogo')}>
          <ImageUpload afterUpload={(id) => formInstance.setFieldValue('avatarId', id)} />
        </Form.Item>

        <Form.Item
          name="name"
          label={t('modalsForm.editProfile.companyName')}
          rules={[{ required: true, message: "" }]}
        >
          <Input />
        </Form.Item>

        <IndustriesSelect />

        <ServicesSelect />
      </Form>
    </Modal>
  )
}
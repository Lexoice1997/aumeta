import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useResetPassword } from '../../services/authMutations';

import styles from '../../pages/reset-password/resetPassword.module.scss';

type Props = {
  afterSuccess: () => void;
  username: string;
};

export const NewPassword: FC<Props> = ({ username, afterSuccess }) => {
  const { t } = useTranslation('auth')
  const { t: appT } = useTranslation('app')
  const resetPassword = useResetPassword();

  const onFinish = (fields: { password: string; confirm: string }) => {
    resetPassword
      .mutateAsync({ username: username!, password: fields.password })
      .then(() => {
        afterSuccess();
      });
  };

  return (
    <Form className={styles.new_password} onFinish={onFinish}>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '',
          },
          {
            min: 6,
            message: '',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder={t('resetForm.enterNewPassword')} size="large" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(''));
            },
          }),
        ]}
      >
        <Input.Password placeholder={t('resetForm.repeatNewPassword')} size="large" />
      </Form.Item>
      <Button
        size="large"
        loading={resetPassword.isPending}
        type="primary"
        htmlType="submit"
      >
        {appT('save')}
      </Button>
    </Form>
  );
};

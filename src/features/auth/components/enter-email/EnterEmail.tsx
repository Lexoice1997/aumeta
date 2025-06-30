import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { rootPaths } from '@utils/constants/rootPaths';
import { useSendCode } from '../../services/authMutations';

import styles from '../../pages/reset-password/resetPassword.module.scss';

const { Item } = Form;

type Props = {
	afterSuccess: (username: string) => void;
};

export const EnterEmail: FC<Props> = ({ afterSuccess }) => {
	const [formInstance] = Form.useForm();
	const sendCode = useSendCode();

	const onFinish = (fields: { username: string; email: string }) => {
		sendCode.mutateAsync(fields).then(() => {
			afterSuccess(fields.username);
		});
	};

	return (
		<Form form={formInstance} layout="vertical" className={styles.email} onFinish={onFinish}>
			<Item rules={[{ required: true, message: '' }]} name="username">
				<Input placeholder="Логин" size="large" />
			</Item>
			<Item rules={[{ required: true, message: '' }]} name="email">
				<Input type="email" placeholder="Email" size="large" />
			</Item>
			<Button size="large" loading={sendCode.isPending} type="primary" htmlType="submit">
				Продолжить
			</Button>
			<Link to={rootPaths.AUTH.SIGN_IN}>Назад</Link>
		</Form>
	);
};

import { Button } from 'antd';
import { FC, useEffect, useRef, useState } from 'react';

import { useReSendCode } from '../../services/authMutations';

import styles from '../../pages/reset-password/resetPassword.module.scss';

type Props = {
  username: string;
};

export const ReSendCode: FC<Props> = ({ username }) => {
  const [timer, setTimer] = useState(59);
  const ref = useRef<number>(0);
  const sendCode = useReSendCode();

  const clear = () => {
    clearInterval(ref.current);
  };

  const start = () => {
    ref.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  };

  useEffect(() => {
    start();

    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const onReSendCode = () => {
    sendCode.mutateAsync({ username }).then(() => {
      setTimer(59);
      start();
    });
  };

  return (
    <div className={styles.resend}>
      {timer ? (
        <p>
          Повторное отправка смс через{' '}
          <span>00:{timer < 10 ? `0${timer}` : timer}</span>
        </p>
      ) : (
        <Button loading={sendCode.isPending} type="link" onClick={onReSendCode}>
          Повторное отправка смс через
        </Button>
      )}
    </div>
  );
};

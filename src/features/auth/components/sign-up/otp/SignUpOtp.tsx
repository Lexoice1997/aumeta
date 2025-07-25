import { Button } from "antd";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import OTPInput from "react-otp-input";

import { useCheckVerifyEmailCode } from "../../../services/authMutations";
import { ReSendCode } from "./ReSendCode";

import styles from "./signUpOtp.module.scss";

type Props = {
  afterSuccess: () => void;
  email: string;
  onBack: () => void;
};

export const SignUpVerifyCode: FC<Props> = ({
  afterSuccess,
  email,
  onBack
}) => {
  const { t } = useTranslation("auth");
  const [code, setCode] = useState("");
  const checkCode = useCheckVerifyEmailCode();

  const onVerifyCode = () => {
    if (code.length === 6) {
      checkCode.mutateAsync({ email: email, code }).then(() => {
        afterSuccess();
      });
    }
  };

  return (
    <div className={styles.code}>
      <h3>
        {t("enterEmail.confirmationCode")}: {email}
      </h3>
      <p>{t("enterEmail.hint")}</p>
      <OTPInput
        value={code}
        onChange={setCode}
        numInputs={6}
        inputType="number"
        shouldAutoFocus
        renderInput={(props) => <input {...props} />}
      />
      <ReSendCode email={email} />
      <Button
        size="large"
        loading={checkCode.isPending}
        onClick={onVerifyCode}
        type="primary"
      >
        {t("enterEmail.confirm")}
      </Button>
      <Button type="link" onClick={onBack}>
        {t("enterEmail.back")}
      </Button>
    </div>
  );
};

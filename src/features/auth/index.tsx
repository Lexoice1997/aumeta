import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import AuthLogo from "./assets/logo/auth_logo.svg";
import styles from "./index.module.scss";

export const Auth = () => {
  const { t } = useTranslation("auth");

  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.bg}>
          <div className={styles.bg__content}>
            <img src={AuthLogo} alt="Logo of Aumeta" width={196} height={52} />
            <div>
              <h2>{t("headline")}</h2>
              <p>{t("description")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.auth__right}>
        <Outlet />
      </div>
    </div>
  );
};

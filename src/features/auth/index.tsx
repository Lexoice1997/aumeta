import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";

import { clsx } from "clsx";
import AuthLogo from "./assets/logo/auth_logo.svg";
import styles from "./index.module.scss";

export const Auth = () => {
  const { t } = useTranslation("auth");
  const location = useLocation();

  function getCurrentPathBgImg() {
    // The background image should be distinct for each auth page: auth, sign-in, and sign-up.

    // extract the last part of the pathname to determine the current page
    // e.g., "/auth", "/sign-in", "/sign-up"
    const currentPath = location.pathname.split("/").pop();

    // select the appropriate background image class based on the current path
    // styles be like:
    /*
    .auth_pathname_background_image {
      background-image: url("./assets/images/authBgImg.jpg");
    }*/
    switch (currentPath) {
      case "auth":
        return "auth_pathname_background_image";
      case "sign-up":
        return "sign_up_pathname_background_image";
      case "sign-in":
        return "sign_in_pathname_background_image";
      default:
        return "auth_pathname_background_image"; // Default case if no match found
    }
  }

  return (
    <div className={styles.auth}>
      <div className={clsx(styles.auth__left, styles[getCurrentPathBgImg()])}>
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

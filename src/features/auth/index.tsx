import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";

import { clsx } from "clsx";
import AuthLogo from "./assets/logo/auth_logo.svg";
import styles from "./index.module.scss";

export const Auth = () => {
  const { t } = useTranslation("auth");
  const location = useLocation();

  const currentPath = location.pathname.split("/").pop();

  function getCurrentPathBgImg() {
    // The background image should be distinct for each auth page: auth, sign-in, and sign-up.

    // extract the last part of the pathname to determine the current page
    // e.g., "/auth", "/sign-in", "/sign-up"

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

  function getCurrentPathContent() {
    let slogan = t("authPage.slogan");
    let description = t("authPage.description");
    switch (currentPath) {
      case "auth":
        slogan = t("authPage.slogan");
        description = t("authPage.description");
        return [slogan, description];
      case "sign-up":
        slogan = t("signUpPage.slogan");
        description = t("signUpPage.description");
        return [slogan, description];
      case "sign-in":
        slogan = t("signInPage.slogan");
        description = t("signInPage.description");
        return [slogan, description];
      default:
        slogan = t("authPage.slogan");
        description = t("authPage.description");
        return [slogan, description]; // Default case if no match found
    }
  }

  return (
    <div className={styles.auth}>
      <div className={clsx(styles.auth__left, styles[getCurrentPathBgImg()])}>
        <div className={styles.bg}>
          <div className={styles.bg__content}>
            <img src={AuthLogo} alt="Logo of Aumeta" width={196} height={52} />
            <div>
              <h2>{getCurrentPathContent()[0]}</h2>
              <p>{getCurrentPathContent()[1]}</p>
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

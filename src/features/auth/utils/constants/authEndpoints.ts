import queryString from "query-string"

export const authEndpoints = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  SEND_CODE: (req: { username: string; email: string }) =>
    `/auth/reset-password/send-code?${queryString.stringify(req)}`,
  CHECK_CODE: (req: { username: string; code: string }) =>
    `/auth/reset-password/check-code?${queryString.stringify(req)}`,
  RESEND_CODE: (req: { username: string }) =>
    `/auth/reset-password/retry-send-code?${queryString.stringify(req)}`,
  RESET_PASSWORD: (req: { username: string; password: string }) =>
    `/auth/reset-password?${queryString.stringify(req)}`,
  REFRESH: "/auth/refresh",
  CHECK_EMAIL: "auth/sign-up/check-email",
  CHECK_VERIFY_EMAIL_CODE: "auth/sign-up/verify-email-code",
}

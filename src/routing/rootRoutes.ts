import { CheckAuth } from "@components/check-auth/CheckAuth"
import { MainLayout } from "@components/main-layout/MainLayout"
import { Redirect } from "@components/redirect/Redirect"
import { Forbidden } from "@pages/forbidden/Forbidden"
import { NotFound } from "@pages/not-found/NotFound"
import { ROOT_INDEX } from "@utils/constants/rootIndex"
import { rootPaths } from "@utils/constants/rootPaths"
import { RouteModel } from "@utils/models/routeModel"
import { Auth } from "../features/auth"
import { JoinUsPage } from "../features/auth/pages/join-us/JoinUs"
import { ResetPassword } from "../features/auth/pages/reset-password/ResetPassword"
import { SignIn } from "../features/auth/pages/sign-in/SignIn"
import { SignUpPage } from "../features/auth/pages/sign-up/SignUp"
import { MainPage } from "../features/main/Index"
import { ProfilePage } from '../features/profile/Index'

export const mainRoutes: RouteModel[] = [
  {
    path: rootPaths.PROFILE.INDEX,
    element: ProfilePage,
  },
]

export const rootRoutes: RouteModel[] = [
  {
    path: ROOT_INDEX,
    element: Redirect,
  },
  {
    element: MainLayout,
    children: [
      {
        path: rootPaths.MAIN.INDEX,
        element: MainPage,
      },
    ],
  },
  {
    element: CheckAuth,
    children: [
      {
        path: rootPaths.AUTH.INDEX,
        element: Auth,
        children: [
          {
            path: rootPaths.AUTH.INDEX,
            element: JoinUsPage,
          },
          {
            path: rootPaths.AUTH.SIGN_UP,
            element: SignUpPage,
          },
          {
            path: rootPaths.AUTH.SIGN_IN,
            element: SignIn,
          },
          {
            path: rootPaths.AUTH.RESET_PASSWORD,
            element: ResetPassword,
          },
        ],
      },
      {
        element: MainLayout,
        children: mainRoutes,
      },
    ],
  },
  {
    path: rootPaths.FORBIDDEN.INDEX,
    element: Forbidden,
  },
  {
    path: "*",
    element: NotFound,
  },
]

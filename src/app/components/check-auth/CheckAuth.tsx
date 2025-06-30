import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

import { usePermissions } from "@hooks/usePermissions.ts"
import { useAppSelector } from "@hooks/useRedux.ts"
import { ROOT_INDEX } from "@utils/constants/rootIndex"
import { rootPaths } from "@utils/constants/rootPaths"

export const CheckAuth: React.FC = () => {
  const location = useLocation()
  const { isAuth } = useAppSelector((state) => state.user)
  const isAuthPage = location.pathname.includes(rootPaths.AUTH.INDEX)
  const { initialRoute } = usePermissions()

  if (isAuthPage) {
    return !isAuth ? <Outlet /> : <Navigate to={initialRoute() ?? ROOT_INDEX} />
  }

  return isAuth ? <Outlet /> : <Navigate to={rootPaths.AUTH.INDEX} />
}

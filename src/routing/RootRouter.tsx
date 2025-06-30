import { memo } from "react"
import { withErrorBoundary } from "react-error-boundary"
import { Navigate, Route, Routes } from "react-router-dom"

import { usePermissions } from "@hooks/usePermissions"
import { ErrorBoundaryPage } from "@pages/error-boundary/ErrorBoundary"
import { RouteModel } from "@utils/models/routeModel"
import { rootRoutes } from "./rootRoutes"

export const RootRouter = withErrorBoundary(
  memo(() => {
    const { filterRoutes } = usePermissions()

    const mappedRoutes = (routes: RouteModel[]) => {
      return filterRoutes(routes).map((item, index) =>
        item.element ? (
          <Route key={index} path={item.path} element={<item.element />}>
            {item.children ? mappedRoutes(item.children) : null}
          </Route>
        ) : (
          <Route key={index} element={<Navigate to={filterRoutes(routes)[index + 1]?.path ?? ""} />} index />
        )
      )
    }

    return <Routes>{mappedRoutes(rootRoutes)}</Routes>
  }),
  {
    fallback: <ErrorBoundaryPage />,
    onError(error, info) {
      console.error(error, info)
    },
  }
)

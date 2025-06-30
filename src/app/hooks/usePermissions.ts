import { rootPaths } from "@utils/constants/rootPaths.ts"
import { LinkModel } from "@utils/models/linkModel.ts"
import { RouteModel } from "@utils/models/routeModel.ts"
import { mainRoutes } from "../../routing/rootRoutes.ts"
import { useAppSelector } from "./useRedux.ts"

export const usePermissions = () => {
  const permission = useAppSelector((state) => state.user.user?.role?.default)

  // has permission
  const hasPermission = (requiredPermissions: string[] | undefined) => {
    if (!requiredPermissions) return true

    return requiredPermissions.some((element) => {
      return permission === element
    })
  }

  // filter routes
  const filterRoutes = (routes: RouteModel[]) => {
    return routes.filter((route) => {
      return hasPermission(route.requiredPermissions)
    })
  }

  // filter links
  const filterLinks = (links: LinkModel[]) => {
    return links
      .filter((link) => hasPermission(link.requiredPermissions))
      .map((link) => ({
        ...link,
        children: link.children?.filter((childLink) => hasPermission(childLink.requiredPermissions)),
      }))
  }

  const initialRoute = () => {
    const route = mainRoutes.find((route) => hasPermission(route.requiredPermissions))

    if (!route) {
      return rootPaths.FORBIDDEN.INDEX
    }
    return route?.path ?? route?.children![0].path
  }

  return {
    hasPermission,
    filterRoutes,
    filterLinks,
    initialRoute,
  }
}

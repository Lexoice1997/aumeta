import { FC } from "react"

export type RouteModel = {
  element?: FC
  path?: string
  children?: RouteModel[]
  requiredPermissions?: string[]
}

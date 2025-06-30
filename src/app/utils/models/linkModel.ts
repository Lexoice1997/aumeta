import { FC } from "react"

export type LinkModel = {
  label: string
  path: string
  icon?: FC
  requiredPermissions?: string[]
  stuckBottom?: boolean
  children?: LinkModel[]
}

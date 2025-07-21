import { FC } from "react"
import { Navigate } from "react-router-dom"

import { rootPaths } from "@utils/constants/rootPaths"

type Props = {
  to?: string
}

export const Redirect: FC<Props> = ({ to }) => {
  return <Navigate to={to ?? rootPaths.MAIN.INDEX} />
}

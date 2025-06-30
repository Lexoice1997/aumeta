import { Button } from "antd"
import { useNavigate } from "react-router-dom"

import { EmptyCrocodile } from "@components/empty-crocodile/EmptyCrocodile.tsx"
import { useAppDispatch } from "@hooks/useRedux.ts"
import { useLogOut } from "@services/appMutations"
import { setSidebar } from "@slices/appSlice.ts"
import { setIsAuth } from "@slices/userSlice.ts"
import { rootPaths } from "@utils/constants/rootPaths.ts"
import { LocalStorage } from "@utils/helpers/localStorage.ts"

import styles from "./forbidden.module.scss"

export const Forbidden = () => {
  const dispatch = useAppDispatch()
  const logout = useLogOut()
  const navigate = useNavigate()

  const onLogout = () => {
    logout.mutateAsync().then(() => {
      dispatch(setIsAuth(false))
      dispatch(
        setSidebar({
          collapsed: false,
          collapsible: true,
        })
      )
      LocalStorage.clear()
      navigate(rootPaths.AUTH.INDEX)
    })
  }

  return (
    <div className={styles.forbidden}>
      <EmptyCrocodile
        title='Нет доступа!'
        description='У пользователя нет необходимых прав для доступа к запрашиваемой странице или ресурсу.'
        extra={
          <Button loading={logout.isPending} onClick={onLogout}>
            Выйти
          </Button>
        }
      />
    </div>
  )
}

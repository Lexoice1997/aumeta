import "@ant-design/v5-patch-for-react-19"
import { QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider } from "antd"
import dayjs from "dayjs"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import '../src/i18n/config.ts';
import { antdTheme } from "@utils/constants/antTheme"
import { dayjsLocales } from "@utils/constants/dayjsLocales"
import { queryClient } from "@utils/constants/queryClient.ts"
import { store } from "@utils/helpers/store"
import { RootRouter } from "./routing/RootRouter.tsx"

import "./styles/common.scss"
import "./styles/main.scss"

dayjs.locale(dayjsLocales.EN_GB)

export const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={antdTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RootRouter />
          </BrowserRouter>
        </QueryClientProvider>
      </ConfigProvider>
    </Provider>
  )
}

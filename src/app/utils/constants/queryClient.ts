import { QueryCache, QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err.message)
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

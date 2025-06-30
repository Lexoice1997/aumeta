export const lengthValidator = (length: number, handleSuccess?: () => void, handleError?: () => void) => ({
  validator(_: unknown, value: string) {
    if (value && value?.replace(/[+()_-]/g, "").replace(/\s/g, "").length !== length) {
      if (handleError) handleError()
      return Promise.reject()
    }
    if (handleSuccess) handleSuccess()
    return Promise.resolve()
  },
  message: "",
})

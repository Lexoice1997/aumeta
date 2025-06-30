export type PaginationModel<T> = {
  currentPage: number
  data: T[]
  totalElements: number
  totalPages: number
}

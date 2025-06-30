import { statuses } from "@utils/enums/statuses"
import { MultiLangModel } from "@utils/models/multiLangModel"

export interface JobCategoryModel {
  id: number
  name: MultiLangModel
  status: statuses
}

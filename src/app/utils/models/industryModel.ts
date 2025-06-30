import { statuses } from "@utils/enums/statuses"
import { MultiLangModel } from "@utils/models/multiLangModel"

export interface IndustryModel {
  id: number
  name: MultiLangModel
  status: statuses
}

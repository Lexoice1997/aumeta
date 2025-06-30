import { workModeTypeEnums } from "../enums/workModeTypeEnums"

export interface WorkModelReqModel {
  id: number
  workModeType: workModeTypeEnums
  name: string
  regionId: number
  city: string
  address: string
  phone: string
  industryId: number
  jobCategoryId: number
  requirements: string
  description: string
  responsibilities: string
  summery: string
  submitted: boolean
  email: string
  experience: string
  salary: string
  deadline: string
  jobType: string
  jobGraphic: string
  hideSalary: boolean
  jobTime: string
  organisation: string
  countryId: number;
}

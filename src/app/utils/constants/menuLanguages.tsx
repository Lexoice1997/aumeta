import { languages } from '../enums/languages'
import { EngIcon } from '@assets/icons/EngIcon'
import { RuIcon } from '@assets/icons/RuIcon'
import { UzIcon } from '@assets/icons/UzIcon'
import { KrIcon } from '@assets/icons/KrIcon'

export const Languages = {
  [languages.EN]: { title: "English", icon: <EngIcon /> },
  [languages.RU]: { title: "Русский", icon: <RuIcon /> },
  [languages.UZ]: { title: "O'zbekcha", icon: <UzIcon /> },
  [languages.KR]: { title: "Кыргызща", icon: <KrIcon /> },
}
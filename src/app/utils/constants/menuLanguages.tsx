import { EngIcon } from "@assets/icons/EngIcon"
import { KrIcon } from "@assets/icons/KrIcon"
import { RuIcon } from "@assets/icons/RuIcon"
import { UzIcon } from "@assets/icons/UzIcon"
import { languages } from "../enums/languages"

export const Languages = {
  [languages.EN]: { title: "English", icon: <EngIcon /> },
  [languages.RU]: { title: "Русский", icon: <RuIcon /> },
  [languages.UZ]: { title: "O'zbekcha", icon: <UzIcon /> },
  [languages.KR]: { title: "Qaraqalpaqsha", icon: <KrIcon /> },
}

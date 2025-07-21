import type { ThemeConfig } from "antd"

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#875BF7",
    borderRadius: 8,
    fontFamily: "Onest",
  },
  components: {
    Button: {
      // base
      fontWeight: 600,
      controlHeight: 36,
      fontSize: 14,
      colorBorder: "#fff",
      boxShadow: "0px 0px 0px 1px #002866",

      // lg
      controlHeightLG: 44,
      fontSizeLG: 14,
    },
    Input: {
      // base
      controlHeight: 40,
      colorBorder: "#D0D5DD",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",

      controlHeightLG: 44,
    },
    Select: {
      // base
      controlHeight: 40,
      colorBorder: "#D0D5DD",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",

      // lg
      controlHeightLG: 44,
    },
    Form: {
      itemMarginBottom: 20,
      labelColor: "#344054",
      verticalLabelPadding: "0 0 6px 0",
      labelFontSize: 14,
      fontWeightStrong: 500,
    },
    Segmented: {
      itemHoverBg: "#F2F4F7",
      itemActiveBg: "#F2F4F7",
    },
    Table: {
      rowHoverBg: "#FCFCFD",
    },
    Collapse: {
      colorPrimaryBg: "#ffffff",
    },
    // Modal: {
    //   titleColor: '#101828',
    //   titleFontSize: 18,
    // },
  },
}

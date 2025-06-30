import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@services": path.resolve(__dirname, "./src/app/services"),
      "@slices": path.resolve(__dirname, "./src/app/slices"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["legacy-js-api", "mixed-decls"],
      },
    },
  },
})

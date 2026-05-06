import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),

    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),

      name: "viasocket-header-footer",

      formats: ["es", "cjs"],

      fileName: (format) =>
        format === "es"
          ? "viasocket-header-footer.js"
          : "viasocket-header-footer.cjs",
    },

    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        exports: "named",

        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },

    cssCodeSplit: false,

    sourcemap: true,
  },
});
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

      // ONLY ONE OUTPUT FILE
      fileName: () => "viasocket-header-footer.js",

      // IMPORTANT
      formats: ["cjs"],
    },

    rollupOptions: {
      // DON'T BUNDLE REACT
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
  },

  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// Externalize anything starting with react / react-dom (incl. jsx-runtime, client, etc.)
// Using a function ensures sub-paths and exact ids are both excluded from the bundle.
const external = (id: string) =>
  id === "react" ||
  id === "react-dom" ||
  id.startsWith("react/") ||
  id.startsWith("react-dom/");

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.build.json",
      rollupTypes: true,
      copyDtsFiles: false,
    }),
  ],

  build: {
    target: "es2019",
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: true,
    minify: "esbuild",

    // Preserve directives like "use client" through the @rollup/plugin-commonjs
    // pipeline and never inline a require() of react.
    commonjsOptions: {
      include: [/node_modules/],
      extensions: [".js", ".cjs"],
      strictRequires: true,
      transformMixedEsModules: true,
      esmExternals: true,
      requireReturnsDefault: "auto",
    },

    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ViasocketHeaderFooter",
      formats: ["es", "cjs"],
      fileName: (format) =>
        format === "es"
          ? "viasocket-header-footer.js"
          : "viasocket-header-footer.cjs",
    },

    rollupOptions: {
      external,
      // Keep the original module structure (instead of one giant chunk) so that
      // "use client" directives stay attached to client-only files in the future.
      // We still emit a single entry per format, but `treeshake.moduleSideEffects`
      // is preserved for css side-effects.
      treeshake: {
        moduleSideEffects: (id) => id.endsWith(".css"),
      },
      output: {
        exports: "named",
        interop: "auto",
        // CRITICAL: re-add the "use client" directive that Rollup/esbuild strip
        // during bundling. Without this banner, Next.js 15's App Router treats
        // the package as a React Server Component and `useState`/`useEffect`/
        // `useRef` are genuinely NOT exported from `react` in that runtime,
        // producing the exact error the user reported.
        banner: '"use client";',
        assetFileNames: (asset) =>
          asset.names?.[0] === "style.css" || asset.name === "style.css"
            ? "style.css"
            : asset.name ?? "[name][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "react/jsx-dev-runtime": "jsxDevRuntime",
          "react-dom/client": "ReactDOMClient",
        },
      },
    },
  },
});
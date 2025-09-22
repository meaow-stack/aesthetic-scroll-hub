import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    try {
      const { componentTagger } = require("lovable-tagger");
      plugins.push(componentTagger());
    } catch (err) {
      console.warn("lovable-tagger not loaded in dev:", err.message);
    }
  }

  return {
    server: {
      host: "::", // Listen on all network interfaces (IPv6 and IPv4)
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000, // Increase warning limit to 2000 KB
      minify: "esbuild",           // Use esbuild for faster minification
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor"; // Split node_modules into a vendor chunk
            }
          },
        },
      },
    },
  };
});
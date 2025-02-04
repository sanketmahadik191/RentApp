import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  mode: "production", // Ensure Vite runs in production mode
  build: {
    minify: "esbuild", // Ensures dead code elimination
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"; // React-related libraries
            if (id.includes("axios") || id.includes("lodash")) return "vendor"; // Other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit (optional)
  },
  server: {
    port: 10000,
    host: "0.0.0.0",
    allowedHosts:["rentapp-1.onrender.com"],
    proxy: {
      "/api": {
        target: "https://rentapp-edwq.onrender.com",
        secure: false,
        changeOrigin: true,
        ws: true,
      },
    },
  },
  plugins: [react()],
});

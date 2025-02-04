import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  mode: "development",
  build: {
    // Set production build without dead code elimination for development mode
    minify: false, 
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

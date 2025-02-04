import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'), // Force React to run in development mode
  },
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

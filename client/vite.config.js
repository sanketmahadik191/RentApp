import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // Separate React-related libraries
          vendor: ["lodash", "axios"], // Other common dependencies
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit (optional)
  },
  server: {
    port:10000,
    host: '0.0.0.0', 
    proxy: {
      '/api': {
        target: "https://rentapp-edwq.onrender.com",
        secure: false,
        changeOrigin:true,
        ws:true,
      },
    },
  },

  plugins: [react()],
})

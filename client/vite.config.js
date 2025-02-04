import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

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

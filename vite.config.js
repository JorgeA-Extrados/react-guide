import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    include: ["slick-carousel/slick/slick.css", "slick-carousel/slick/slick-theme.css", '@turf/turf', "@mui/lab/Timeline", "aos", "aos/dist/aos.css"]
  },
  // server: {
  //   host: '0.0.0.0', // Permite conexiones externas
  //   port: 5173, // Asegúrate de que coincida con el puerto de tu servidor
  //   strictPort: true, // Para evitar que cambie el puerto
  //   allowedHosts: ['.ngrok-free.app'], // Permite cualquier subdominio de ngrok
  // }
})

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const { VITE_BASE_PATH = '/', VITE_API_PROXY_TARGET } = loadEnv(mode, process.cwd())

  return {
    base: VITE_BASE_PATH,
    plugins: [react()],
    build: {
      target: 'chrome108',
      cssTarget: 'chrome108',
    },
    server: {
      proxy: VITE_API_PROXY_TARGET
        ? {
            '/api': {
              target: VITE_API_PROXY_TARGET,
              changeOrigin: true,
            },
          }
        : undefined,
    },
  }
})

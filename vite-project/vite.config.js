import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Asegúrate de que los archivos JavaScript tengan el tipo MIME correcto
        format: 'esm',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
        globals: {
          'react/jsx-dev-runtime': 'ReactJSXDevRuntime',
          'react-dom/jsx-dev-runtime': 'ReactDOMJSXDevRuntime'
        }
      }
    }
  }
})


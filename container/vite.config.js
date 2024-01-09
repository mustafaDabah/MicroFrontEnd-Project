import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      federation({
        name: 'host-app',
        remotes: {
          productsApp: "http://localhost:5001/assets/remoteEntry.js", // is the name set on remote but in camelCase "http://localhost:5001/assets/remoteEntry.js",
          cartApp: "http://localhost:5000/assets/remoteEntry.js" // is the name set on remote but in camelCase "http://localhost:5001/assets/remoteEntry.js",
        }
      })
  ],
})
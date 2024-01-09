import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
          name: 'cart-app', // name of the fed group...
          filename: 'remoteEntry.js', // default file name
          // Modules to expose
          exposes: { 
            './cart': './src/bootstrap.js',
          },
          shared: {
            '@faker-js/faker': {
              singleton: true
            }
          }
        })
    ],
    build: {
      target: 'esnext' // needed to final build
    },
  })
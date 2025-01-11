import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    base:"https://francocastano.github.io/react-prueba-tecnica/",
    server:{port:5000},
    plugins: [react()]
})
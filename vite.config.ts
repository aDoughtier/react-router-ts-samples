import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    //给打包器解析的
    alias:{
      "@":path.resolve(__dirname,"./src")
    }
  }
})

/*
 * @Author: 袁锐城
 * @Date: 2025-09-02 00:26:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-09-03 01:46:32
 * @Description:
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: "./postcss.config.cjs",
  },
});

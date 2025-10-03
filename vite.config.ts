import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { ReloadScriptPlugin } from './src/shared/plugins/hotReloadVite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
// import DefineOptions from 'unplugin-vue-define-options/vite'

import path from 'node:path'

export default defineConfig({
  envDir: './environments',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@app/': `${path.resolve(__dirname, 'src/app')}/`,
      '@assets/': `${path.resolve(__dirname, 'src/app/assets')}/`,
      '@shared/': `${path.resolve(__dirname, 'src/shared')}/`,
      '@store/': `${path.resolve(__dirname, 'src/shared/store')}/`,
      '@pages/': `${path.resolve(__dirname, 'src/pages')}/`,
    },
  },
  /*   css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./assets/styles/global.scss";
        `,
      },
    },
  }, */
  server: {
    open: false,
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    // DefineOptions(),

    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: true,
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    // Components({
    //   dts: true,
    //   dirs: ['./src/ui/components/**/*.vue'],
    // }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS({
      configFile: './uno.config.ts',
    }),
    /** Custom plugin */
    // ReloadScriptPlugin(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})

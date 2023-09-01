import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { ReloadScriptPlugin } from './src/shared/plugins/hotReloadVite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@shared/': `${path.resolve(__dirname, 'src/shared')}/`,
      '@store/': `${path.resolve(__dirname, 'src/shared/store')}/`,
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
  plugins: [
    DefineOptions(),

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

    VueI18nPlugin({
      runtimeOnly: false,
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
    UnoCSS(),
    // ReloadScriptPlugin(),
  ],
})

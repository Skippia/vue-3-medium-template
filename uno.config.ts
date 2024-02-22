import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then((i) => i.default),
      },
      scale: 1,
      warn: true,
      customizations: {
        transform(svg) {
          return svg.replace(/#fff/, '#fff')
        },
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      /*   fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      }, */
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xsm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2240px',
    },
    colors: {
      background: 'rgba(var(--gray-500))',
      neutral: 'rgba(var(--neutral))',
      primary: 'rgba(var(--primary))',
      secondary: 'rgba(var(--secondary))',
      tertiary: 'rgba(var(--tertiary))',
      cwhite: 'rgba(var(--c-white))',
      cgrey: 'rgba(var(--c-grey))',
      cblack: 'rgba(var(--c-black))',
      cred: 'rgba(var(--c-red))',
      //
      main: 'rgba(var(--main))',
      mainAccent: 'rgba(var(--mainAccent))',
      mainWeakAnti: 'rgba(var(--mainWeakAnti))',
      //
      antiMain: 'rgba(var(--antiMain))',
      mainAntiMainAccent: 'rgba(var(--antiMainAccent))',
    },
  },
})

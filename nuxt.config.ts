// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: 'https://platform.datamaker.io/api',
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
  css: ['~/assets/main.css'],
})

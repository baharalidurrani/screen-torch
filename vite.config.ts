import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA, type ManifestOptions, type VitePWAOptions } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  name: 'Screen Torch',
  short_name: 'Torch',
  description: 'Turns your screen into eye comfort torch.',
  theme_color: '#ffecb3',
  background_color: '#ffecb3',
  display: 'fullscreen',
  icons: [
    {
      src: 'favicon/pwa-64x64.png',
      sizes: '64x64',
      type: 'image/png',
    },
    {
      src: 'favicon/pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'favicon/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};
const pwaOptions: Partial<VitePWAOptions> = {
  manifest,
  // injectRegister: 'auto',
  registerType: 'autoUpdate',
  // devOptions: {
  //   enabled: true,
  // },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,}'],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: (process.env.VITE_BASE_URL || '') + '/?fullscreen=true',
  // build: { sourcemap: false },
  plugins: [mkcert(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});

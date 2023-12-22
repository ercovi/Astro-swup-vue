import { defineConfig } from 'astro/config';
import swup from '@swup/astro';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), swup()]
});
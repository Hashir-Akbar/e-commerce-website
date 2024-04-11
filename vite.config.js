// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        product_catalog: resolve(__dirname, "pages/product_catalog.html"),
        reviews: resolve(__dirname, "pages/reviews.html"),
        buying_guide: resolve(__dirname, "pages/buying_guide.html"),
      },
    },
  },
});

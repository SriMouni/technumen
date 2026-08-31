import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        services: "services.html",
        careers: "careers.html",
        resources: "resources.html",
        contact: "contact.html",
        guidewire: "guidewire.html",
        "service-cloud": "service-cloud.html",
        "service-data": "service-data.html",
        "service-digital-engineering": "service-digital-engineering.html",
        "service-quality": "service-quality.html",
        "service-security": "service-security.html",
        "financial-services": "financial-services.html",
        terms: "terms.html",
        privacy: "privacy.html",
        cookies: "cookies.html"
      }
    }
  }
});

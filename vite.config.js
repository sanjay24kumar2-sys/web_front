import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        devices: resolve(__dirname, "devices.html"),
        groups: resolve(__dirname, "groups.html"),
        messages: resolve(__dirname, "messages.html"),
        settings: resolve(__dirname, "setting.html"),
        data: resolve(__dirname, "data.html"),
        deviceDetails: resolve(__dirname, "device-details.html")
      }
    }
  }
});

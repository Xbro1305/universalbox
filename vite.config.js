import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@/components": fileURLToPath(new URL("./src/Components", import.meta.url)),
            "@/pages": fileURLToPath(new URL("./src/Pages", import.meta.url)),
            "@/api": fileURLToPath(new URL("./src/api", import.meta.url)),
            "@/utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
            "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
            "@/hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
            "@/styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
            "@/assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        },
    },
    server: {
        port: 3000,
        open: true,
        host: true, // Доступ с других устройств в сети
    },
    build: {
        outDir: "dist",
        sourcemap: true,
        target: "es2015", // Поддержка старых браузеров
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    router: ["react-router-dom"],
                },
            },
        },
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    optimizeDeps: {
        include: ["react", "react-dom", "react-router-dom"],
    },
});

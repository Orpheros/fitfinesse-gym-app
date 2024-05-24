import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3300,
    https: {
      key: fs.readFileSync(
        path.resolve(
          __dirname,
          "/Users/sam/Documents/Project/fitfinesse-gym-app/localhost-key.pem"
        )
      ),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
    },
  },
});

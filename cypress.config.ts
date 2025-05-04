import { defineConfig } from "cypress";
import { seed } from "./prisma/seed-test.js";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        seedDatabase: async () => {
          await seed();
          return null;
        },
      });

      return config;
    },
  },
});

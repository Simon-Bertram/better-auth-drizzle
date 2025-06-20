import { defineConfig } from "drizzle-kit";
import "./envConfig.ts";

export default defineConfig({
  schema: "./auth-schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

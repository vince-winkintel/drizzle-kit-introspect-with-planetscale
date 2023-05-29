// import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    connectionString: process.env.DATABASE_URL,
};
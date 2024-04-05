import "dotenv/config";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL as string,
});
await client.connect();

const db = drizzle(client, { logger: true, schema });

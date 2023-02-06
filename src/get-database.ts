import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const database_id = "d7a8b02f084b4cae90eaca47599c919f";

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.databases.retrieve({
    database_id,
  });

  console.log("Got response:", JSON.stringify(response, null, 4));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const page_id = "24ea75b9b86f4b1699c803440f1236cb";

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.pages.retrieve({
    page_id,
  });

  console.log("Got response:", JSON.stringify(response, null, 4));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

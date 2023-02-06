import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { getBacklogDatabaseScheme } from "./databases/backlog";
import { getFeatureFlagsSchema } from "./databases/feature-flags";
import { getVariationsSchema } from "./databases/variations";
import { getReleasesSchema } from "./databases/releases";
import { getDesignThreadSchema } from "./pages/design-thread";
import { getDevThreadsSchema } from "./pages/dev-threads";

dotenv.config();

const parentPageId = process.env.PARENT_PAGE_ID!;

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  console.log("Creating backlog database...");
  //@ts-ignore
  const { id: backlogDatabaseId } = await notion.databases.create({
    parent: {
      page_id: parentPageId,
    },
    ...getBacklogDatabaseScheme(),
  });
  console.log("Created backlog database:", backlogDatabaseId);
  console.log("Creating feature flags database...");

  //@ts-ignore
  const { id: featureFlagsDatabaseId } = await notion.databases.create({
    parent: {
      page_id: parentPageId,
    },
    ...getFeatureFlagsSchema(backlogDatabaseId),
  });

  console.log("Created feature flags database:", featureFlagsDatabaseId);
  console.log("Creating variations database...");
  //@ts-ignore
  await notion.databases.create({
    parent: {
      page_id: parentPageId,
    },
    ...getVariationsSchema(featureFlagsDatabaseId),
  });

  console.log("Creating releases database...");
  //@ts-ignore
  await notion.databases.create({
    parent: {
      page_id: parentPageId,
    },
    ...getReleasesSchema(backlogDatabaseId),
  });

  console.log("Creating design thread page...");
  //@ts-ignore
  await notion.pages.create({
    parent: {
      page_id: parentPageId,
    },
    ...getDesignThreadSchema(),
  });

  console.log("Creating dev thread page...");
  //@ts-ignore
  await notion.pages.create({
    parent: {
      page_id: parentPageId,
    },
    ...getDevThreadsSchema(),
  });

  console.log("Finished!");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

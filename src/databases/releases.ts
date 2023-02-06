export function getReleasesSchema(backlogDatabaseId: string) {
  return {
    cover: {
      type: "external",
      external: {
        url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
      },
    },
    icon: {
      type: "emoji",
      emoji: "⚓",
    },
    title: [
      {
        type: "text",
        text: {
          content: "Releases",
          link: null,
        },
        annotations: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
          code: false,
          color: "default",
        },
        plain_text: "Releases",
        href: null,
      },
    ],
    description: [],
    is_inline: false,
    properties: {
      Date: {
        name: "Date",
        type: "date",
        date: {},
      },
      Tags: {
        name: "Tags",
        type: "select",
        select: {
          options: [
            {
              name: "Canary Release",
              color: "yellow",
            },
            {
              name: "Hot Fix",
              color: "red",
            },
          ],
        },
      },
      "💪 Backlog": {
        name: "💪 Backlog",
        type: "relation",
        relation: {
          database_id: backlogDatabaseId,
          type: "dual_property",
          dual_property: {
            synced_property_name: "⚓ Target Release",
          },
        },
      },
      Name: {
        id: "title",
        name: "Name",
        type: "title",
        title: {},
      },
    },
  };
}

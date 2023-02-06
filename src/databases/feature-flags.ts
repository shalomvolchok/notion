export function getFeatureFlagsSchema(backlogDatabaseId: string) {
  return {
    cover: {
      type: "external",
      external: {
        url: "https://images.unsplash.com/photo-1621977717126-e29965156a27?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
      },
    },
    icon: {
      type: "emoji",
      emoji: "🎏",
    },
    title: [
      {
        type: "text",
        text: {
          content: "Feature Flags",
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
        plain_text: "Feature Flags",
        href: null,
      },
    ],
    description: [],
    is_inline: false,
    properties: {
      "💪 Backlog": {
        name: "💪 Backlog",
        type: "relation",
        relation: {
          database_id: backlogDatabaseId,
          type: "dual_property",
          dual_property: {
            synced_property_name: "🎏 Feature Flags",
            synced_property_id: "Irk%3C",
          },
        },
      },
      Dashboard: {
        name: "Dashboard",
        type: "url",
        url: {},
      },
      Status: {
        name: "Status",
        type: "select",
        select: {
          options: [
            {
              name: "Winner --> 100%",
              color: "green",
            },
            {
              name: "Active A/B Test",
              color: "purple",
            },
            {
              name: "Not started",
              color: "default",
            },
            {
              name: "In progress",
              color: "blue",
            },
            {
              name: "Done",
              color: "green",
            },
          ],
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

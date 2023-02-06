export function getVariationsSchema(featureFlagsDatabaseId: string) {
  return {
    cover: null,
    icon: {
      type: "emoji",
      emoji: "🏆",
    },
    title: [
      {
        type: "text",
        text: {
          content: "Variations",
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
        plain_text: "Variations",
        href: null,
      },
    ],
    description: [],
    is_inline: false,
    properties: {
      Status: {
        name: "Status",
        type: "select",
        select: {
          options: [
            {
              name: "Archived",
              color: "gray",
            },
            {
              name: "100% Production Traffic",
              color: "orange",
            },
            {
              name: "Active A/B Test",
              color: "green",
            },
          ],
        },
      },
      "🎏 Feature Flags": {
        name: "🎏 Feature Flags",
        type: "relation",
        relation: {
          database_id: featureFlagsDatabaseId,
          type: "dual_property",
          dual_property: {
            synced_property_name: "Variations",
          },
        },
      },
      "Preview Link": {
        name: "Preview Link",
        type: "url",
        url: {},
      },
      "Variation Name": {
        id: "title",
        name: "Variation Name",
        type: "title",
        title: {},
      },
    },
  };
}

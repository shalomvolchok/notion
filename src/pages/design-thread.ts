export function getDesignThreadSchema() {
  return {
    cover: null,
    icon: {
      type: "emoji",
      emoji: "🎨",
    },
    archived: false,
    properties: {
      title: {
        id: "title",
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "Design Threads",
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
            plain_text: "Design Threads",
            href: null,
          },
        ],
      },
    },
  };
}

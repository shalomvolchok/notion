export function getDevThreadsSchema() {
  return {
    cover: {
      type: "external",
      external: {
        url: "https://www.notion.so/images/page-cover/nasa_space_shuttle_challenger.jpg",
      },
    },
    icon: {
      type: "emoji",
      emoji: "🛠️",
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
              content: "Dev Threads",
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
            plain_text: "Dev Threads",
            href: null,
          },
        ],
      },
    },
  };
}

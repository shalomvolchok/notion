export function getBacklogDatabaseScheme() {
  return {
    cover: null,
    icon: { type: "emoji", emoji: "💪" },
    title: [
      {
        type: "text",
        text: { content: "Backlog", link: null },
        annotations: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
          code: false,
          color: "default",
        },
        plain_text: "Backlog",
        href: null,
      },
    ],
    is_inline: false,
    properties: {
      "Last Worked On": {
        name: "Last Worked On",
        type: "rich_text",
        rich_text: {},
      },
      "Task name": {
        id: "title",
        name: "Task name",
        type: "title",
        title: {},
      },
      Assign: {
        name: "Assign",
        type: "people",
        people: {},
      },
      Status: {
        name: "Status",
        type: "select",
        select: {
          options: [
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
      Due: {
        name: "Due",
        type: "date",
        date: {},
      },
      Thread: {
        name: "Thread",
        type: "select",
        select: {
          options: [
            {
              name: "Development",
              color: "pink",
            },
            {
              name: "Design",
              color: "blue",
            },
          ],
        },
      },
    },
  };
}

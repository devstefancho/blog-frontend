import { marked } from "marked";

function getMarkedInstance(): typeof marked {
  const renderer = {
    heading(text: string, level: number) {
      const escapedText = text.toLowerCase().replace(/ /g, "-");
      return `<h${level} id="${escapedText}">${text}</h${level}>`;
    },
  };

  const markedWithId = marked.use({ renderer });
  return markedWithId;
}

export const markedInstance = getMarkedInstance();

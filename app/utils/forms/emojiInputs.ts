const emojiRegexRGI = require("emoji-regex/RGI_Emoji.js");

export const allowEmojisAndDeleting = (setText: (arg0: any) => any) => {
  // Generates function which allows user to manually
  // enter emojis into emoji inputs, and to delete them

  const res = (e: any) => {
    const regex = emojiRegexRGI();
    let match;
    let emojiString = "";

    while ((match = regex.exec(e.target.value))) {
      const emoji = match[0];

      emojiString += emoji;
    }
    setText(emojiString);
  };
  return res;
};

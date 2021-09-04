const emojiRegex = require("emoji-regex/RGI_Emoji.js");

export const transformToEmojis = (str:string)=>{
  let res = ""
  const regex = emojiRegex();
  let match;
  while ((match = regex.exec(str))) {
    const emoji = match[0];
    res += emoji
  }
  return res
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const functions = require("firebase-functions");
const emojiProfiles_1 = require("./storage/emojiProfiles");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
    await emojiProfiles_1.getEmojiFile("😀");
    await emojiProfiles_1.uploadImagesToStorage();
});
//# sourceMappingURL=index.js.map
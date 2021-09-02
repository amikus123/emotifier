import * as functions from "firebase-functions";
import {getEmojiFile, uploadImagesToStorage } from "./storage/emojiProfiles";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest(async(request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
  await getEmojiFile("😀")
  await uploadImagesToStorage()
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImagesToStorage = exports.getEmojiFile = void 0;
const fs = require("fs");
// import { getStorage, ref,uploadBytes } from "firebase/storage";
// const storage = getStorage();
exports.getEmojiFile = async (emoji) => {
    let emojiCode = ""; //1f60a
    const number = emoji.codePointAt(0);
    if (number !== undefined) {
        emojiCode = number.toString(16);
    }
    const fileNames = [];
    const fileBuffers = [];
    const fileContent = [];
    const testFolder = "./assets/profilePictures/";
    fs.readdirSync(testFolder).forEach((file, index) => {
        console.log(index, file);
        fileNames[index] = file;
        fs.readFile(`./assets/profilePictures/${file}`, "utf8", (err, data) => {
            fileContent[index] = data;
        });
    });
    console.log("end", fileNames.length, fileContent.length, fileContent[0], fileNames[0]);
};
exports.uploadImagesToStorage = async () => {
    //   const testRef = ref(storage, 'profilePictures/test.jpg');
    //   const storageRef = ref(storage, testRef);
    //   const file = 'test.txt';
    //   try{
    // await    uploadBytes(storageRef, file)
    //     console.log('Uploaded a blob or file!');
    //   }catch(e){
    //     console.log('Failed to upload a blob or file!');
    //   }
};
//# sourceMappingURL=emojiProfiles.js.map
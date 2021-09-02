const fs = require("fs");
// import { getStorage, ref,uploadBytes } from "firebase/storage";
// const storage = getStorage();

export const getEmojiFile = async (emoji: string) => {
  let emojiCode = ""; //1f60a
  const number = emoji.codePointAt(0);
  if (number !== undefined) {
    emojiCode = number.toString(16);
  }
  const fileNames: string[] = [];
  const fileBuffers: Buffer[] = [];
  const fileContent:string[] = []
  const testFolder = "./assets/profilePictures/";

  fs.readdirSync(testFolder).forEach((file,index)=> {
      console.log(index,file)
      fileNames[index] = file;
       fs.readFileSync(
        `./assets/profilePictures/${file}`,
        "utf8",
        (err: any, data: any) => {
          fileContent[index] = data
        }
      );
    
  })

  console.log(
    "end",
    fileNames.length,
  fileContent.length  ,  
  fileContent[0],
    fileNames[0]
  );
};

export const uploadImagesToStorage = async () => {
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

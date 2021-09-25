import { snapshotEqual } from "@firebase/firestore";
import { getDownloadURL, getStorage, ref,uploadBytes,deleteObject  } from "firebase/storage";
const storage = getStorage();

export const uploadFile = async (fileData:Blob,path:string) =>{
 try{
  const storageRef = ref(storage, path);
  let name = ""
  const snapshot = await  uploadBytes(storageRef, fileData)
  name = await getDownloadURL(snapshot.ref)
  console.log(name,"url")
 return name
 }catch(e){
   console.error(e," uploadFile")
   return "smoething went wrong"
 }
  
}

export const deleteFile = async(path:string) =>{
  try{
    const storageRef = ref(storage, path);
    await deleteObject(storageRef)
    console.log("defleted file")
  
   }catch(e){
    console.error(e," deleteFile")

   }
}
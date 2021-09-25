import { getStorage, ref } from "@firebase/storage";

const storage = getStorage();

export const getFileFromStorage = async(fileLocation:string)=>{
try{
  const spaceRef = ref(storage, fileLocation);
  console.log(spaceRef.name)
  return spaceRef.name
}catch(e){
  console.error(e)
  return "error with path"
}
}
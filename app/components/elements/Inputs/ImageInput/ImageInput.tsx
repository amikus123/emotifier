import React, { useEffect, useState } from "react";
import { uploadFile } from "../../../../utils/storage/storageUpload";
import ImageButton from "./ImageButton.";
import Images from "./Images";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { getFileFromStorage } from "../../../../utils/storage/storageAccess";

const ImageInput = () => {
  const [files, setFiles] = useState<FileList[]>([]);
  const [filePaths,setFilePaths] = useState<string[]>([])
  const [uploading, setUplading] = useState(false);

  const handleChange = async (e) => {
    const auth = getAuth();

    const inputedFiles: any[] = Array.from(e.target.files);
    setUplading(true);
    const formData = new FormData();
    const radnomName = uuidv4();
    const fileLocation = `/userImages/${auth.currentUser.displayName}/${radnomName}`;
  
    const storageLocation = await uploadFile(inputedFiles[0], fileLocation);

    // const a = await getFileFromStorage(storageLocation)
    setFilePaths([...filePaths,storageLocation])
    setFiles([...files ,...inputedFiles])
  };

  // creates function that removes image from storage and from state
  const removeFileGenertor = (index:number) =>{
    return ()=>{
      const filesCopy = files
      filesCopy.splice(index,1)
      const filePathsCopy = filePaths
      filePathsCopy.splice(index,1)
      console.log("newc",filePathsCopy,filesCopy)
      setFiles([...filesCopy])
      setFilePaths([...filePathsCopy])
          }
  }
  useEffect(()=>{
    console.log([filePaths,files])
  },[filePaths,files])
  return (
    <>
      <ImageButton handleChange={handleChange} />
      <Images filePaths={filePaths}  removeFileGenertor={removeFileGenertor}/>
    </>
  );
};

export default ImageInput;

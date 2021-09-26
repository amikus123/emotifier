import React, { useEffect, useState } from "react";
import { uploadFile } from "../../../../utils/storage/storageUpload";
import ImageButton from "./ImageButton.";
import Images from "./Images";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";

const checkIfFileInArray = (file: File, arr: File[]) => {
  // for k
  for (const fileItem of arr) {
    console.log(fileItem.type);
    if (
      fileItem.size === file.size &&
      fileItem.lastModified === file.lastModified
    ) {
      return true;
    }
  }
  return false;
};

const ImageInput = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [filePaths, setFilePaths] = useState<string[]>([]);
  const [uploading, setUplading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const handleChange = async (e) => {
    const auth = getAuth();
    const passedFiles:File[] = Array.from(e.target.files);
    const passedFile = passedFiles[0];
    if (passedFile.type !== "image/png") {
      console.log("Selected file is not an image");
      setErrorText("Selected file is not an image");
    } else if (passedFile.size > 1000000) {
      console.log("Selected file is way too big!");
      setErrorText("Selected file is way too big!");
    } else if (checkIfFileInArray(passedFile, files)) {
      console.log("File duplication");
      setErrorText("File duplication");
      // cehck if file is in array
    } else {
      // reset error
      setErrorText("");
      setUplading(true);
      const formData = new FormData();
      const radnomName = uuidv4();
      const fileLocation = `/userImages/${auth.currentUser.displayName}/${radnomName}`;

      const storageLocation = await uploadFile(passedFile, fileLocation);
      if (storageLocation) {
        setUplading(false);
      }
      // const a = await getFileFromStorage(storageLocation)
      setFilePaths([...filePaths, storageLocation]);
      setFiles([...files, passedFile]);
    }
  };

  // creates function that removes image from storage and from state
  const removeFileGenertor = (index: number) => {
    return () => {
      const filesCopy = files;
      filesCopy.splice(index, 1);
      const filePathsCopy = filePaths;
      filePathsCopy.splice(index, 1);
      console.log("newc", filePathsCopy, filesCopy);
      setFiles([...filesCopy]);
      setFilePaths([...filePathsCopy]);
    };
  };
  useEffect(() => {
    console.log([filePaths, files]);
  }, [filePaths, files]);
  return (
    <>
      <ImageButton handleChange={handleChange} errorText={errorText} />
      {uploading ? (
        <div style={{ padding: "1rem 0" }}>
          <CircularProgress />
        </div>
      ) : null}
      <Images filePaths={filePaths} removeFileGenertor={removeFileGenertor} />
    </>
  );
};

export default ImageInput;

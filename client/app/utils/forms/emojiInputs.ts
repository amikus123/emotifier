export const allowDeletesGenerator = (setText:(arg0: any)=>any) => {
 const res = (e:any)=>{
  try{
    // allows ony delete and backspace
  if (
    e.nativeEvent.inputType === "deleteContentBackward" ||
    e.nativeEvent.inputType === "deleteContentBackward"
  ) {
    setText(e.target.value);
  }
  }catch(err){
    console.error(err)
  }
 }
 return res
  
}
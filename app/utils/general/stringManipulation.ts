export const capitalize = (str:string)=>{
  if(str.length === 0) return ""
  if(str.length === 1) return str.charAt(0).toUpperCase()
 return str.charAt(0).toUpperCase() + str.slice(1);
}
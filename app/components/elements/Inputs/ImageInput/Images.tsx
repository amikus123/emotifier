import { Avatar } from '@material-ui/core'
import React from 'react'

interface Props{
  filePaths:string[],
  removeFileGenertor:(index: number) => () => void
}
const Images = ({filePaths,removeFileGenertor}:Props) => {
  const handleClick = (index:number )=>{
    console.log("clicked")
    const res =removeFileGenertor(index)
    res()
  }
 
  return (
    <div>
      {filePaths.map((path,index)=>{
        return <Avatar  src={path} key={index} onClick={()=>handleClick(index)}/>
      })}
    </div>
  )
}

export default Images

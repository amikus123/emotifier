import React,{useState} from 'react'
import ModalButton from '../../elements/Buttons/ModalButton/ModalButton'
import UserProfile from '../../elements/UserProfile/UserProfile'

const PostCreator = () => {
  // facebook desktop style, modal on click
  const [text,setText] = useState("")
  return (

    <div>

      <div>
      <UserProfile showName={false}/>
     <ModalButton type="postCreation"/>
</div>
    </div>
  )
}

export default PostCreator

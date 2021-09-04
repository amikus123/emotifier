import { getAuth, signOut } from "firebase/auth";


const Footer = () => {
  return (
    <div>
      <button onClick={()=>{
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  alert("udalo sie wylogowac")
}).catch((error) => {
  // An error happened.
});
      }}>sign out</button>
    </div>
  )
}

export default Footer

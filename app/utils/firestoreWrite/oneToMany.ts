import { getAuth, signOut } from "firebase/auth";
import { db } from "../../../pages/_app";

export const auth = getAuth();

// export const oneToMany = async ()=>{
//   const uid = auth.currentUser
//   const ref = db.collection("users").doc(uid).collection("messeges")

//   return ref.add({a:1})
// } 

// export const manyToMany = async ()=>{
//   const {uid,displayName} = auth.currentUser
//   const ref = db.collection("users").doc(uid).collection("messeges")
//   const members = {
//     [uid] : displayName,
//   }
//   ref.set({members},{merge:true})
//   return ref.add({a:1})
// } 
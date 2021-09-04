import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
export const getUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
  console.log(uid);

      // ...
    } else {
      // User is signed out
      // ...
      console.log("out");

    }
  });
};

const user = auth.currentUser;
export const getUserData = () => {
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log( {
      displayName,
      email,
      photoURL,
      emailVerified,
    })
  }
  console.log(null);
};

export const logout = () =>{
  auth.signOut();
  console.log('User signed out!');

}
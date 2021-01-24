import React from "react";
import Layout from "../components/Layout";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";

function Account() {
  let provider = new firebase.auth.GoogleAuthProvider();
  const dispatch = useDispatch();
  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleLogOut = () => {
    firebase.auth().signOut();
    return navigate("/");
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      let { displayName, photoURL } = user;
      dispatch({
        type: "USERDETAIL",
        payload: { name: displayName, picture: photoURL },
      });
    } else {
      // No user is signed in.
      console.log("logged out");
    }
  });

  return (
    <Layout>
      <section className="accountsPage">
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>LogOut</button>
      </section>
    </Layout>
  );
}

export default Account;

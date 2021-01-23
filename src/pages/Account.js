import React from "react";
import Layout from "../components/Layout";
import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

function Account() {
  let provider = new firebase.auth.GoogleAuthProvider();
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

  return (
    <Layout>
      <section className="accountsPage">
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Login</button>
      </section>
    </Layout>
  );
}

export default Account;

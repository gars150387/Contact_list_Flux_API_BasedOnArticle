//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

var firebaseConfig = {
	apiKey: "AIzaSyAGA2Mwg3UcZn9mxF2YyZOCoNvvc8CBGgc",
	authDomain: "auth-test-fa7a8.firebaseapp.com",
	projectId: "auth-test-fa7a8",
	storageBucket: "auth-test-fa7a8.appspot.com",
	messagingSenderId: "498887090970",
	appId: "1:498887090970:web:9050dccf083cd5aa4d42a3",
	measurementId: "G-EER0CEF6HG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

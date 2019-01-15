import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyA7CLiiU56bAdECOZqqK0MRRO4v5G5zXCU",
  authDomain: "romobileinfo-780a0.firebaseapp.com",
  databaseURL: "https://romobileinfo-780a0.firebaseio.com",
  projectId: "romobileinfo-780a0",
  storageBucket: "romobileinfo-780a0.appspot.com",
  messagingSenderId: "1084975949475",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();

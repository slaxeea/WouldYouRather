// Import Firebase and Express
const functions = require("firebase-functions");
const express = require("express");
const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyCgCBuPQTAe1NFB0lejPIPv61w72xaSWK0",
  authDomain: "wouldyourather-a4ad8.firebaseapp.com",
  databaseURL: "https://wouldyourather-a4ad8.firebaseio.com",
  projectId: "wouldyourather-a4ad8",
  storageBucket: "wouldyourather-a4ad8.appspot.com",
  messagingSenderId: "231785102729",
  appId: "1:231785102729:web:6c8125a94de16a96eb7558",
  measurementId: "G-NNYPT4W9QJ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const { getImages, getImage, like } = require("./handlers/images");

// Add a Like to a Post
app.post("/images/:URL", like);

exports.api = functions.region("europe-west1").https.onRequest(app);
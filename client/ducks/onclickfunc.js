// Load new Image
var script = document.createElement("script");
script.src = "images.js";
document.head.appendChild(script);



/*
import { https } from 'https';

// Send link
var num = sessionStorage.getItem("number");
var imgurl = sessionStorage.getItem(`image${num}`);
var data = {
  url: imgurl,
};

var options = {
  hostname: "wouldyourather-a4ad8.firebaseapp.com",
  path: "/images",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https
  .request(options, (res) => {
    console.log("Status Code:", res.statusCode);

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("Body: ", JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: ", err.message);
  });

req.write(data);
req.end();
*/

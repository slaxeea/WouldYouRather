// const axios = require('axios');

// Send link
var num = sessionStorage.getItem("number");
var imgurl = sessionStorage.getItem(`image${num}`);
var data = {
    url: imgurl
};

console.log(imgurl);


// Load new Image
var script = document.createElement('script');  
script.src = "images.js"; 
document.head.appendChild(script);
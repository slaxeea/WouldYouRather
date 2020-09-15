var container = document.createElement("div");
container.setAttribute("class", "container");

var i =0;

for(i = 0; i<2; i++){
var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?api_key=7afdb08a-1a4c-4f5a-b4dd-aa4f8a134896",
    true
  );

request.onload = function() {
  console.log("in onload");
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    // console.log(data);

    const imageurl = data[0].url;
    console.log(imageurl);

    const image = document.getElementById(`image${i}`)
    image.class = "rounded";
    image.id = "image";
    image.src = imageurl;
    image.alt = "cat pic";

  } else {
    console.error("Something went wrong");
  }

};

request.send();
}
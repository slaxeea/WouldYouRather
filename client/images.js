var container = document.createElement("div");
container.setAttribute("class", "container");

var i =0;

for (i = 0; i < 2; i++) { 
var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?api_key=7afdb08a-1a4c-4f5a-b4dd-aa4f8a134896",
    true
  );

console.log("past request");
request.onload = function() {
  console.log("in onload");
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    console.log(data);

    const imgurl = this.response[0].url;

    const html = index.html;
    const image = html.getElementById(`image${i}`)
    image.class = "rounded";
    image.id = "image";
    image.src = imgurl;
    image.alt = "cat pic";
  } else {
    console.error("Something went wrong");
  }

  console.log("after load");

};

request.send();
}
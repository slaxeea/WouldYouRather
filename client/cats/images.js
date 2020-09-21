var container = document.createElement("div");
container.setAttribute("class", "container");

var badUrls = {
  1: "https://cdn2.thecatapi.com/images/1BHOp06PK.jpg",
  2: "https://cdn2.thecatapi.com/images/iYTRlHxNS.png",
  3: "https://cdn2.thecatapi.com/images/gEvrbm9Z2.jpg",
  4: "https://cdn2.thecatapi.com/images/-fnK4dtWD.jpg",
  5: "https://cdn2.thecatapi.com/images/mgpqOAbMj.jpg",
};

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.thecatapi.com/v1/images/search?api_key=7afdb08a-1a4c-4f5a-b4dd-aa4f8a134896",
  true
);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    // console.log(data);

    const imageurl = data[0].url;
    // console.log(imageurl);
    if (imageurl !== "https://cdn2.thecatapi.com/images/iYTRlHxNS.png") {
      const image = document.getElementById("image1");
      image.class = "rounded";
      image.id = "image1";
      image.src = imageurl;
      image.alt = "cat pic";
      sessionStorage.setItem("image1", imageurl);
    } else {
      request.send();
    }
  } else {
    console.error("Something went wrong. status:  " + request.status);
  }
};

request.send();

var request2 = new XMLHttpRequest();
request2.open(
  "GET",
  "https://api.thecatapi.com/v1/images/search?api_key=7afdb08a-1a4c-4f5a-b4dd-aa4f8a134896",
  true
);

request2.onload = function () {
  if (request2.status >= 200 && request2.status < 400) {
    var data = JSON.parse(this.response);
    // console.log(data);

    const imageurl = data[0].url;
    // console.log(imageurl);

    const image = document.getElementById("image2");
    const image2 = document.getElementById("image1");
    if (
      imageurl !== "https://cdn2.thecatapi.com/images/iYTRlHxNS.png" &&
      image2.style.src !== imageurl
    ) {
      image.class = "rounded";
      image.id = "image2";
      image.src = imageurl;
      image.alt = "cat pic";
      sessionStorage.setItem("image2", imageurl);
    } else {
      request2.send();
    }
  } else {
    console.error("Something went wrong. status:  " + request2.status);
  }
};

request2.send();

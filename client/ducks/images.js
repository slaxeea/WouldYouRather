var request = new XMLHttpRequest();

request.open("GET", "https://random-d.uk/api/random", true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);

    const imageurl = data.url;

    console.log(imageurl);

    const image = document.getElementById("image1");
    image.class = "rounded";
    image.id = "image1";
    image.src = imageurl;
    image.alt = "duck pic";
    sessionStorage.setItem("image1", imageurl);
  } else {
    console.error("Something went wrong. status:  " + request.status);
  }
};

request.send();


var request2 = new XMLHttpRequest();

request2.open("GET", "https://random-d.uk/api/random", true);

request2.onload = function () {
  if (request2.status >= 200 && request2.status < 400) {
    var data = JSON.parse(this.response);

    const imageurl = data.url;

    console.log(imageurl);

    const image = document.getElementById("image1");
    image.class = "rounded";
    image.id = "image1";
    image.src = imageurl;
    image.alt = "duck pic";
    sessionStorage.setItem("image1", imageurl);
  } else {
    console.error("Something went wrong. status:  " + request2.status);
  }
};

request2.send();
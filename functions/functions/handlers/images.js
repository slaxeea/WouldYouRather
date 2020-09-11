const { db } = require("../admin");
const { url } = require("inspector");

// Function to like image
exports.likePost = (req, res) => {
  const postDocument = db.doc(`/images/${req.params.url}`);

  let postData;

  postDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        postData = doc.data();
        postData.url = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: "Post not found" });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection(`/images/${req.params.url}`)
          .add({
            url: req.params.url,
          })
          .then(() => {
            postData.likeCount++;
            return postDocument.update({ likeCount: postData.likeCount });
          })
          .then(() => {
            return res.json(postData);
          });
      } else {
        return res.status(400).json({ error: "Not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.code });
      console.error(err);
    });
};

// Get one Image
exports.getImage = (req, res) => {
  var api_url =
    "https://api.thecatapi.com/v1/images/search?api_key=7afdb08a-1a4c-4f5a-b4dd-aa4f8a134896";
  let response = fetch(api_url);
  async function get(api_url) {
    response = await fetch(api_url);
    var data = await response.json();
    let tab;
    return {
      tab = <img url = {`${data.url}`}></img>
    }
  }
};

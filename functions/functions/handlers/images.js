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
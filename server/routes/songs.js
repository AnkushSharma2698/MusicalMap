var router = require("express").Router();
const Song = require("../models/songs");
var songController = require("../controllers/songController");

router.get(
  "/",
  songController.index
  // try {
  //     Song.find({})
  //         .then(data => res.json(data))
  // } catch (next) {

  // }

  // catch (err) {
  //     throw err;
  // }
);

// acess id via: req.params.songid
router.get("/:id", songController.song);

router.post("/", songController.post_song);

router.put('/:id', song.put_song);

module.exports = router;

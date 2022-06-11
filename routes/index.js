var express = require("express");
var router = express.Router();

const checkSignIn = require("../middleware/auth").checkSignIn;

const usergameController = require("../controllers").usergame;

router.get("/", checkSignIn, usergameController.index);
router.get("/add", checkSignIn, usergameController.add);
router.post("/add", checkSignIn, usergameController.store);
router.get("/:id", checkSignIn, usergameController.edit);
router.post("/edit", checkSignIn, usergameController.saveEdit);
// router.post("/api/classroom", classroomController.add);
// router.put("/api/classroom/:id", classroomController.update);
router.post("/delete/:id", checkSignIn, usergameController.deleteUserGame);

module.exports = router;

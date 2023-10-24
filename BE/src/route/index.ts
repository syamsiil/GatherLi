import express = require("express");
import threadController from "../controllers/thread-controller";
import userController from "../controllers/user-controller";
import authController from "../controllers/auth-controller";
import verifyToken from "../middlewares/auth";
import { upload } from "../middlewares/uploadsFile";
import queueController from "../controllers/queue-controller";
import replieController from "../controllers/replie-controller";
import likeController from "../controllers/like-controller";
import { getRandomUsers } from "../controllers/userRandom-controller";
import cardController from "../controllers/card-controller";

const router = express.Router();

router.get("/cards", cardController.find);
router.get("/cards/detail/:id", cardController.findOne);
router.post("/cards", verifyToken, upload("image"), cardController.create);
router.delete("/cards/delete/:id", cardController.delete);

router.get("/threads", verifyToken, threadController.find);
router.get("/threads/:id", verifyToken, threadController.findOne);
// router.post("/threads", verifyToken, upload("image"), threadController.create);
router.post("/threads", verifyToken, upload("image"), queueController.enqueue);
// router.delete("/threads/delete/:id", verifyToken, threadController.delete);
// router.patch("/threads/update/:id", verifyToken, threadController.update);

router.get("/replies", verifyToken, replieController.find);
router.post("/reply", verifyToken, replieController.create);

router.post("/like", verifyToken, likeController.create);
router.delete("/like/:thread_id", verifyToken, likeController.delete);

router.get("/user/search", userController.find);
router.get("/user/:id", userController.findOne);
router.delete("/user/:id", userController.delete);
router.patch("/user/:id", userController.update);

router.get("/auth/check", verifyToken, authController.check);
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/random-users", getRandomUsers);

export default router;

const express = require("express");
const { login, logout, addRelationalDB, addNormalDB, changeArrOfDb, addUserIdToDB, changeJSON, deleteDuplicateFromUser, changeImage } = require("../controllers/Admin");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Get an example
 *     description: Returns an example data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: 'This is an example response'
 */
router.post("/login", login);
router.post("/logout", logout);
router.post("/addRelationalDB", authenticate, addRelationalDB);
router.post("/addNormalDB", authenticate, addNormalDB);
router.post("/changeArrOfDb", authenticate, changeArrOfDb);
router.post("/addUserIdToDB", authenticate, addUserIdToDB);
router.post("/changeJSON", authenticate, changeJSON);
router.post("/deleteDuplicateFromUser", authenticate, deleteDuplicateFromUser);
router.post("/changeImage", authenticate, changeImage);

module.exports = router;

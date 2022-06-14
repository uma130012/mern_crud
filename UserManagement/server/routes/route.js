import express from "express";

import {
  addUser,
  deleteUser,
  editUser,
  getAllUser,
  getUserById,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getAllUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;

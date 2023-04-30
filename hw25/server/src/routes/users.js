import { Router } from "express";
import db from "./../database/index.js";

const router = Router();

router
  .get("/", function (req, res) {
    //get data from db
    db.read();
    let users = db.data.users;
    console.log(users);
    res.status(200).json({
      statusText: "success",
      data: users,
    });
  })
  .get("/:id", function (req, res) {
    const { id } = req.params;
    db.read();
    let users = db.data.users;

    let foundUser = users.find((user) => user.id === id);

    if (foundUser) {
      return res.status(200).json({
        statusText: "success",
        data: foundUser,
      });
    }
    res.status(404).json({
      statusText: "failed",
      message: `User with ${id} ID is not found`,
    });
  })
  .post("/", function (req, res) {});

export default router;

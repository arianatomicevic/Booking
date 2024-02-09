const express = require("express");

const router = express.Router();

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    console.log("GET /api/rooms/getallrooms reached!");
    res.send(rooms);
  } catch (error) {
    console.error("Error in GET /api/rooms/getallrooms:", error);
    return res.status(400).json({ message: error });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  try {
    const room = await Room.findOne({ _id: roomid });
    console.log("POST /api/rooms/getroombyid reached!");
    res.send(room);
  } catch (error) {
    console.error("Error in POST /api/rooms/getroombyid:", error);
    return res.status(400).json({ message: error });
  }
});
module.exports = router;

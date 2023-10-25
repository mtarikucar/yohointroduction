const Room = require("../models/Room.model");
const User = require("../models/User.model");

const createRoom = async (req, res) => {
  const { name, admin, image } = req.body;

  try {
    const newRoom = await Room.create({ name, admin, image, members: [admin] });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a room" });
  }
};

const addMember = async (req, res) => {
  const { roomId, memberId } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    room.members.push(memberId);
    await room.save();

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: "Failed to add a member to the room" });
  }
};

const startDirectMessage = async (req, res) => {
  const { userId1, userId2,name } = req.body;

  try {
    // Create a new room
    const newRoom = await Room.create({ name: name, members: [userId1, userId2] });
    
    
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: "Failed to start a direct message" });
  }
};



const getRooms = async (req, res) => {
  const { userId } = req.params;

  try {
    const rooms = await Room.find({
      members: userId,
    })
      .populate("isCommunity", "name") // Populate the "community" field and retrieve only the "name" property
      
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve rooms" });
  }
};

module.exports = { createRoom, getRooms, addMember,startDirectMessage };

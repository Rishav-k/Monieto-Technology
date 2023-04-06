const { io } = require("socket.io-client");

const socket = io("ws://localhost:3000");
socket.on("connect" , ( )=>{
  console.log(`You Connected with id  : ${socket.id}`)
  socket.emit('event', "Rohini")
})
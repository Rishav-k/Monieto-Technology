const { Server } = require("socket.io");

const io = new Server(3000);

var contest = [];
io.on("connection", (socket) => {
  console.log(socket.id+ " HELLO");
  socket.on('event' , async (data)=>{
     const d  = await contest.push(data);
     if(d){
      console.log(contest);
     }
  })
});
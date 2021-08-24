const express=require('express')
const app=express();
const port=process.env.PORT || 7000;
app.use(express.static('static'));
const http=require('http').Server(app);

const io=require('socket.io')(http,{
    cors:{
        origin: "*"
    }
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

const users={};

io.on('connection',socket=>{
  socket.on('new-joiner',name=>{
      users[socket.id]=name;
      socket.broadcast.emit('joined',name);
  });

  socket.on('start-game-1',symbol=>{
      socket.broadcast.emit('game-1',symbol);
  })

  socket.on('start-game-2',symbol=>{
    socket.broadcast.emit('game-2',symbol);
})
socket.on('start-game-3',symbol=>{
    socket.broadcast.emit('game-3',symbol);
})
socket.on('start-game-4',symbol=>{
    socket.broadcast.emit('game-4',symbol);
})
socket.on('start-game-5',symbol=>{
    socket.broadcast.emit('game-5',symbol);
})
socket.on('start-game-6',symbol=>{
    socket.broadcast.emit('game-6',symbol);
})
socket.on('start-game-7',symbol=>{
    socket.broadcast.emit('game-7',symbol);
})
socket.on('start-game-8',symbol=>{
    socket.broadcast.emit('game-8',symbol);
})
socket.on('start-game-9',symbol=>{
    socket.broadcast.emit('game-9',symbol);
})

socket.on('check-win',name=>{
    socket.broadcast.emit('result',name);
})

socket.on('match-drawn',message=>{
    socket.broadcast.emit('drawn',message);
})

socket.on('disconnecting',message=>{
    socket.broadcast.emit('leave',users[socket.id]);
    delete users[socket.id];
});


})

http.listen(port,(err)=>{
    console.log(err);
});

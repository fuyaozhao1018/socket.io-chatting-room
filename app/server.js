//server side
const app = require('express')();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = 8000;


app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', socket => {
    console.log('Someone entered Chat Room');
    
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
        console.log(msg);
    });
    socket.on('disconnect', ()=> {
        console.log('Someone Left Chat Room');
    });
});

//http://localhost:8000/?
server.listen(PORT, () => console.log('Sever is on'));


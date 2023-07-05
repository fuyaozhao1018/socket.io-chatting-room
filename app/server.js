const app = require('express')();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

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

server.listen('3000', () => 'Sever is on');
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();


// Setting for development
/* app.use(express.static(path.join(__dirname, 'public/dist')));
 */
app.set('port', (process.env.PORT || 8988));

app.use(express.static(path.join(__dirname, '/dist')));

// Dev environment
/* app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/public/dist/index.html");
}); */

app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/dist/index.html");
});


var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.on('msg',function(msg){
        
        console.log("msg emited!", msg);
         
    	socket.broadcast.emit('msg', {
            msg: msg.msg,
            bid: msg.bid,
            user: msg.user
        });
    })
});

server.listen(app.get('port'), () => {
    console.log("Server is running! on: ", app.get('port'));
});


/* 'use strict';

var db;
const dbconnection = 'mongodb://jaimeplier:jaime24@ds127878.mlab.com:27878/rincon';
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(dbconnection, (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
        console.log('MONGODB listening on 3000')
    })
})


function databaseStore(message) {
    let storeData = { chatMessage: message, timestamp: new Date().getTime() }
    db.collection('chatroom-chats').save(storeData, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
    })
}

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html')
    res.send('REPTILEHAUS Chat Server')
})




io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', { type: 'new-message', text: message });
        // Function above that stores the message in the database
        databaseStore(message)
    });

});

http.listen(port, () => {
    console.log('Server started on port 5000');
}); */
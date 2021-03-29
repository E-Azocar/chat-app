const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const { addUser, getUser, removeUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
    },
});

io.on("connect", (socket) => {
    socket.on("join", ({ name, room }) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return error;
        }

        socket.emit("message", {
            user: "admin",
            text: `${user.name} se ha unido a la sala`,
        });
        socket.broadcast.to(user.room).emit("message", {
            user: "admin",
            text: `${user.name} se ha unido a la sala`,
        });

        socket.join(user.room);

        return;
    });

    socket.on("sendMessage", (message, cb) => {
        const user = getUser(socket.id);
        io.to(user.room).emit("message", {
            user: user.name,
            text: message,
        });
        io.to(user.room).emit("roomData", {
            room: user.room,
            users: getUsersInRoom(user.room),
        });

        return;
    });

    socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit("message", {
                user: "admin",
                text: `${user.name} ha salido de la sala`,
            });
        }
    });
});

app.use(require("./router"));

server.listen(PORT, () => {
    console.log("Server on port", PORT);
});

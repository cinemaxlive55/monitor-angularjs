exports.init = io => {

    io.on('connection', ctx => {
        console.log('connection task ');
        // ctx.socket.on('switch',(room) => {
        //     ctx.socket.join(room);
        //     // ctx.socket.disconnect();
        //     // io.to(room).emit( 'message', {user:'系统',content:`欢迎 ${username} 进入了该房间 该房间人数${ roomObj[room].length}`});
        // });
    });


}



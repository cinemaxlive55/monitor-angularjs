exports.init = (namespacechat, app) => {
    /**
     * Chat handlers
     */
    namespacechat.on( 'connection', ctx => {
        console.log( 'Joining chat namespace', ctx.socket.id );
    });

    namespacechat.on( 'message', ctx => {
        console.log( 'chat message received', ctx.data );

    // Broadcasts to everybody, including this connection
        app.namespacechat.broadcast( 'message', ctx.data );

    // Broadcasts to all other connections
        ctx.socket.broadcast.emit( 'message', 'ok connections:chat:broadcast '+ ctx.data);

    // Emits to just this socket
        ctx.socket.emit( 'message', 'ok connections:chat:emit '+ ctx.data );
    });
};
exports.init = io =>{

    /**
     * Socket handlers
     */
    //Step 2. RECEIVER + SENDER-  after the step 1 from frontend, we are connected.
    // connection is the default topic for connected
    io.on( 'connection', ctx => {
        console.log( 'Join event', ctx.socket.id );
        //Step 3. broadcast the number of total connections to all clients
        io.broadcast( 'connections', {
            numConnections: io.connections.size
        });
    });

    //Step 6, RECEIVER - server received message
    io.on( 'data', ( ctx, data ) => {
        console.log( 'data event', data );
        console.log( 'ctx:', ctx.event, ctx.data, ctx.socket.id );
        //Step 7, server response to clientA
        ctx.socket.emit( 'response', {
            message: 'response from server for '+ JSON.stringify(ctx.data)
        });
    });

    //Step 9, RECEIVER + SENDER- server received message and ack to client
    io.on( 'ack', ( ctx, data ) => {
            console.log( 'data event with acknowledgement', data );
        ctx.acknowledge( 'server said received ' +JSON.stringify(ctx.data) );
    });

    //Step 11, RECEIVER - disconnect is the default topic, when user close browser, it will triggered.
    // disconnect is the default topic for leave
    io.on( 'disconnect', ctx => {
        console.log( 'leave event', ctx.socket.id );
        console.log( 'remain socket num', io.connections.size );
        io.broadcast( 'connections', {
            numConnections: io.connections.size
        });
    });
}
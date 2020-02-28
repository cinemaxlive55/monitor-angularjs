
exports.init = io =>
{
    io.use(async(ctx, next) => {
        console.log('Socket middleware');
        const start = new Date;
        await next();
        const ms = new Date - start;
        console.log(`WS ${ ms }ms`);
    });

    io.use(async(ctx, next) => {
        await next();
    });
}
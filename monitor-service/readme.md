# koa-passport-jwt-framework

This is the workable version for koa2. This framework is ready for production.

It includes nearly every feature:
*** please check package.json for all the techniques I used.

* authenticate: JWT in header, with passport supported
* session:      no session
* cors: cors
* error handler: throw error at any time and handle it together
* error logger: log any error stacks
* logger format: log everything in json format
* logger: use unified logger
* API calls: user HTTP.request to call third party APIs
* docs: support API docs
* promise: promise everything with async/await
* standard mvc model: router, controller, service, repository
* middleware： every support middleware can be easily added.
* ORM: TODO --> add standard ORM later
* frontend: static page supported

## Example
npm start
http://localhost:3000

## Notice
Please refer to the previous project for API calls


## Sequence for login
1. Frontend Click Login
2. Router
3. go to local passport strategy to check username and password
4. go to passport serialze the information into session
5. sign the jwt token and provide it out


## Sequence for Check Access
1. Frontend click something after logon.
2. Go to checkpoint
3. go to jwt passport strategy to check jwt
4. Go to passport deserialze to get the user id from session and get user whole information into user object
5. if success, checkpoint pass
6. go to router
6. do the real thing

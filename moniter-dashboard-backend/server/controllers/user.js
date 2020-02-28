const userService = require('../services/userService');
const Joi = require('joi');

const v = {};
exports.v = v;

//get user by id validate
v.getUserById = {
  params: {
    id: Joi.number().required()
  },
};
//GET /user/:id
exports.getUserById = async (ctx, next) => {
  let { id } = ctx.params;
  let users = await userService.fetchUserById(id);
  if(!users){
	  ctx.throw(404, 'No User Data found'); 
  }
  ctx.body = { success: true, data: users };
}

//GET /users
exports.getUserList = async (ctx, next) => {
    console.log("user name "+ctx.state.user.username)
    console.log("password "+ctx.state.user.password)
  // ctx.body = { success: true, data: users };
    ctx.body = { success: true, data: ctx.state.user };
}




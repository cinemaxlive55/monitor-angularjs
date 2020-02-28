/**
 * user service domain.
 * It will call the real user opertions for example DB or LDAP.
 */

//simluate get user from DB
exports.fetchUserByName = ((username) => {
  return async function(username) {
	  let user = { };
	  if(username == 'test') {
		   user = { id: 1, username: 'test', password: 'test' };
	  }
    return user;
  }
})();

exports.fetchUserById = ((id) => {
	  return async function(id) {
		  let user = { };
		  if(id == 1) {
			   user = { id: 1, username: 'test', password: 'test' };
		  }
	    return user;
	  }
})();


var chai = require('chai');
var expect = chai.expect;    // Using Expect style
const userService = require('../../services/UserService');

describe('UserService', function() {
    describe('#fetchUserByName()', function() {
        it('should return user object when the username is test', async () => {
            let username  = 'test';
            let userObj = await userService.fetchUserByName(username);
            expect(userObj).to.be.an('object');
        });
    });

    describe('#fetchUserRoleByName()', function() {
        it('should return user when the role is operator', async () => {
            let username  = 'test';
            let userObj = await userService.fetchUserRoleByName(username);
            expect(userObj).to.be.an('object');
        });
    });

    describe('#fetchUserById()', function() {
        it('should return user when the userId is 1', async () => {
            let userId  = 1;
            let userObj = await userService.fetchUserById(userId);
            expect(userObj).to.be.an('object');
        });
    });
});
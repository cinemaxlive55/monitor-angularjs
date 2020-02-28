const supertest = require('supertest')
var chai = require('chai');
var expect = chai.expect;    // Using Expect style
const app = require('../../controllers/Auth');

const request = supertest( app )

describe('Auth', function() {
    describe('#loginJwt()', function() {
        it.skip('POST /loginJwt', ( done ) => {
            request
            .post('/loginJwt')
            .set('Accept', 'application/json, text/plain, */*')
            .set('Content-Type', 'application/json')
            .send({id: 1, username: 'test', password: 123, role: 'citizen'})
            .expect(200)
            .end(( err, res ) => {
                expect(res.body).to.be.an('object');
                expect(res.body.user).to.be.an('object');
                expect(res.body.token).to.be.an('string');
                done();
            });
        });
    });

});
var request = require('supertest');
var app = require('../app');

describe('GET /', () => {
    it('Responds with Hello World.', (done) => {
        request(app).get('/').expect('Hello World', done);
    });
});
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with json and status 200', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.sum_example).toBe(5);
    expect(res.body.message).toMatch(/Jary/);
  });
});

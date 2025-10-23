const request = require('supertest');
const app = require('../app');

test('GET / returns status ok and sum', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
  expect(res.body.sum_example).toBe(5);
});

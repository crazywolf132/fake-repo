const request = require('supertest');
const app = require('../src/app');

describe('App Tests', () => {
  test('GET / should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
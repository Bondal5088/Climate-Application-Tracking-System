const request =require('supertest');
const app = require('./server');

describe('Signup Endpoint', () => {
    it('should return success when vaild user data is provided', async ()=>{
        const response =await request(app)
        .post('/signup')
        .send({
            name: 'John Doe',
            email: 'johndoe@emaple.com',
            password:'password123'
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual('Success');
    });
    
    it('should return error when invaild user data is provided', async () => {
    const response = await request(app)
    .post('/signup')
    .send({
       name:'',
       email:'invailemail',
       password:'123' 
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual('Error');
    });
});
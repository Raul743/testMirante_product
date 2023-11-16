import { StatusCodes } from "http-status-codes";
import request from 'supertest'
import app from "~/base/infra/app";
describe('CreateProductController', () => {

  // should successfully create a product when valid input is provided
  it('should successfully create a product when valid input is provided', async () => {
    const response =  await request(app).post('/v1/products').send({
      name:"Product",
      description:"description 1",
      price:300,
      type:"health"
    })

    expect(response.status).toBe(StatusCodes.CREATED)
  });
});

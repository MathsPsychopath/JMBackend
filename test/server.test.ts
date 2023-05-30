import Hapi from "@hapi/hapi";
import { createServer } from "../src/server";

describe("Server", () => {
  let server: Hapi.Server;

  beforeAll(async () => {
    server = await createServer();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('responds with "Hello, Hapi.js!"', async () => {
    const response = await server.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.payload).toEqual("Hello, Hapi.js!");
  });
});

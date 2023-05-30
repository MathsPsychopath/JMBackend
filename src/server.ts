import Hapi from "@hapi/hapi";

export async function createServer() {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello, Hapi.js!!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
  return server;
}

if (require.main === module) {
  createServer().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

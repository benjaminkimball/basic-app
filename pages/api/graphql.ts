import { NextApiHandler } from "next";
import { server } from "../../lib/graphql/server";

const startServer = server.start();

const handleGraphQL: NextApiHandler = async (req, res): Promise<void> => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  await startServer;
  await server.createHandler({
    path: "/api/graphql",
    disableHealthCheck: true,
  })(req, res);
};

export default handleGraphQL;

export const config = {
  api: {
    bodyParser: false,
  },
};

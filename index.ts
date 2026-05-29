import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";
import cors from "cors";

import {resolvers}  from "./src/resolvers/index";
import  {typeDefs}  from "./src/schema/index";

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:5173",
      ],

      methods: ["GET", "POST"],

      credentials: true,
    }),
    bodyParser.json(),
    expressMiddleware(server)
  );

  app.listen(4000, () => {
    console.log("Server running");
    console.log("http://localhost:4000/graphql");
  });
}

startServer();
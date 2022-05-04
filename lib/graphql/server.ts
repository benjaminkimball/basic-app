import { ApolloServer } from "apollo-server-micro";
import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
  context(ctx) {
    return ctx;
  },
});

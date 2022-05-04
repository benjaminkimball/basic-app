import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

/* eslint-disable @typescript-eslint/no-var-requires */
function createIsomorphLink(): ApolloLink {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("./schema");

    return new SchemaLink({ schema });
  } else {
    const { HttpLink } = require("@apollo/client/link/http");

    return new HttpLink({ uri: "/api/graphql", credentials: "same-origin" });
  }
}
/* eslint-enable @typescript-eslint/no-var-requires */

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createIsomorphLink(),
    ssrMode: typeof window === "undefined",
  });
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo(
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) _apolloClient.cache.restore(initialState);

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}

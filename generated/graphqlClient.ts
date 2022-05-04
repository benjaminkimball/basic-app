import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  ok: Scalars['Boolean'];
};

export type ExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'Query', ok: boolean };


export const ExampleDocument = gql`
    query Example {
  ok
}
    `;

/**
 * __useExampleQuery__
 *
 * To run a query within a React component, call `useExampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useExampleQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
      }
export function useExampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
        }
export type ExampleQueryHookResult = ReturnType<typeof useExampleQuery>;
export type ExampleLazyQueryHookResult = ReturnType<typeof useExampleLazyQuery>;
export type ExampleQueryResult = Apollo.QueryResult<ExampleQuery, ExampleQueryVariables>;
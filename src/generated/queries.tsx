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
  getHello?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['String']>;
};

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', getHello?: string | null };

export type SendMailQueryVariables = Exact<{ [key: string]: never; }>;


export type SendMailQuery = { __typename?: 'Query', sendMail?: string | null };


export const GetHelloDocument = gql`
    query getHello {
  getHello
}
    `;

/**
 * __useGetHelloQuery__
 *
 * To run a query within a React component, call `useGetHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHelloQuery(baseOptions?: Apollo.QueryHookOptions<GetHelloQuery, GetHelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHelloQuery, GetHelloQueryVariables>(GetHelloDocument, options);
      }
export function useGetHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHelloQuery, GetHelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHelloQuery, GetHelloQueryVariables>(GetHelloDocument, options);
        }
export type GetHelloQueryHookResult = ReturnType<typeof useGetHelloQuery>;
export type GetHelloLazyQueryHookResult = ReturnType<typeof useGetHelloLazyQuery>;
export type GetHelloQueryResult = Apollo.QueryResult<GetHelloQuery, GetHelloQueryVariables>;
export const SendMailDocument = gql`
    query sendMail {
  sendMail
}
    `;

/**
 * __useSendMailQuery__
 *
 * To run a query within a React component, call `useSendMailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSendMailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSendMailQuery({
 *   variables: {
 *   },
 * });
 */
export function useSendMailQuery(baseOptions?: Apollo.QueryHookOptions<SendMailQuery, SendMailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SendMailQuery, SendMailQueryVariables>(SendMailDocument, options);
      }
export function useSendMailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SendMailQuery, SendMailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SendMailQuery, SendMailQueryVariables>(SendMailDocument, options);
        }
export type SendMailQueryHookResult = ReturnType<typeof useSendMailQuery>;
export type SendMailLazyQueryHookResult = ReturnType<typeof useSendMailLazyQuery>;
export type SendMailQueryResult = Apollo.QueryResult<SendMailQuery, SendMailQueryVariables>;
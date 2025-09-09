import { GraphQLClient } from 'graphql-request';

import 'dotenv/config';

type FetcherVariables = Record<string, unknown>;
export const graphlFetcher = <TData, TVariables extends FetcherVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    if (process.env.GRAPHQL_URL === undefined) throw new Error('GRAPHQL_URL is not defined');
    const client = new GraphQLClient(process.env.GRAPHQL_URL!, {
      headers: options,
    });
    const headers = {};

    try {
      const response = await client.request<TData>({
        document: query,
        variables,
        requestHeaders: headers,
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
};

import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

let apolloClient;
const {publicRuntimeConfig} = getConfig();
const {
  graphcms: {
    GRAPHCMSID,
    GRAPHCMSURL,
    BRANCH
  }
} = publicRuntimeConfig;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `${GRAPHCMSURL}/${GRAPHCMSID}/${BRANCH}`,
      // uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
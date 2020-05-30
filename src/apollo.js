import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  // fetchOptions: {
  //   mode: 'no-cors'
  // },
  // headers: {
  //   // 'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': true,
  //   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //   "Access-Control-Allow-Headers": "*"
  //
  //
  // }
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});

export default client

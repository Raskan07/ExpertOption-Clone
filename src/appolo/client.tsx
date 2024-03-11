import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://agrinio.stepzen.net/api/linting-anteater/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization : 'Apikey agrinio::stepzen.net+1000::895b72ccedcc52fcb37123e2069e84b2ee4e615af4ec8cecf66c90fac68bb313'
    }
  });

export default client ;
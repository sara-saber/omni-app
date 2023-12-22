import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { Box, Container } from '@mui/material'
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants'
export default function App({ Component, pageProps }) {

  const ssrMode = typeof window === "undefined"

  const graphqlUri = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
    ?
    process.env.BACKEND_URL + "/graphql"
    :
    ssrMode
      ?
      "http://127.0.0.1:3000" + "/api/graphql"
      :
      window.location.origin + "/api/graphql"

  const httpLink = createHttpLink({
    uri:  graphqlUri
  });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })
  const client = new ApolloClient({
    connectToDevTools: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    uri: graphqlUri,
    credentials: "same-origin"
  })

  return (
    <ApolloProvider client={client} >
      <Container maxWidth="xl">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ApolloProvider>
  )

}
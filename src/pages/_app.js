import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { Box, Container } from '@mui/material'
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants'
import { Poppins, Roboto, Fira_Sans } from '@next/font/google'
// const fira_sans = Fira_Sans({
//   subsets: ['latin'],
//   weight: '600',
// })
// // const roboto = Roboto({
// //   subsets: ['latin'],
// //   weight: ['400', '700'],
// // })
const popins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--poppins"
})
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
    uri: graphqlUri
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
      <main  >
        <style jsx global>
          {
            `
            * {
              font-family: ${popins.style.fontFamily} !important;
            }

            button {
              font-family: ${popins.style.fontFamily} !important;
            }
            `
          }
        </style>
        <Header />
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </main>
    </ApolloProvider>
  )

}
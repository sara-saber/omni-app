import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { Box, Typography, Divider, Container, Grid, Avatar, useMediaQuery } from '@mui/material'
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants'
import { Poppins } from '@next/font/google'
import { Get_Categories } from '@/graphql/Query';
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
    const token = document.cookie.split(';')[0].split('=')[1]
    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })
  // const link = createHttpLink({
  //   uri: '/graphql',
  //   credentials: 'same-origin'
  // })
  const client = new ApolloClient({
    connectToDevTools: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    uri: graphqlUri
  })

  const category = client.readQuery(
    {
      query: Get_Categories
    }
  )
  return (
      <ApolloProvider client = { client } >
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
          {console.log(category)}
          <Header category={category} />
          {/* <Grid md={6} xs={12} container gap={2} alignItemst={"center"}>
          <Grid sx={{ display: { md: 'none', xs: 'flex' } }} xs={3}>
            <Avatar>
              <KeyboardBackspaceIcon onClick={() => router.push('my-account')} />
            </Avatar>
          </Grid>
          <Grid xs={6}>
            <Typography fontSize={20} fontWeight={500} justifyContent={{ xs: 'center', md: 'flex-start' }} pb={2}  >

            </Typography>
          </Grid>
          <Grid display={{ md: 'none', xs: 'block' }} xs={12}>
            <Divider />
          </Grid>
        </Grid> */}
          <Container maxWidth={{xl:"lg",md:'xl'}}>
            <Component {...pageProps} />
          </Container>
          <Footer />
        </main>
    </ApolloProvider>
  )

}
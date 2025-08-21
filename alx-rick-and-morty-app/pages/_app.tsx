import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});


function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
    </ApolloProvider>
  )
}

export default App

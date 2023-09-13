import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { Header } from "./components/Header/Header";
import "./App.css";
import { MainScreen } from "./screens/MainScreen/MainScreen";

const GAME_TITLE: string = "Guess The Country";
const URI: string = "https://countries.trevorblades.com/graphql";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: URI }),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header title={GAME_TITLE} />
        <MainScreen />
      </ApolloProvider>
    </>
  );
}

export default App;

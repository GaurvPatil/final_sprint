import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      //uri: "http://localhost:3000/api/graphql", //for local environment 
      uri:"https://final-sprint-7dickbuwa-gaurvpatil.vercel.app/api/graphql" //live site
      
    }),
  });
});
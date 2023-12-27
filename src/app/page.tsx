import Navbar from "./ui/home/navbar";
import {getClient } from "@/apolloProvider/serverProvider"
import { gql } from "@apollo/client";

const query = gql`query Query {
  hello
}`;

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({ query });
  

  
  return (
    <main >
   <Navbar />
   {
    data?.hello
   }
   
    </main>
  )
}

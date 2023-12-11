
import Stack from "@mui/material/Stack";
import { getClient } from "@/appollo/serverProvider";
import { gql } from "@apollo/client";

const query = gql`
  query getStudents {
    getStudents {
      username
      email
    }
  }
`;

export default async function Login() {
  

  const { data } = await getClient().query({ 
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  
  return (
    <Stack direction="row" spacing={2}>
      <main>
        {data?.getStudents?.map(
          (student: { username: string ; email:string }, index: number) => {
            return <p key={index}>{student.username} , {student.email}</p>;
          }
        )}
      </main>
      
    </Stack>
  );
}

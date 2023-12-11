"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

export default function Home() {
  const query = gql`
    query getStudents {
      getStudents {
        username
        email
      }
    }
  `;

  const router = useRouter();

  const { data } = useSuspenseQuery<{ getStudents: Array<{ username: string; email: string }> }>(query); //there is solution for this(codegen) 

  return (
    <Stack direction="row" spacing={2}>
      <main>
        {data?.getStudents?.map(
          (student: { username: string; email: string }, index: number) => {
            return (
              <p key={index}>
                {student.username} , {student.email}
              </p>
            );
          }
        )}
      </main>

      <Button
        variant="outlined"
        color="success"
        onClick={() => router.push("/signup")}
      >
        Admin
      </Button>
      <Button
        variant="outlined"
        color="success"
        onClick={() => router.push("/signup")}
      >
        Guid
      </Button>
      <Button
        variant="outlined"
        color="success"
        onClick={() => router.push("/signup")}
      >
        Student
      </Button>
    </Stack>
  );
}

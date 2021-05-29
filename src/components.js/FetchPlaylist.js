import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchPlaylist />
    </QueryClientProvider>
  );
}

const FetchPlaylist = () => {
  const KEY = process.env.REACT_APP_HOST_API_KEY;

  const { isLoading, error, data } = useQuery("profileData", () => {
    fetch(`https://api.github.com/users/temppone`, {
      method: 'GET',
      headers: {
        Authorization: `token ${KEY} `,
      },
    }).then((response) => response.json());
  });

  if (isLoading) return "Loading...";
  if (error) return "Ocorrreu ume erro";

  console.log(error);
  return <div>{data}</div>;
};

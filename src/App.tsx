import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [name, setName] = useState(``);
  useEffect(() => {
    let isMounted = true;
    Fetch(`
    query RepositoryNameQuery {
      # feel free to change owner/name here
      repository(owner: "facebook" name: "relay") {
        name
      }
    }
  `).then((response) => {
      if (!isMounted) return;

      const { data } = response;
      setName(data.repository.name);
    });
  }, []);

  return <div>{name}</div>;
}

export default App;

async function Fetch(query: string, variables?: string) {
  const TOKEN = import.meta.env.VITE_GH_TOKEN;

  const response = await fetch("https://api.github.com/graphql", {
    method: `post`,
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}

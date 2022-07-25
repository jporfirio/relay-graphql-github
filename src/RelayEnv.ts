// your-app-name/src/RelayEnvironment.js
import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchGraphQL(query: string, variables?: string) {
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

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params: any, variables?: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

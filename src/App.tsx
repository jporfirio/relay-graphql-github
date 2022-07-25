import { Suspense } from "react";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  graphql,
  useFragment,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnv";
import type { AppQuery } from "graph/AppQuery.graphql";

const RepositoryNameQuery = graphql`
  query AppQuery {
    user(login: "jporfirio") {
      name
      avatarUrl
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {});

function App({ preloadedQuery }: { preloadedQuery: any }) {
  const data = usePreloadedQuery<AppQuery>(RepositoryNameQuery, preloadedQuery);

  return (
    <div>
      <p>Hi, mitch</p>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;

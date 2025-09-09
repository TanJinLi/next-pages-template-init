import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: "./graphql/**/*.{graphql,gql}",
  generates: {
    "./graphql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
  config: {
    fetcher: "./graphql-fetcher#graphlFetcher",
    reactQueryVersion: 5, // defaults to generating v4; must specify version
    isReactHook: false, // optional, defaults to false, controls the function's signature.
  },
};
export default config;

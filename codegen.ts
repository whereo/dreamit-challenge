import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/schema.graphql",
  generates: {
    "./src/types/index.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;

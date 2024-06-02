module.exports = {
  client: {
    service: {
      name: "dreamit-code-challenge",
      url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    },
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};

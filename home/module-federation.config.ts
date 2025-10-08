import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "home",
  exposes: {
    ".": "./src/pages/homePage/HomePage.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true },
  },
});

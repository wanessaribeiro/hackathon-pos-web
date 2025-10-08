import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "navbar",
  exposes: {
    "./navigation-bar": "./src/components/NavBar/NavBar.tsx",
    "./header-bar": "./src/components/Header/Header.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true },
  },
});

import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    navbar: "navbar@http://localhost:3002/mf-manifest.json",
    products: "products@http://localhost:3003/mf-manifest.json",
    home: "home@http://localhost:3006/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true },
  },
});

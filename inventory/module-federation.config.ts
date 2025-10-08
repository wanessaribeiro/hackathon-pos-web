import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "inventory",
  exposes: {
    ".": "./src/pages/inventory/Inventory.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true },
  },
});

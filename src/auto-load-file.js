import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const app = createApp(App);

const requireComponent = require.context(
  "./components",
  true,
  /^\.\/.*$/,
  // /base-[\w-]+\.vue$/,
  "sync"
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );
  app.component(componentName, componentConfig.default || componentConfig);
});

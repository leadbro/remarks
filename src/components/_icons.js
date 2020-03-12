// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from "vue";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  "@/assets/icons/",
  // Do not look in subdirectories
  false,
  // Only include "Base" prefixed .vue files
  /[\w-]+\.svg/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName =
    "Icon" +
    fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\//, "")
      // Remove the file extension from the end
      .replace(/\.\w+$/, "")
      // Split up kebabs
      .split("-")
      // Upper case
      .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join("");

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

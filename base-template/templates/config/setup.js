const setupRegistry = require("./setup-registry.json");

let loaded = {};

function setup() {
  Object.keys(setupRegistry).forEach((config) => {
    if (!loaded[config]) {
      require(setupRegistry[config]);
      loaded[config] = true;
    }
  });
  return {...loaded};
}

module.exports = setup();
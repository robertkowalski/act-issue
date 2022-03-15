"use strict";

const core = require("@actions/core");

async function main() {
  const environment = core.getInput("environment", {
    required: true,
  });

  core.setOutput("environment", environment);
  return environment;
}

if (require.main === module) {
  main({}).catch((error) => {
    core.setFailed(error.message);
  });
}

module.exports = {
  main,
};

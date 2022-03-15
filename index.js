"use strict";

const core = require("@actions/core");

async function main() {
  const environment = core.getInput("env", {
    required: true,
  });

  core.setOutput("env", env);
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

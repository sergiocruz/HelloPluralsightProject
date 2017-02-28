#!/usr/bin/env node

var fs = require('fs');
var stdin = process.openStdin();

try {
  var uid = fs.readFileSync('./.projects_config', 'utf8');
} catch(e) {
  console.log("\n======\nMake sure to download the '.projects_config' file from the project page on Pluralsight and add it to the root directory of this project then re-run this command.\n======\n\n");
  process.exit(1);
}

stdin.resume();
stdin.setEncoding('utf8');

// This should be called with a "report" that represents the tests that were run.
stdin.on('data', function(report) {
  try {
    var parsedData = JSON.parse(report);

    // Send the data over to the Projects application
    console.log("Todo: Send report to Pluralsight:", uid)
  } catch(e) {
    // Skip doing anything with this result
  }
});

// When running without watch argument, exit after running
stdin.on('end', function () {
  process.exit(0);
});

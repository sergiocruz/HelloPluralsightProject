#!/usr/bin/env node

var stdin = process.openStdin();

stdin.resume();
stdin.setEncoding('utf8');

// This should be called with a "report" that represents the tests that were run.
stdin.on('data', function(report) {
  try {
    var parsedData = JSON.parse(report);

    // Send the data over to the Projects application
    console.log("Todo: Send report to Pluralsight.")
  } catch(e) {
    // Skip doing anything with this result
  }
});

// When running without watch argument, exit after running
stdin.on('end', function () {
  process.exit(0);
});

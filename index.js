// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

if (crewStatus && fuelReady && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (crewStatus && fuelReady && computerStatus === 'green'){
    console.log('Crew & computer cleared.');
    console.log("10... 9... 8...")
    console.log("7... 6... 6...")
    console.log("5... 4... 3...")
    console.log("2... 1...")
    console.log("Liftoff!");
    launchReady = true; 
} else { 
  console.log("Launch scrubbed")
  launchReady = false;
}

//Almost done, so wipe the sweat off your brow! Add a final if/else block to print a countdown and "Liftoff!" if all the checks pass, or print "Launch scrubbed" if any check fails.
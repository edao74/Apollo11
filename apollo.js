const limit = 0;

for (let i = 12; i >= limit; i--) {
  if (i === 8) {
    console.log("Ignition sequence start");
  } else if (i !== 7) {
    console.log(i);
  }
}

console.log("All engines running\nLiftoff! 🚀");

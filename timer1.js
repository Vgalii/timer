const arr = process.argv.slice(2);

for (let i = 0; i < arr.length; i++) {
  let time = arr[i];
  if (time === NaN || time > 0) {
    setTimeout(function() {
      console.log("BEEP");
    }, (time * 1000) + 1);
  }
}

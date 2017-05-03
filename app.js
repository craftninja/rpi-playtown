const gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT, blink);

function blink() {
  gpio.write(7, true, function(err) {
    if (err) throw err;
    console.log('blink');
    setTimeout(() => {
      gpio.write(7, false, (err) => {
	if (err) throw err;
	process.exit(0);
      })
    }, 100);
  })
}


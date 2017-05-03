# README

### How do you make it go?

#### Ingredients:

* Raspberry Pi 3 Model B
* 10mm diffuse white LED
* 10k Ohm resistor
* Breadboard
* Two M/F Jumper Wires

#### Hook it up

* Pin #7 to one side of the resistor
* Other side of resistor to longer leg of the LED
* Other side of LED to pin #6 (is a ground)
* If the LED doesn't work, flip the LED

#### Run the code

```sh
$ npm install
$ sudo node app.js
```

:rotating_light:

### How did you make this thing?

1. `mkdir directory`, `cd directory`, `git init`, `npm init`
1. `npm install --save rpi-gpio`
1. `echo node_modules > .gitignore`
1. `touch app.js` and add super cool code
1. run it :tada:


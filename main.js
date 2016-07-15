/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
 * A simple node.js application intended to blink the onboard LED on the Intel based i
 * development boards such as the Intel(R) Galileo and Edison using the onboard LED.
 *  
 * https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
 */

var mraa = require('mraa'); //require mraa

var onboardLED = new mraa.Gpio(13); 
onboardLED.dir(mraa.DIR_OUT); 
var ledOn = true; 

blinkLED(); 

function blinkLED()
{
  onboardLED.write(ledOn ? 1 : 0); 
  ledOn = !ledOn; 
  setTimeout(blinkLED, 500); 
}

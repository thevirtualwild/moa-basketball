// used in both player.js and court.js
var ISTEAMGAME = 'false';

//player variables


// court.js variables
var initLoadTime = 7;
var currentLoadTime = 7;

var USEMASTERSLAVEMODE = true;
var ISMASTER;
if (USEMASTERSLAVEMODE) {
  ISMASTER = false;
} else {
  ISMASTER = true;
}


var attractShots = [-.12, 1.2, 1.1, .3, 1, -.2, -2.5, 1.8, 0, 3.2];

var initWaitTime = 2; //was 15
var initGameTime = 10; //was 30
var initResultsTime = 5; //was 10

var loadScreenFadeTime = .5;

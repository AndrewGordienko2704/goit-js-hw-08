import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import * as storageLocal from './storage';

// Constant value entry
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

// Get videoplayer element and a player
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Set and get current time from localStorage
const onPlay = ({ seconds }) =>
  storageLocal.save(VIDEOPLAYER_CURRENT_TIME, seconds);
const videoplayerCurrentTime = storageLocal.load(VIDEOPLAYER_CURRENT_TIME) ?? 0;

// Start traking the timeupdate event with a delay 1s and set current time
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(videoplayerCurrentTime);












// import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';

// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// const lastCurrentTime = localStorage.getItem('videoplayer-current-time');

// player.on('timeupdate', throttle(function ({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }, 1000));

// console.log(lastCurrentTime);







// import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';
// import * as storageLocal from './storage';

// // Constant value entry
// const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

// // Get videoplayer element and a player
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// // Set and get current time from localStorage
// const onPlay = ({ seconds }) =>
//   storageLocal.save(VIDEOPLAYER_CURRENT_TIME, seconds);
// const videoplayerCurrentTime = storageLocal.load(VIDEOPLAYER_CURRENT_TIME) ?? 0;

// // Start traking the timeupdate event with a delay 1s and set current time
// player.on('timeupdate', throttle(onPlay, 1000));
// player.setCurrentTime(videoplayerCurrentTime);









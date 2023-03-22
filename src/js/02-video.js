import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(currentTime);
player.getVideoTitle().then(function (title) {
  console.log('title', title);
});

function getCurrentTime(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

player
  .getCurrentTime()
  .then(function (seconds) {
    console.log('Time:', seconds);
  })
  .catch(function (error) {});

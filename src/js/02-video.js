import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savePlayerTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(savePlayerTime, 1000));

const getLastPlayedTime = () => {
  const defaultTime = 0;
  try {
    const locallySavedTime = localStorage.getItem('videoplayer-current-time');
    if (!locallySavedTime) return defaultTime;
    const parsedTime = JSON.parse(locallySavedTime);
    return Number(parsedTime);
  } catch (error) {
    console.log({ error });
    return defaultTime;
  }
};
const resume = () => {
  const lastPlayedTime = getLastPlayedTime();
  player.setCurrentTime(lastPlayedTime);
};
resume();

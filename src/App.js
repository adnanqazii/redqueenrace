import React from 'react';

import './App.css';
import Foreground1 from './Components/Foreground1'
import Foreground2 from './Components/Foreground2';
import Background1 from './Components/Background1';
import Background2 from './Components/Background2';
import RedQueen from './Components/RedQueen';
function App() {

  let [fg1, fg1info] = Foreground1();
  let [fg2, fg2info] = Foreground2();
  let [bg1, bg1info] = Background1();
  let [bg2, bg2info] = Background2();
  let [queen, queeninfo] = RedQueen();
let animation;
let queenObj=queeninfo();
  let sceneries = [fg1info, fg2info, bg1info, bg2info];


  const adjustBackgroundPlayback = function () {
    if (queenObj) {

      if (queenObj.playbackRate < .8) {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation&& animation.updatePlaybackRate(queenObj.playbackRate / 2 * -1);
        });
      } else if (queenObj.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation&& animation.updatePlaybackRate(queenObj.playbackRate / 2);
        });
      } else {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation && animation.updatePlaybackRate(0);
        });
      }
    }
  }
  adjustBackgroundPlayback();
  setInterval(function () {
    /* Set decay */
    if (queenObj && queenObj.playbackRate > .4) {
      queenObj.updatePlaybackRate(.9 * queenObj.playbackRate);
    }
    adjustBackgroundPlayback();
  }, 3000);

  var goFaster = function () {
    /* But you can speed them up by giving the screen a click or a tap. */
    queenObj&& queenObj.updatePlaybackRate(1.1 * queenObj.playbackRate)
    adjustBackgroundPlayback();
  }


  return (

    <div className="wrapper" onClick={goFaster} onTouchStart={goFaster}>
      {queen}
      {fg1}
      {fg2}
      {bg1}
      {bg2}
    </div>

  );
}

export default App;

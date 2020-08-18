
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import sceneryFrames from './sceneryFrames'
import sceneryTimingForeground from './sceneryTimingForeground'
function Foreground1() {
  
  const { ref,  getAnimation } = useWebAnimations({
    keyframes: [
      ...sceneryFrames// Go through three colors
    ],
    timing: {
      ...sceneryTimingForeground // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
  
      animation.currentTime = animation.effect.getTiming().duration / 2;
      // Triggered when the animation enters the running state or changes state
      
    },

  });
  return [<div ref={ref} className="scenery" id="foreground1">

  <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
</div>,getAnimation];
}

export default Foreground1;

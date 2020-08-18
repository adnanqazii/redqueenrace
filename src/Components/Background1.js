
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import sceneryFrames from './sceneryFrames'
import sceneryTimingBackground from './sceneryTimingBackground'
function Background1() {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
          ...sceneryFrames// Go through three colors
        ],
        timing: {
          ...sceneryTimingBackground // Use a fancy timing function
        },
        onReady: ({ playState, animate, animation }) => {
    
          animation.currentTime = animation.effect.getTiming().duration / 2;
          // Triggered when the animation enters the running state or changes state
        },
    
      });
    
    return [<div ref={ref} className="scenery" id="background1">
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
  </div>,getAnimation];

}

export default Background1;




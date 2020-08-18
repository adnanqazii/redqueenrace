
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import sceneryFrames from './sceneryFrames'
import sceneryTimingForeground from './sceneryTimingForeground'
function Foreground2() {
  
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      ...sceneryFrames// Go through three colors
    ],
    timing: {
      ...sceneryTimingForeground // Use a fancy timing function
    },
  });
  return [<div ref={ref} className="scenery" id="foreground2">
  <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
  <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
</div>,getAnimation];
}

export default Foreground2;

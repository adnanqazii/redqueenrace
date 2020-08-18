
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import spriteFrames from './spriteFrames'
function RedQueen() {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            ...spriteFrames// Go through three colors
        ],
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
          },

        }
        
    );
    
    return [<div><div className="sky"></div>
    <div className="earth">
      <div id="red-queen_and_alice">
        <img ref={ref} id="red-queen_and_alice_sprite"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
          alt="Alice and the Red Queen running to stay in place." />
      </div>
    </div></div>,getAnimation];
}

export default RedQueen;





import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import sceneryFrames from './sceneryFrames'
import sceneryTimingBackground from './sceneryTimingForeground'
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
    
    return [ref,getAnimation];

}

export default Background1;





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
  return [ref,getAnimation];
}

export default Foreground2;

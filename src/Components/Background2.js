


import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import sceneryFrames from './sceneryFrames'
import sceneryTimingBackground from './sceneryTimingForeground'
function Background2() {

    
    const { ref,getAnimation } = useWebAnimations({
        keyframes: [
            ...sceneryFrames// Go through three colors
        ],
        timing: {
            ...sceneryTimingBackground // Use a fancy timing function
        },


    });
    return [ref,getAnimation];
}

export default Background2;





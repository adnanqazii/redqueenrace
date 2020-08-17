
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
    
    return [ref,getAnimation];
}

export default RedQueen;



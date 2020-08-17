import React from 'react';

import './App.css';
import Foreground1 from './Components/Foreground1'
import Foreground2 from './Components/Foreground2';
import Background1 from './Components/Background1';
import Background2 from './Components/Background2';
import RedQueen from './Components/RedQueen';
function App() {

  let [fg1,fg1info]=Foreground1();
  let [fg2,fg2info]=Foreground2();
  let [bg1,bg1info]=Background1();
  let [bg2,bg2info]=Background2();
  let [queen,queeninfo]=RedQueen();

  let sceneries=[fg1info,fg2info,bg1info,bg2info];

 
  const adjustBackgroundPlayback = function() {
    if(queeninfo()) {
     
    if (queeninfo().playbackRate < .8) {
      sceneries.forEach(function(anim) {
        anim()&&anim().updatePlaybackRate (queeninfo().playbackRate/2 * -1);
      });
    }else if (queeninfo().playbackRate > 1.2) {
      sceneries.forEach(function(anim) {
        anim()&&anim().updatePlaybackRate ( queeninfo().playbackRate/2);
      });
    }  else {
      sceneries.forEach(function(anim) {
        anim()&&anim().updatePlaybackRate(0);    
      });
    }   
  }
}
  adjustBackgroundPlayback();
  setInterval( function() {
    /* Set decay */
    if (queeninfo()&&queeninfo().playbackRate > .4) {
      queeninfo().updatePlaybackRate (.9*queeninfo().playbackRate);    
    } 
    adjustBackgroundPlayback();
  }, 3000);
  
  var goFaster = function() {
    /* But you can speed them up by giving the screen a click or a tap. */
    queeninfo()&&queeninfo().updatePlaybackRate (1.1*queeninfo().playbackRate)
    adjustBackgroundPlayback();
  }
  

  return (

    <div className="wrapper" onClick={goFaster} onTouchStart={goFaster}>
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img ref={queen} id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>
      <div ref={fg1} className="scenery" id="foreground1">
   
      <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
    </div>
    <div ref={fg2} className="scenery" id="foreground2">
            <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
            <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
        </div>
      <div ref={bg1} className="scenery" id="background1">
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div ref={bg2} className="scenery" id="background2">
            <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

            <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
            <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
        </div>
    </div>

  );
}

export default App;

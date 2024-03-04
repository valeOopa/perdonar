import { useState } from "react";
import PropTypes from 'prop-types';

export default function Sorry({setYes}) {
    // 1em = 16px
    // const extent = 'em';
    const [position,setPosition] = useState({right: 0, top: 0});
    const [center,setCenter] = useState(false);

    // const [buttonHeight, setButtonHeight ]= useState(2);
    // const [buttonWidth, setButtonWidht ]= useState(6);
    // const [buttonFontSize, setButtonFontSize] = useState(1.5);
    // const [ count, setCount ] = useState(0);
    
    // const [ buttonYesStyles, setButtonYesStyles ] = useState({height: buttonHeight+extent, width: buttonWidth+extent, fontSize: buttonFontSize+extent});
    
    
    
    const randomHeight = Math.random()*window.innerHeight;
    const randomWidth = Math.random()*window.innerWidth
    const newHeight = (randomHeight > (16*3) && randomHeight-(16*3))+'px';
    const newWidth = (randomWidth > (16*9) && randomWidth-(16*9)+'px');

    const moveElement = () => {
        setPosition({position: 'absolute',top: newHeight, right: newWidth});
        setCenter(true);
        // setButtonHeight(buttonHeight*1.1);
        // setButtonWidht(buttonWidth*1.1);
        // setButtonFontSize(buttonFontSize*1.1);
        // setCount(count+1);
        // console.log(count)
        // setButtonYesStyles({height: buttonHeight+extent, width: buttonWidth+extent, fontSize: buttonFontSize+extent});
    };
  return (
    <article id="app__article">
        <h1 id="article__title">¿Me perdonas?</h1>
        <div id='article__buttons-container'>
          <button className={`buttons__button ${center ? 'noMargin':'margin'} `}/*style={buttonYesStyles}*/onClick={()=>setYes(true)}   id="buttons__button-yes">Si</button>
          <button className="buttons__button" style={position} onMouseMove={moveElement} onMouseEnter={moveElement} id="buttons__button-no">No</button>
        </div>
      </article>
  )
}

Sorry.propTypes = {
    setYes: PropTypes.func.isRequired
}
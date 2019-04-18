import React from 'react';
import { ReactComponent as CSS } from '../assets/CSS.3.svg';
import { ReactComponent as HTML5 } from '../assets/HTML5_logo.svg';
import { ReactComponent as Jquery } from '../assets/Jquery.svg';
import { ReactComponent as ReactIcon } from '../assets/React-icon.svg';
import { ReactComponent as JavaScriptLogo } from '../assets/JavaScript_logo.svg';

const Skills = () => {
    return (
        <div  className ='ui raised very padded text container segment'>
           <CSS style = {{height:"4em", width: "4em"}} />
           <HTML5  style = {{height:"4em", width: "4em"}} />
           <Jquery  style = {{height:"4em", width: "4em"}} />
           <ReactIcon  style = {{height:"4em", width: "4em"}}/>
           <JavaScriptLogo style = {{height:"4em", width: "4em"}} />
        </div>
    );
}

export default Skills; 
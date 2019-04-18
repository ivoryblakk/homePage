import React from 'react';
// import unsplash from '../api/unsplash'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import './App.css';


class App extends React.Component {

    render () {
     return (
    <>
        <div className="ui container" > 
           <AboutMe/>
        </div>
        
        <div className="ui container" > 
            <Projects/>
        </div>

        <div className="ui container" > 
        <Skills />
        </div>
      </>  
     );
    }
}

export default App; 

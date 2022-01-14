import { useState } from 'react';

import { Link } from "react-router-dom"

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { siteSections, sections } = props

  //console.log(sections)
  return (
    <header>
        <Link 
            className="content"
            to="/"
        >
            Home
        </Link>   
        <button
          id="header-toggle"
          onClick={() => setIsOpen(true)}
        >
          ⌄
        </button>
        <Link 
            className="content"
            to="/about"
        >
            About
        </Link> 
      <div
        id="header"
        className={isOpen ? "open" : "close"}
      >           
          <div id="context-menu">
            {sections && <ContextMenu sections={sections}/>}
          </div>          
          <button 
            id="header-toggle"
            onClick={() => setIsOpen(false)}
          >
            ⌃
          </button>  
          <div id="site-menu">
            {siteSections && <MainMenu sections={siteSections}/>}
          </div>
        </div>
      
    </header>
  );
}

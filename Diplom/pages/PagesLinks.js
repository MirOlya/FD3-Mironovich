import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { mdiHumanQueue } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiFormatListNumbered } from '@mdi/js';
import Icon from '@mdi/react';

import './css/PagesLinks.css';

function PagesLinks (props) {
          
    const [collapsedMenu, setCollapsedMenu] = useState({matches: window.innerWidth < 768 ? true : false,})
    const [collapsedMenuHand, setCollapsedMenuHand] = useState(true)
    
    useEffect(() => {
      let mediaQuery = window.matchMedia("(max-width: 768px)");
      mediaQuery.addListener(setCollapsedMenu);
      // this is the cleanup function to remove the listener
      return () => mediaQuery.removeListener(setCollapsedMenu);
    }, []);

    return (
      <div id = 'maps_links' className='maps_links'>
        {(collapsedMenu && collapsedMenu.matches) || collapsedMenuHand ? (
          <div className = 'links links_small'>
            <div className = 'links_header links_header_small'>
                <button onClick={()=>{setCollapsedMenuHand(false);setCollapsedMenu(false)}}>{'>'}</button>
            </div>
            <NavLink to="/" exact className='PageLink PageLinkSmall' activeClassName="ActivePageLink"><Icon path={mdiHumanQueue} size={'24px'}/></NavLink>
            <NavLink to="/company" className="PageLink PageLinkSmall" activeClassName="ActivePageLink"><Icon path={mdiFormatListNumbered} size={'24px'}/></NavLink>
            <NavLink to="/clients" className="PageLink PageLinkSmall" activeClassName="ActivePageLink"><Icon path={mdiAccount} size={'24px'}/></NavLink>
          </div>
            ):
        (
          <div className = 'links'>
            <div className = 'links_header'>
                <span>НАВИГАЦИЯ</span>
                <button onClick={()=>{setCollapsedMenuHand(true)}}>{'<'}</button>
            </div>
              <NavLink to="/" exact className="map_list PageLink map_nav" activeClassName="ActivePageLink">
                <Icon path={mdiHumanQueue} size={'24px'}/>
                <span>Сотрудники</span>
              </NavLink>
              <NavLink to="/company" exact className="map_list PageLink map_nav" activeClassName="ActivePageLink">
                <Icon path={mdiFormatListNumbered} size={'24px'}/>
                <span>О компании</span>
              </NavLink>
              <NavLink to="/clients" exact className="map_list PageLink map_nav" activeClassName="ActivePageLink">
                <Icon path={mdiAccount} size={'24px'}/>
                <span>Клиенты</span>
              </NavLink>
              {/* <div className='map_list PageLink'>
                <Icon path={mdiFormatListNumbered} size={'24px'}/>
                <NavLink to="/company" className="map_nav" activeClassName="ActivePageLink">О компании</NavLink>
              </div>
              <div className='map_list PageLink'>
              <Icon path={mdiAccount} size={'24px'}/>
                <NavLink to="/clients" className="map_nav" activeClassName="ActivePageLink">Клиенты</NavLink>
              </div> */}
            </div>
        )}
      </div>
    );
    

}
  
export default PagesLinks;
    
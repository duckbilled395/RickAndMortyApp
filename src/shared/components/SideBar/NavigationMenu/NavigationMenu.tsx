import React from "react";
import { NavLink } from "react-router-dom";

import './navigationMenu.scss';

const NavigationMenu: React.FC = () => {

	return (
		<div className='nav__menu'>
			<div><NavLink className='nav__menu_link' to='/profile'>Profile</NavLink></div>
			<div><NavLink className='nav__menu_link' to='/characters'>Characters</NavLink></div>
		</div>
	)
}

export default NavigationMenu

import React from "react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";

import './sidebar.scss'

const SideBar: React.FC = () => {

	return (
		<div className='sidebar'>
			<NavigationMenu />
		</div>
	)
}

export default SideBar


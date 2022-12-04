import React from "react";

import loadingIcon from "../../../assets/svg/loading-icon.svg";

import './loader.scss'

const Loader: React.FC = () => {
  return (
      <div className='loader__icon'>
        <img src={loadingIcon} alt="загрузка"/>
      </div>
  )
}

export default Loader
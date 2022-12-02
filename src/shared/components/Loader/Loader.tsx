import React from "react";

import loadingIcon from "../../../assets/svg/loading-icon.svg";

import './loader.scss'

type PropsType = {
  top: Property.Top<string | number> | undefined
  left: string | undefined
}

const Loader: React.FC<PropsType> = (top, left) => {
  // if (props.main) className = "loader__icon main-loader"
  
  // let position = props?.position
  // let size = props?.size || 96
  // let top = props.top
  // let left = props.left
  // let right = props.right
  // let tX = props?.tX || 0
  // let tY = props?.tY || 0
  
  // @ts-ignore
  return (
      <div className='loader__icon' style={{
        // position: position,
        // width: size,
        // height: size,
        top: top,
        left: left,
        // right: right,
      }}>
        <img src={loadingIcon} alt="загрузка"/>
      </div>
  )
}

export default Loader
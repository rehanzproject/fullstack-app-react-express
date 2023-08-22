import * as React from "react"

function MenuIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} onClick={props.onClick}  viewBox="0 0 24 24" {...props}>
      <path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z" />
    </svg>
  )
}

export default MenuIcon

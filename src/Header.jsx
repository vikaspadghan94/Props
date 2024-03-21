import React from 'react'

// function Header(props) { // easy way to deconstruct
function Header({headerInfo, c, children}) {

    // console.log(props);
    // console.log(props.headerInfo.phone);
    // console.log(props.headerInfo.email);


  return (
    <div>
        {children}
      {/* <h1>Welcome to react {props.email} || {props.phone}</h1> */}
      <h1>Hello welcome to props {headerInfo.phone}</h1>
      <div>Hello java</div>
      <div>this is me</div>
    </div>
  )
}

export default Header

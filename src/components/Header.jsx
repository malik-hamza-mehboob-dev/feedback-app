import React from 'react'

function Header({text , bgColor , textColor}) {
    const headerStyles = {
        backgroundColor : bgColor,
        color : textColor,
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}


Header.defaultProps = {
    text : 'default Text',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6a95'
}

const Styles = {
    headerStyles:{
        
    }
}


export default Header       
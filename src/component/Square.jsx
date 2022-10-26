import React from 'react'

const Square = ({value , onClick , isWinningSquare}) => {
    // console.log(props);
    
    return (
        <button type = "button"  onClick={ onClick } className={`square ${isWinningSquare ? 'winning': ''} ${value === 'x' ? 'text-green': 'text-orange'}`} style={{fontWeight : isWinningSquare ? 'bold' : 'normal'} }>{value}</button>
  )
}

export default Square

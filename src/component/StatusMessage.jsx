import React from 'react'

const StatusMessage = ({winner, current}) => {

  const noMovesLeft=current.board.every(el=>el !== null);

  return (
    <h2>
    {/* const Message = winner ? `winner is ${winner} ` : `Next player is ${ current.isXNext ? 'x' : 'o' }` ; */}
    { winner && `winner is ${winner}`}
    { !winner && !noMovesLeft && `Next player is ${current.isXNext ? 'x' : 'o' }`}
    { !winner && noMovesLeft && ' x and o tied '}
    </h2>
  )
}

export default StatusMessage

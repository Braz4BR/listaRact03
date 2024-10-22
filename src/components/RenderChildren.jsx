// Exercício08
import React from 'react'

const ChildrenComp = ({children}) => {
  return (
    <div className="card">
        {children}
    </div>
  )
}

export default ChildrenComp
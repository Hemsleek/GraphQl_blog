import React from 'react'

const Notify = ({message}) => {
    if(!message) return null
    return (
        <div className="Notify" style={{margin:"0.5rem 0 1rem", color:"red"}}>
            {message}
        </div>
    )
}

export default Notify

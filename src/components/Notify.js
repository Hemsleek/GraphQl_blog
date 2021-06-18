import React from 'react'

const Notify = ({message}) => {
    if(!message) return null

    return (
        <div className="Notify">
            {message}
        </div>
    )
}

export default Notify

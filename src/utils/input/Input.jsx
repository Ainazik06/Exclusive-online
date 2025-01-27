import React from 'react'

function input({ placeholder }) {
    return (
        <div>
            <input placeholder={placeholder}
                style={{ outline: 'none', border: 'none' }} type="text" />
        </div>
    )
}

export default input
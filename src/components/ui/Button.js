import React from 'react'

export default function Button({ type = 'button', onClick, className = '', children }) {
    return <button
        type={type}
        onClick={() => onClick?.()}
        className={`default-btn ${className}`}
    >
        {children}
    </button>
}

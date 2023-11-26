import React from 'react'

export default function TextInput({ placeholder = '', type = 'text', name = '', onChange, defaultValue = '', className = '' }) {
    return <input
        placeholder={placeholder}
        type={type} name={name}
        onChange={e => onChange?.(e.target.value)}
        defaultValue={defaultValue}
        className={`text-input ${className}`}
    />
}

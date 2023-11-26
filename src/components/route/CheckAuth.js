import React from 'react'
import { userRole } from 'store'

export default function CheckAuth({ role, children }) {

    return role.some(el => el === userRole) ? children : <p>Not found</p>
}

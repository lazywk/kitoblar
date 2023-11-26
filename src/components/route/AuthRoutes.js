import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from 'store'

export default function AuthRoutes() {

  if (isAuthenticated) {
    return <Navigate to={"/"} replace />
  }

  return <Outlet />
}

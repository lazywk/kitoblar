import appConfig from 'configs/appConfig'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    const { unAuthenticatedEnrtyPath } = appConfig

    const authenticated = true

    if (!authenticated) {
        return <Navigate to={unAuthenticatedEnrtyPath} replace />
    }

    return <Outlet />
}

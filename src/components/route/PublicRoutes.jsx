import appConfig from 'configs/appConfig'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes() {
    const { authenticatedEnrtyPath } = appConfig

    const authenticated = true

    if (authenticated) {
        return <Navigate to={authenticatedEnrtyPath} replace />
    }

    return <Outlet />
}

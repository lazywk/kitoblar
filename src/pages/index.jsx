import AppRoute from 'components/route/AppRoute'
import ProtectedRoutes from 'components/route/ProtectedRoutes'
import PublicRoutes from 'components/route/PublicRoutes'
import { AdminRoutes, AuthRoutes } from 'configs/routes'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export default function MainPage() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<PublicRoutes />}>
          {
            AuthRoutes.map(route => <Route key={route.key} path={route.path} element={<AppRoute component={route.component} />} />)
          }
        </Route>
        <Route path='/' element={<ProtectedRoutes />}>
          {
            AdminRoutes.map(route => <Route key={route.key} path={route.path} element={<AppRoute component={route.component} />} />)
          }
        </Route>


        <Route path='*' element={<h2>404 | Not Found</h2>} />
      </Routes>
    </Suspense>
  )
}

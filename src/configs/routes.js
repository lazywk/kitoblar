import React from "react"

export const AuthRoutes = [
    {
        key: 'register',
        path: '/register',
        component: React.lazy(() => import('pages/auth/register'))
    },
    {
        key: 'login',
        path: '/login',
        component: React.lazy(() => import('pages/auth/login'))
    }
]

export const AdminRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('pages/private/home'))
    },
    {
        key: 'books',
        path: '/books',
        component: React.lazy(() => import('pages/private/books'))
    },
    {
        key: 'create-book',
        path: '/create-book',
        component: React.lazy(() => import('pages/private/create-book'))
    },
    {
        key: 'create-author',
        path: '/create-author',
        component: React.lazy(() => import('pages/private/create-author'))
    },
    {
        key: 'profile',
        path: '/profile',
        component: React.lazy(() => import('pages/private/profile/profile'))
    },
    {
        key: 'security',
        path: '/security',
        component: React.lazy(() => import('pages/private/profile/security'))
    },
    {
        key: 'settings',
        path: '/settings',
        component: React.lazy(() => import('pages/private/profile/settings'))
    },
]
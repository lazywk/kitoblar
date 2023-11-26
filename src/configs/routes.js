import React from "react"


export const authRoutes = [
    {
        key: "register",
        path: "/register",
        component: React.lazy(() => import('pages/auth/register'))
    },
    {
        key: "login",
        path: "/login",
        component: React.lazy(() => import('pages/auth/login'))
    },
]

export const protectedRoutes = [
    {
        key: "home",
        path: "/",
        role: ["admin", "user"],
        component: React.lazy(() => import('pages/private/home'))
    },
    {
        key: "books",
        path: "/books",
        role: ["admin", "user"],
        component: React.lazy(() => import('pages/private/books'))
    },
    {
        key: "profile",
        path: "/profile",
        role: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile'))
    },
    {
        key: "security",
        path: "/security",
        role: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile/security'))
    },
    {
        key: "settings",
        path: "/settings",
        role: ["admin", "user"],
        component: React.lazy(() => import('pages/private/profile/settings'))
    },
    {
        key: "create-book",
        path: "/create-book",
        role: ["admin"],
        component: React.lazy(() => import('pages/private/create/create-book'))
    },
    {
        key: "create-author",
        path: "/create-author",
        role: ["admin"],
        component: React.lazy(() => import('pages/private/create/create-author'))
    },
]
import { lazy } from 'react'

export const pageRoutes = [{ path: '/', Component: lazy(() => import('./pages/Home')) }]

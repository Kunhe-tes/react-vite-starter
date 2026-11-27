import { Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { pageRoutes } from './routes'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<p role="status">正在加载页面…</p>}>
        <Routes>
          {pageRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route
            path="*"
            element={
              <main>
                <h1>页面不存在</h1>
                <Link to="/">返回首页</Link>
              </main>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

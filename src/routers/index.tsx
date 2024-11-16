import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const Docs = lazy(() => import('pages/Docs'))
const DocItemDetails = lazy(() => import('pages/Docs/slug'))

// import PrivateRouter from 'routers/middleware/PrivateRouter'
// import PublicRoute from 'routers/middleware/PublicRouter'

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<span>Loading</span>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/documentation" element={<Docs />} />
                    <Route
                        path="/documentation/:slug"
                        element={<DocItemDetails />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routers

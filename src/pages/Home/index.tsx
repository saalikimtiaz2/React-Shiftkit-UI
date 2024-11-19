import Layout from 'components/Layout'
import React from 'react'

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="font-Jost flex min-h-screen items-center justify-center bg-gray-800 text-2xl">
                <p className="text-center">
                    <b className="text-white block">
                        React-ShiftKit Documentation
                    </b>
                    🚀 Smooth shifts made simpler—comprehensive guides coming
                    soon! Stay tuned. 🛠️
                </p>
            </div>
        </Layout>
    )
}

export default Home

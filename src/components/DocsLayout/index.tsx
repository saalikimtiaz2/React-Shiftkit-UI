import Layout from 'components/Layout'
import Sidebar from 'components/Navigation/Sidebar'
import React from 'react'

const DocLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <div className="grid grid-cols-12 h-[95vh] ">
                <div className="col-span-2 bg-white h-full">
                    <Sidebar />
                </div>
                <div className="col-span-10 bg-gray-700 text-gray-100 h-full py-6 px-6 md:px-12 lg:px-20 xl:px-32 ">
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default DocLayout

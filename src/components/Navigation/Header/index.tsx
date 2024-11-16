import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-x-4 bg-primary px-8 py-2 text-white">
            <Link to="/">Home</Link>
            <Link to="/documentation">Documentation</Link>
        </div>
    )
}

export default Header

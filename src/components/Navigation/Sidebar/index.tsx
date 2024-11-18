import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const generalNavs = [
    {
        name: 'Getting Started',
        path: '/documentation',
    },
]
const componentList = [
    {
        name: 'Button',
        path: 'button',
    },
    {
        name: 'Drawer',
        path: 'drawer',
    },
    {
        name: 'Input',
        path: 'input',
    },
    {
        name: 'Password Input',
        path: 'password-input',
    },
    {
        name: 'Text Area',
        path: 'text-area',
    },
]
const hooksList = [
    {
        name: 'useDarkSide',
        path: 'use-dark-side',
    },
    {
        name: 'useDebounce',
        path: 'use-debounce',
    },
    {
        name: 'useLocalStorage',
        path: 'use-local-storage',
    },
    {
        name: 'useScoll',
        path: 'use-scroll',
    },
    {
        name: 'useToggle',
        path: 'use-toggle',
    },
]
const utilsNavs = [
    {
        name: 'Format with Suffix',
        path: 'format-with-suffix',
    },
    {
        name: 'If',
        path: 'if',
    },
    {
        name: 'Show',
        path: 'Show',
    },
]

const Sidebar: React.FC = () => {
    const { slug } = useParams()

    const navigate = useNavigate()
    return (
        <div className=" text-white bg-gray-800 h-full pt-6">
            <ul>
                {generalNavs.map((nav) => (
                    <li key={nav.name} className="px-4 py-2">
                        <Link to={nav.path}>{nav.name}</Link>
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b border-gray-700 mb-2 text-gray-500 mx-4 pb-1">
                    Components
                </li>
                {componentList.map((component) => (
                    <li
                        onClick={() =>
                            navigate(`/documentation/${component.path}`)
                        }
                        key={component.name}
                        className={`px-4 py-2 cursor-pointer transition-all ease-in-out duration-300  ${slug === component.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-500/20 hover:text-white'}`}
                    >
                        {component.name}
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b border-gray-700 mb-2 text-gray-500 mx-4 pb-1">
                    Utilities
                </li>
                {utilsNavs.map((util) => (
                    <li
                        onClick={() => navigate(`/documentation/${util.path}`)}
                        key={util.name}
                        className={`px-4 py-2 cursor-pointer transition-all ease-in-out duration-300  ${slug === util.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-500/20 hover:text-white'}`}
                    >
                        {util.name}
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b border-gray-700 mb-2 text-gray-500 mx-4 pb-1">
                    Hooks
                </li>
                {hooksList.map((hook) => (
                    <li
                        onClick={() => navigate(`/documentation/${hook.path}`)}
                        key={hook.name}
                        className={`px-4 py-2 cursor-pointer transition-all ease-in-out duration-300  ${slug === hook.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-500/20 hover:text-white'}`}
                    >
                        {hook.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

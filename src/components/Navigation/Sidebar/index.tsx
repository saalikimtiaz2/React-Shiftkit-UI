import React from 'react'
import { Link } from 'react-router-dom'

const generalNavs = [
    {
        name: 'Getting Started',
        path: '/documentation',
    },
]
const componentList = [
    {
        name: 'Button',
        path: '/documentation/button',
    },
    {
        name: 'Drawer',
        path: '/documentation/drawer',
    },
    {
        name: 'Input',
        path: '/documentation/input',
    },
    {
        name: 'Password Input',
        path: '/documentation/password-input',
    },
    {
        name: 'Text Area',
        path: '/documentation/text-area',
    },
]
const hooksList = [
    {
        name: 'useDarkSide',
        path: '/documentation/use-dark-side',
    },
    {
        name: 'useDebounce',
        path: '/documentation/use-debounce',
    },
    {
        name: 'useLocalStorage',
        path: '/documentation/use-local-storage',
    },
    {
        name: 'useScoll',
        path: '/documentation/use-scroll',
    },
    {
        name: 'useToggle',
        path: '/documentation/use-toggle',
    },
]
const utilsNavs = [
    {
        name: 'Format with Suffix',
        path: '/documentation/format-with-suffix',
    },
    {
        name: 'If',
        path: '/documentation/if',
    },
    {
        name: 'Show',
        path: '/documentation/Show',
    },
]

const Sidebar: React.FC = () => {
    return (
        <div className="p-4">
            <ul>
                {generalNavs.map((nav) => (
                    <li key={nav.name}>
                        <Link to={nav.path}>{nav.name}</Link>
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b mb-2 text-gray-500">Components</li>
                {componentList.map((component) => (
                    <li key={component.name}>
                        <Link to={component.path}>{component.name}</Link>
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b mb-2 text-gray-500">Utilities</li>
                {utilsNavs.map((util) => (
                    <li key={util.name}>
                        <Link to={util.path}>{util.name}</Link>
                    </li>
                ))}
            </ul>
            <ul className="mt-4">
                <li className="border-b mb-2 text-gray-500">Hooks</li>
                {hooksList.map((hook) => (
                    <li key={hook.name}>
                        <Link to={hook.path}>{hook.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

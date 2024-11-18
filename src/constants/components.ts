type componentTypes = {
    name: string
    path: string
    type: string
}[]

export type { componentTypes }

export const componentList: componentTypes = [
    {
        name: 'Button',
        path: 'button',
        type: 'component',
    },
    {
        name: 'Drawer',
        type: 'component',
        path: 'drawer',
    },
    {
        name: 'Input',
        path: 'input',
        type: 'component',
    },
    {
        name: 'Password Input',
        path: 'password-input',
        type: 'component',
    },
    {
        name: 'Text Area',
        path: 'text-area',
        type: 'component',
    },

    {
        name: 'useDarkSide',
        path: 'use-dark-side',
        type: 'hook',
    },
    {
        name: 'useDebounce',
        path: 'use-debounce',
        type: 'hook',
    },
    {
        name: 'useLocalStorage',
        path: 'use-local-storage',
        type: 'hook',
    },
    {
        name: 'useScoll',
        path: 'use-scroll',
        type: 'hook',
    },
    {
        name: 'useToggle',
        path: 'use-toggle',
        type: 'hook',
    },

    {
        name: 'formatWithSuffix',
        path: 'format-with-suffix',
        type: 'utitlity',
    },
    {
        name: 'If',
        type: 'utitlity',
        path: 'if',
    },
    {
        name: 'Show',
        type: 'utitlity',
        path: 'Show',
    },
]

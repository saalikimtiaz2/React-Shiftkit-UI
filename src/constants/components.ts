type codeType = {
    title: string
    code: string
}

type componentTypes = {
    name: string
    path: string
    type: string
    code: codeType[] | []
}[]

export type { componentTypes }

export const componentList: componentTypes = [
    {
        name: 'Button',
        path: 'button',
        type: 'component',
        code: [
            {
                title: 'Default `Button`',
                code: `import { Button } from react-shiftkit;

function Example() {
    return (
       <Button size="md" variant="primary">
             Save
        </Button>
    )
}`,
            },
            {
                title: '`Disabling` the Button',
                code: `import { Button } from react-shiftkit;

function Example() {
    return (
       <Button size="md" disabled variant="secondary">
             Save
        </Button>
    )
}`,
            },
            {
                title: 'Adding `Loading` the Button',
                code: `import { Button } from react-shiftkit;

function Example() {
    return (
       <Button size="md" isLoading variant="danger">
             Save
        </Button>
    )
}`,
            },
            {
                title: 'Adding `Roundness` the Button',
                code: `import { Button } from react-shiftkit;

function Example() {
    return (
       <Button size="md" roundess="lg" variant="success">
             Save
        </Button>
    )
}`,
            },
        ],
    },
    {
        name: 'Drawer',
        type: 'component',
        path: 'drawer',
        code: [],
    },
    {
        name: 'Input',
        path: 'input',
        type: 'component',
        code: [],
    },
    {
        name: 'Password Input',
        path: 'password-input',
        type: 'component',
        code: [],
    },
    {
        name: 'Text Area',
        path: 'text-area',
        type: 'component',
        code: [],
    },

    {
        name: 'useDarkSide',
        path: 'use-dark-side',
        type: 'hook',
        code: [],
    },
    {
        name: 'useDebounce',
        path: 'use-debounce',
        type: 'hook',
        code: [],
    },
    {
        name: 'useLocalStorage',
        path: 'use-local-storage',
        type: 'hook',
        code: [],
    },
    {
        name: 'useScoll',
        path: 'use-scroll',
        type: 'hook',
        code: [],
    },
    {
        name: 'useToggle',
        path: 'use-toggle',
        type: 'hook',
        code: [],
    },

    {
        name: 'formatWithSuffix',
        path: 'format-with-suffix',
        type: 'utitlity',
        code: [],
    },
    {
        name: 'If',
        type: 'utitlity',
        path: 'if',
        code: [],
    },
    {
        name: 'Show',
        type: 'utitlity',
        path: 'Show',
        code: [],
    },
]

import CodeSnippit from 'components/CodeSnippit'
import DocLayout from 'components/DocsLayout'
import React from 'react'
import { H1, H6 } from 'shiftkit-components/Typography'

const Documentation: React.FC = () => {
    return (
        <DocLayout>
            <H1>Getting Started!</H1>
            <p className="mb-4">To get started, install ShiftKit via npm:</p>
            <H6 className="mb-2">npm</H6>
            <CodeSnippit code="npm install react-shiftkit" />
            <H6 className="my-2">yarn</H6>
            <CodeSnippit code="yarn add react-shiftkit" />
            <H6 className="my-2">pnpm</H6>
            <CodeSnippit code="pnpm install react-shiftkit" />

            <p className="mb-2 mt-8">
                & then add css file to import basic styles.
            </p>
            <CodeSnippit
                code={`import "react-shiftkit/lib/styles/global.css";`}
            />
        </DocLayout>
    )
}

export default Documentation

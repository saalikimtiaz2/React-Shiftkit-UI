import CodeSnippit from 'components/CodeSnippit'
import DocLayout from 'components/DocsLayout'
import { componentList } from 'constants/components'
import React from 'react'
import { useParams } from 'react-router-dom'
import { H1, H3, H6 } from 'shiftkit-components/Typography'

const Documentation: React.FC = () => {
    const { slug } = useParams()
    const index = componentList.findIndex((component) => {
        return component.path === slug
    })

    if (index === -1) {
        return <span>Invalid Item</span>
    }

    const currItem = componentList[index]
    return (
        <DocLayout>
            <H1>{slug?.replace(/-/g, ' ').toUpperCase()}</H1>
            <p className="max-w-[85ch] mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptatibus ea beatae veritatis reiciendis qui amet
                non, neque ipsam eos dolorum aperiam quidem, voluptates
                doloremque ullam magnam. Nostrum, doloremque maiores.
            </p>
            <H3 className="mt-4">Installation</H3>
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

            <H3 className="mt-8">Basic example</H3>
            <p className="my-2">
                To use {currItem.name} {currItem.type}, import:
            </p>
            <CodeSnippit
                code={`import { ${currItem.name.replace(' ', '')} } from react-shiftkit;`}
            />
            {Array.isArray(currItem.code) &&
                currItem.code.map((code, index) => {
                    return (
                        <div key={index}>
                            <p className="my-2">{code.title}</p>
                            <CodeSnippit code={code.code} />
                        </div>
                    )
                })}
        </DocLayout>
    )
}

export default Documentation

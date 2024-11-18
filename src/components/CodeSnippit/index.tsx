import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

type CodeSnippitTypes = {
    code: string
}

const CodeSnippit: React.FC<CodeSnippitTypes> = ({ code }) => {
    return (
        <div>
            <CopyBlock text={code} language="js" theme={dracula} />
        </div>
    )
}

export default CodeSnippit

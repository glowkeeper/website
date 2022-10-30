import React, { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Content = (props) => {
    const [markdown, setMarkdown] = useState("");

    const { content, id } = props
    
    useEffect(() => {
        fetch(content)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, [content]);

    return (
        <div
            id={`${id}-md`}
        >
            <ReactMarkdown 
                children={markdown}
                remarkPlugins={[remarkGfm]}
            />
        </div>
    );
}

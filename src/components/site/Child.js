import React, { useEffect, useState } from "react";

import { Header } from '../layout/Header'

import ReactMarkdown from 'react-markdown'

export const Child = (props) => {
    const [markdown, setMarkdown] = useState("");

    const { content, id } = props

    useEffect(() => {
    fetch(content)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [content]);

    return (
        <>
        <Header />
        <main>
            <div
                id={`${id}-md`}
            >
                <ReactMarkdown 
                    children={markdown}
                />
            </div>
        </main>
        </>
    );
}

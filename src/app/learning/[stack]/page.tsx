'use client';

import stacks from "@/data/stacks.json";
import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import {useEffect, useState} from "react";
import Message from "@/components/Message";


export default async function Page({params}: { params: { stack: string } }) {
    const [messages, setMessages] = useState<any[]>([]);
    const [prompt, setPrompt] = useState<string>("");
    useEffect(() => {
        setMessages(prev => {
            return [...prev, {
                text: prompt,
                avatar: avatar,
                author: "human",
                id: new Date().toISOString()
            }]
        })
        console.log(messages);
    }, [prompt])
    const res = await getProps(params);
    const stack = res.props.stack;

    const avatar = 'https://thrangra.sirv.com/Avatar2.png';

    const onSubmit = (promptInput: string) => {
        if (promptInput.trim().length === 0) {
            return;
        }
        setPrompt(promptInput);
    }


    return (
        <main className="h-full pt-10 max-w-5xl mx-auto">
            <div className="flex flex-col">
                <Header logo={stack.logo} name={stack.name} info={stack.info}></Header>
            </div>
            <hr className="my-4 text-white"/>
            <div className="chat flex flex-col h-96 overflow-scroll">
                {messages.map((message, i) =>
                    <Message avatar={message.avatar} text={message.text} key={message.id} idx={i}
                             author={message.author}></Message>
                )}
            </div>
            <div className="p-4 flex">
                <Prompt onSubmit={onSubmit}></Prompt>
            </div>

        </main>
    )
}

// @ts-ignore
export async function getProps(params: { stack: string }) {
    return {
        props: {
            // @ts-ignore
            stack: stacks[params.stack],
            stackKey: params.stack
        }
    }
}
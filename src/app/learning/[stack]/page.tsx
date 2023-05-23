'use client';

import stacks from "@/data/stacks.json";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Prompt from "@/components/Prompt";


export default async function Page({params}: { params: { stack: string } }) {
    const res = await getProps(params);
    const stack = res.props.stack;
    const stackKey = res.props.stackKey;
    const avatar = 'https://thrangra.sirv.com/Avatar2.png';
    const onSubmit = (prompt: string) => {
        if (prompt.trim().length === 0) {
            return;
        }
        alert(prompt);
    }
    return (
        <main className="h-full pt-10 max-w-5xl mx-auto">
            <div className="flex flex-col">
                <Header logo={stack.logo} name={stack.name} info={stack.info}></Header>
            </div>
            <hr className="my-4 text-white"/>
            <div className="chat flex flex-col h-96 overflow-scroll">
                <Message idx={0} avatar={avatar} text="What is react js ?"></Message>
                <Message idx={1} avatar="/logo-open-ai.png" text="UI library"></Message>
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
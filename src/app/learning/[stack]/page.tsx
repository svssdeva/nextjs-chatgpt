'use client';

import stacks from "../../../data/stacks.json";
import {usePathname} from "next/navigation";


export default async function Page({params}: { params: { stack: string } }) {
    const pathname = usePathname();
    const res = await getProps({params: params});

    return (
        <main>
            <div className="bg-amber-400">
                Hello {res.props.stack.name}
            </div>
            <div>
                {JSON.stringify(res.props)}
            </div>
        </main>
    )
}

export async function getPaths() {
    const paths = Object.keys(stacks).map((key) => ({params: {stack: key}}));
    return {
        paths
    }

}

// @ts-ignore
export async function getProps({params}) {
    return {
        props: {
            // @ts-ignore
            stack: stacks[params.stack],
            stackKey: params.stack
        }
    }
}
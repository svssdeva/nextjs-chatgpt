import stacks from "../data/stacks.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const renderStacks = () => {
        return Object.keys(stacks).map((key) => {
            // @ts-ignore
            const stack: any = stacks[key];
            return (
                <Link key={stack.href} href={stack.href}
                      className={`w-20 h-20 relative border-2 border-solid m-2 rounded-xl ${stack.hoverClass} `}>
                    <Image fill src={stack.logo} alt={stack.name} className="object-cover p-2">
                    </Image>
                </Link>
            )
        })
    }
    return (
        <main>
            <div className="h-full flex justify-center items-center flex-col">
                <div>What do you want to learn?</div>
                <div className="flex">
                    Hello I am Chat GPT
                </div>
                <div className="flex">
                    {renderStacks()}
                </div>
            </div>
        </main>
    )
}
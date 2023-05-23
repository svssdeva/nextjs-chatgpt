import Image from "next/image";

export default function Message(props: any) {
    const bgColor = props.idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-700';
    const textColor = props.idx % 2 === 0 ? 'text-black' : 'text-white';
    let {avatar, text} = props;
    return (
        <div className={`flex flex-row bg-slate-100 p-4 ${bgColor}`}>
            <div className="w-[30px] relative mr-4">
                <Image src={avatar} width={30} height={30} alt="chat-gpt"></Image>
            </div>
            <div className={`w-full ${textColor}`}>
                {text}
            </div>
        </div>
    )
}
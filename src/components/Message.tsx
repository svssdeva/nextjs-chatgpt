import Image from "next/image";
import {Component} from "react";

export default class Message extends Component<{ avatar: string, text: string, idx: number }> {
    bgColor = this.props.idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-700';
    textColor = this.props.idx % 2 === 0 ? 'text-black' : 'text-white';

    render() {
        let {avatar, text} = this.props;
        return (
            <div className={`flex flex-row bg-slate-100 p-4 ${this.bgColor}`}>
                <div className="w-[30px] relative mr-4">
                    <Image src={avatar} width={30} height={30} alt="chat-gpt"></Image>
                </div>
                <div className={`w-full ${this.textColor}`}>
                    {text}
                </div>
            </div>
        )
    }
}
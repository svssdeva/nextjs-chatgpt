import Image from "next/image";
import {Component} from "react";

export default class Header extends Component<{ logo: string, name: string, info: string }> {
    render() {
        let {logo, name, info} = this.props;
        return (
            <div className="header flex bg-slate-200 p-4 rounded-2xl">
                <div className="flex mr-4 justify-center items-center">
                    <Image src={logo} alt={name} width={200} height={200}></Image>
                </div>
                <div className="flex text-black">
                    {info}
                </div>
            </div>
        )
    }
}
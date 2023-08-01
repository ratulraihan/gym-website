import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { TbPlus } from "react-icons/tb";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-20 max-w-screen-xl mx-auto">
                <Logo />
                <Navigation />
                <div className="flex items-center">
                    <IoSearchOutline className="text-2xl text-white " />
                    <IoBagHandleOutline className="ml-4 text-2xl text-white" />
                    <a href="#" className="flex items-center p-1 pr-6 ml-8 font-medium text-white uppercase border rounded-md gap-x-4 border-lime-400">
                        <span className="inline-flex items-center justify-center p-2 text-xl text-black rounded bg-lime-400">
                            <TbPlus />
                        </span>
                        Join Class Now
                    </a>
                </div>
            </div>
        </header>
    );
}

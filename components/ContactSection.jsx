import { TbArrowNarrowRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="items-center py-24 text-center bg-lime-400">
            <h2 className="pb-4 text-5xl font-bold">Need a Fitness Consultant?</h2>
            <p className="pt-2 pb-10 text-4xl font-bold text-black">Call : +130-4044888</p>
            <button className="relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden font-bold transition-all bg-gray-900 rounded-md shadow-2xl text-lime-400 before:ease before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-52">
                <span relative="relative z-10">BOOK NOW</span>
                <TbArrowNarrowRight className="text-2xl" />
            </button>

        </div>
    )
}
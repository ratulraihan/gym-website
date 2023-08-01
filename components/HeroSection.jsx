import { TbArrowNarrowRight } from "react-icons/tb";
import Container from "./Container";

export default function HeroSection() {
    return (
        <section className=" flex flex-col text-white items-center justify-center h-screen bg-[url('/img/1082421.jpg')] bg-no-repeat bg-initialcode ">
            <Container>
                <div className="w-2/3 pl-6">
                    <p className="pb-12 font-extrabold text-7xl">
                        BUILD YOUR BODY INTO A <span className="text-lime-400">HEALTHY</span> AND <span className="text-lime-400">STRONG </span> BODY
                    </p>
                    <button className="relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden font-bold transition-all border-2 border-current rounded-md shadow-2xl before:ease text-lime-400 before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-52">
                        <span relative="relative z-10">BOOK NOW</span>
                        <TbArrowNarrowRight className="text-2xl" />
                    </button>
                </div>
            </Container>
        </section>
    );
}

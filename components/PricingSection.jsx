import { TbCircle } from "react-icons/tb";
import Container from "./Container";


export default function PricingSection() {
    return (
        <section className="text-lg text-center text-black bg-lime-400">
            <Container>
                <div className="flex flex-col items-center justify-center pb-20 mx-auto">
                    <h1 className="text-4xl font-bold text-center">
                        The Best Way to Learn
                        <br /> Programming Online
                    </h1>
                    <p className="mt-5 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, voluptatum.
                    </p>
                    <button className="px-10 py-3 mt-10 text-black bg-white rounded-full">
                        Join Class Now
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className="px-12 py-16 border-2 border-black">
                        <h2 className="text-3xl font-bold ">BASIC PLAN</h2>
                        <p className="mt-5 text-center">For Small Team Just Getting Started</p>
                        <p className="mt-8 text-4xl font-bold ">$29 <span className="text-base">/month</span></p>
                        <ul className="mt-5 text-center space-y-3 py-7 [&_li]:flex [&_li]:items-center [&_li]:gap-x-4 ">
                            <li><TbCircle className="stroke-[4]" /> Unlimited Access To The Gym</li>
                            <li><TbCircle className="stroke-[4]" />Free Dringink Package</li>
                            <li><TbCircle className="stroke-[4]" />1 Month Trainer</li>
                            <li><TbCircle className="stroke-[4]" />Free Yoga Class</li>
                            <li><TbCircle className="stroke-[4]" />30 Days Money Back</li>
                            <li><TbCircle className="stroke-[4]" />20 Sessions Free Massage</li>
                        </ul>
                        <button className="px-10 py-3 mt-10 text-base font-bold bg-black rounded-md text-lime-400">PURCHASE PLAN</button>
                    </div>
                    <div className="px-12 py-16 border-2 border-black">
                        <h2 className="text-3xl font-bold ">BUSINESS PLAN</h2>
                        <p className="mt-5 text-center">For Small Team Just Getting Started</p>
                        <p className="mt-8 text-4xl font-bold">$49 <span className="text-base">/month</span></p>
                        <ul className="mt-5 text-center space-y-3 py-7 [&_li]:flex [&_li]:items-center [&_li]:gap-x-4 ">
                            <li><TbCircle className="stroke-[4]" /> Unlimited Access To The Gym</li>
                            <li><TbCircle className="stroke-[4]" />Free Dringink Package</li>
                            <li><TbCircle className="stroke-[4]" />5 month Personal Trainer</li>
                            <li><TbCircle className="stroke-[4]" />6 Month Membership</li>
                            <li><TbCircle className="stroke-[4]" />Visit TO The Bath Complex</li>
                            <li><TbCircle className="stroke-[4]" />30 Sessions Free Massage</li>
                        </ul>
                        <button className="px-10 py-3 mt-10 text-base font-bold bg-black rounded-md text-lime-400">PURCHASE PLAN</button>
                    </div>
                    <div className="px-12 py-16 border-2 border-black">
                        <h2 className="text-3xl font-bold ">STANDARD PLAN</h2>
                        <p className="mt-5 text-center">For Small Team Just Getting Started</p>
                        <p className="mt-8 text-4xl font-bold">$39 <span className="text-base">/month</span></p>
                        <ul className="mt-5 text-center space-y-3 py-7 [&_li]:flex [&_li]:items-center [&_li]:gap-x-4 ">
                            <li><TbCircle className="stroke-[4]" /> Unlimited Access To The Gym</li>
                            <li><TbCircle className="stroke-[4]" />Free Dringink Package</li>
                            <li><TbCircle className="stroke-[4]" />3 month Personal Trainer</li>
                            <li><TbCircle className="stroke-[4]" />3 Month Membership</li>
                            <li><TbCircle className="stroke-[4]" />Visit TO The Bath Complex</li>
                            <li><TbCircle className="stroke-[4]" />20 Sessions Free Massage</li>
                        </ul>
                        <button className="px-10 py-3 mt-10 text-base font-bold bg-black rounded-md text-lime-400">PURCHASE PLAN</button>
                    </div>

                </div>
            </Container>

        </section>
    );
}
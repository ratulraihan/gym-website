import Image from "next/image";
import Container from "./Container";

export default function FrontAbout() {
    return (
        <Container>
            <div className="grid grid-cols-2 my-24 gap-x-16">
                <div className="flex justify-between gap-6 -skew-y-12">
                    <img className="object-fill w-1/2 rounded-md" src="/img/front-2.jpg" alt="hero" />
                    <img className="object-fill w-1/2 rounded-md" src="/img/front-1.jpeg" alt="hero" />
                </div>
                <div className="space-y-6 mb-28">
                    <p className="pl-4 text-2xl font-bold border-l-4 border-current text-lime-400">About Us</p>
                    <h2 className="text-4xl font-bold">We are Here <span className="text-lime-400">To Dream!</span>
                        <br /> Our Team Surve You.</h2>
                    <p className="text-gray-400 ">
                        Assaertive and results-driven individual with a proven track record of exceeding goals and expectations.
                    </p>
                    <blockquote className="px-8 py-6 text-xl font-bold tracking-wide bg-gray-100 rounded-xl">
                        Push Harder Than Yesterday If You Want A Different Tomorrow.
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 rounded-full" src="/img/profile.jpg" alt="hero" />
                            <div className="flex flex-col">
                                <h3 className="font-bold">Ratul Raihan</h3>
                                <p className="text-sm text-gray-600">CEO & Founder</p>
                            </div>
                        </div>
                        <div>
                            <button className="py-3 font-bold rounded-full bg-lime-400 px-7">WHAT DO WE DO</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}

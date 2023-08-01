import { IoWalkSharp } from "react-icons/io5";
import Container from "./Container";

export default function IntroSection() {
    return (
        <Container>
            <section className="grid grid-cols-2 my-24 gap-x-16">
                <div className="flex justify-between gap-6">
                    <img className="object-fill w-1/2 -skew-y-12 rounded-md" src="/img/class2.jpg" alt="" />
                    <img className="object-fill w-1/2 -skew-y-12 rounded-md" src="/img/class3.jpg" alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="pl-4 text-xl font-bold border-l-4 border-current text-lime-400">Why Chosse Us</h3>
                    <h2 className="py-4 text-4xl font-bold">Make YourSelf Stronger <br /> Then Your Best Excuses</h2>
                    <div className="flex justify-between p-4">
                        <div className="relative rounded bg-lime-200/70 w-28">
                            <div className="absolute flex items-center justify-center rounded top-3 left-3 -bottom-3 -right-3 bg-lime-300 rounded-br-2xl">
                                <IoWalkSharp className="text-4xl" />
                            </div>
                        </div>
                        <div className="pl-8">
                            <h3 className="text-xl font-bold">Cardio Exercise</h3>
                            <p className="text-gray-400">Sultan and results-driven individual with a proven track record of exceeding goals and expectations.</p>
                        </div>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="relative rounded bg-lime-200/70 w-28">
                            <div className="absolute flex items-center justify-center rounded top-3 left-3 -bottom-3 -right-3 bg-lime-300 rounded-br-2xl">
                                <IoWalkSharp className="text-4xl" />
                            </div>
                        </div>
                        <div className="pl-8">
                            <h3 className="text-xl font-bold">Cardio Exercise</h3>
                            <p className="text-gray-400">Sultan and results-driven individual with a proven track record of exceeding goals and expectations.</p>
                        </div>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="relative rounded bg-lime-200/70 w-28">
                            <div className="absolute flex items-center justify-center rounded top-3 left-3 -bottom-3 -right-3 bg-lime-300 rounded-br-2xl">
                                <IoWalkSharp className="text-4xl" />
                            </div>
                        </div>
                        <div className="pl-8">
                            <h3 className="text-xl font-bold">Cardio Exercise</h3>
                            <p className="text-gray-400">Sultan and results-driven individual with a proven track record of exceeding goals and expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container >
    )
}
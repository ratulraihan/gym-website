
import { TbArrowNarrowRight } from "react-icons/tb";
import Container from "./Container";
export default function NewsSection() {
    return (
        <div className="p-20 text-center bg-gray-900">
            <p className="py-6 text-xl font-bold text-white">OUR BLOG & ARTICAL</p>
            <h2 className="pb-8 text-5xl font-bold text-lime-400">LATEST NEWS POSTS</h2>
            <Container>
                <div className="grid grid-cols-3 gap-12 ">
                    <div className="">
                        <div>
                            <img src="/img/news.jpg" alt="" />
                        </div>
                        <div className="p-10 text-left bg-lime-400">
                            <h2 className="pb-4 text-xl font-bold ">Going to The gym for the first time</h2>
                            <p className="pb-6">praesent id DigiMax pellentesque, elit eget gravida cum
                                sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                            </p>
                            <button className="flex justify-between gap-4 px-4 py-2 bg-black rounded-md text-lime-400"><span className="font-bold">Read More</span> <span className="pt-1 "><TbArrowNarrowRight /> </span></button>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <img src="/img/news.jpg" alt="" />
                        </div>
                        <div className="p-10 text-left bg-lime-400">
                            <h2 className="pb-4 text-xl font-bold ">Going to The gym for the first time</h2>
                            <p className="pb-6">praesent id DigiMax pellentesque, elit eget gravida cum
                                sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                            </p>
                            <button className="flex justify-between gap-4 px-4 py-2 bg-black rounded-md text-lime-400"><span className="font-bold">Read More</span> <span className="pt-1 "><TbArrowNarrowRight /> </span></button>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <img src="/img/news.jpg" alt="" />
                        </div>
                        <div className="p-10 text-left bg-lime-400">
                            <h2 className="pb-4 text-xl font-bold ">Going to The gym for the first time</h2>
                            <p className="pb-6">praesent id DigiMax pellentesque, elit eget gravida cum
                                sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                            </p>
                            <button className="inline-flex gap-4 px-4 py-2 bg-black rounded-md text-lime-400">
                                <span className="font-bold">Read More</span> <span className="pt-1 "><TbArrowNarrowRight /> </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
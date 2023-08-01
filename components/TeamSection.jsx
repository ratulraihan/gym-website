
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";
import Container from "./Container";

export default function TeamSection() {
    return (

        <div className="block pb-20 text-center bg-gray-900">
            <Container>
                <p className="pb-6 text-xl text-white">MEET OUT TEAM</p>
                <h2 className="text-5xl font-bold pb-14 text-lime-400">EXPERT TRAINER</h2>
                <div className="grid grid-cols-3 gap-12">

                    <div className="relative ">
                        <img className="rounded-md " src="/img/trainerpro3.jpg" alt="" />
                        <div className="absolute p-8 -skew-y-12 -bottom-16 inset-x-16 h-52 bg-lime-400">
                            <div className="skew-y-12">
                                <h3 className="text-2xl font-bold">Devid Jon</h3>
                                <p className="fon">Pro trainer</p>
                                <div className="flex justify-center gap-2 py-4 ">
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandFacebook className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandInstagram className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandLinkedin className="text-2xl" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className="rounded-md " src="/img/trainer2.jpg" alt="" />
                        <div className="absolute p-8 -skew-y-12 -bottom-16 inset-x-16 h-52 bg-lime-400">
                            <div className="skew-y-12">
                                <h3 className="text-2xl font-bold">Devid Jon</h3>
                                <p className="fon">Pro trainer</p>
                                <div className="flex justify-center gap-2 py-4 ">
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandFacebook className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandInstagram className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandLinkedin className="text-2xl" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">
                        <img className="rounded-md " src="/img/trainer5.jpg" alt="" />
                        <div className="absolute p-8 -skew-y-12 -bottom-16 inset-x-16 h-52 bg-lime-400">
                            <div className="skew-y-12">
                                <h3 className="text-2xl font-bold">Devid Jon</h3>
                                <p className="fon">Pro trainer</p>
                                <div className="flex justify-center gap-2 py-4 ">
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandFacebook className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandInstagram className="text-2xl" /></a>
                                    <a className="p-2 border border-black rounded-md" href=""><TbBrandLinkedin className="text-2xl" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>




    )
}
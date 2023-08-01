import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function ClassCard({ title, image }) {
    return (
        <div className="overflow-hidden rounded-md">
            <img src={image} alt={title} className="" />
            <a className="flex items-center justify-between p-5 text-2xl font-bold text-black rounded-none bg-lime-400 hover:text-white" href="">
                <span>{title}</span>
                <span className="pl-10 text-3xl">
                    <IoArrowForwardCircleSharp className="" />
                </span>
            </a>
        </div>
    )
}
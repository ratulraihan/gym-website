import Image from "next/image";
import UiUx from "../public/ui-ux.svg";

export default function Service() {
  return (
    <section className="grid grid-cols-3 gap-4 p-6">
      <div className=" text-black items-center justify-center bg-red-200 ">
        <Image priority src={UiUx} alt="Follow us on Twitter" />
        <h1 className="text-6xl font-bold">Next.js Tailwind Starter</h1>
        <p className="mt-4 text-xl">
          A Next.js starter template with Tailwind CSS
        </p>
      </div>
      <div className=" text-black items-center justify-center bg-red-200 ">
        <Image priority src={UiUx} alt="Follow us on Twitter" />
        <h1 className="text-6xl font-bold">Next.js Tailwind Starter</h1>
        <p className="mt-4 text-xl">
          A Next.js starter template with Tailwind CSS
        </p>
      </div>
      <div className=" text-black items-center justify-center bg-red-200 ">
        <Image priority src={UiUx} alt="Follow us on Twitter" />
        <h1 className="text-6xl font-bold">Next.js Tailwind Starter</h1>
        <p className="mt-4 text-xl">
          A Next.js starter template with Tailwind CSS
        </p>
      </div>
      <div className=" text-black items-center justify-center bg-red-200 ">
        <Image priority src={UiUx} alt="Follow us on Twitter" />
        <h1 className="text-6xl font-bold">Next.js Tailwind Starter</h1>
        <p className="mt-4 text-xl">
          A Next.js starter template with Tailwind CSS
        </p>
      </div>
    </section>
  );
}

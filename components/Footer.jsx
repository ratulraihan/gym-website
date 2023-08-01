import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <Container>

        <footer className="grid grid-cols-4 gap-4 text-white bg-gray-900 bg">


          <div className="items-center justify-center w-3/4">
            <h1 className="pb-12 text-2xl font-bold">About Us</h1>
            <p className="pb-2">
              Intrinsicly evisculate emerging cutting edge scenarios redefine
              future-proof e-markets demand line
            </p>
            <address className="py-2">81 Kazi Road,DigiMax Complex</address>
            <p className="py-2">Phone: +880 1711 111 111</p>
            <p className="py-2">Email:info@digimax.com</p>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-12 text-2xl font-bold">Our Classes</h3>
            <Link className="py-2 hover:underline" href="/">Fitness Classes</Link>
            <Link className="py-2 hover:underline" href="/about">Aerobic Classes</Link>
            <Link className="py-2 hover:underline" href="/team">Cardio Classes</Link>
            <Link className="py-2 hover:underline" href="/team">Zumba Classes</Link>
            <Link className="py-2 hover:underline" href="/team">Power Yoga</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-12 text-2xl font-bold">Working Hours</h3>
            <p className="py-2">Monday - Friday: <br /> 6am - 10pm</p>
            <p className="py-2">Saturday: <br /> 8am - 10pm</p>
            <p className="py-2">Sunday: Close</p>

          </div>


          <div className="flex flex-col">
            <h3 className="pb-12 text-2xl font-bold">Gallery</h3>
            <div className="grid grid-cols-3 gap-2 ">
              <img className="rounded-md" src="/img/gallery1.jpg" alt="" />
              <img className="rounded-md" src="/img/gallery2.jpg" alt="" />
              <img className="rounded-md" src="/img/gallery3.jpg" alt="" />
              <img className="rounded-md" src="/img/gallery4.jpeg" alt="" />
              <img className="rounded-md" src="/img/gallery5.jpeg" alt="" />
              <img className="rounded-md" src="/img/gallery6.jpg" alt="" />

            </div>
          </div>


        </footer>
      </Container>
    </div>
  );
}

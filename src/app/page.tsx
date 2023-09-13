import ImageCarousel from "@/components/ImageCarousel"
import Navbar from "@/components/Navbar"
import Petise from "@/components/Petise"
import Slides from "@/components/Slides"
import EventCard from "@/components/EventCard"
import Footer from "@/components/Footer"
import Us from "@/components/Us"
import Link from "next/link"

export default function Home() {
  return (
    <main className="text-white container mx-auto px-14">
      <Navbar />
      <p className="w-9/12 pt-20 text-3xl leading-relaxed">
        Utilising <span className="font-semibold">powerful technology</span> and <span className="font-semibold">cutting-edge marketing</span> to
        evolve your projects.
        We work with specific people that suite <span className="text-green-300 underline underline-offset-4">our mission</span> providing
        what we do best to enhance your brand, business or infrastructure...</p>
      <Petise />
      <Slides />
      <div className="flex items-center justify-center pb-24">
        <button className="btn btn-outline btn-info pr-10 pl-10">
          <Link href={"/contact"}>Contact us ➜</Link>
        </button>
      </div>
      <h1 className="text-3xl pb-4">Mission</h1>
      <p className="w-9/12">Utilising <span className="font-semibold">powerful technology</span> and <span className="font-semibold">cutting-edge marketing</span> to
        evolve your projects.
        We work with specific people that suite <span className="text-blue-300 underline underline-offset-4">our mission</span> providing
        what we do best to enhance your brand, business or infrastructure...</p>
      <Us />
      <EventCard />
      <ImageCarousel />
      <Footer />
    </main>
  )
}

import ImageCarousel from "@/components/ImageCarousel"
import Navbar from "@/components/Navbar"
import Petise from "@/components/Petise"
import Slides from "@/components/Slides"
import EventCard from "@/components/EventCard"
import Footer from "@/components/Footer"
import Us from "@/components/Us"

export default function Home() {
  return (
    <main className="text-white container mx-auto px-14">
      <Navbar />
      <p className="w-9/12 pt-20 text-3xl leading-relaxed">
        Utilising <span className="font-semibold">powerful technology</span> and <span className="font-semibold">cutting-edge marketing</span> to
        evolve your projects.
        We work with specific people that suite <span className="text-blue-300 underline underline-offset-4">our mission</span> providing
        what we do best to enhance your brand, business or infrastructure...</p>
      <Petise />
      <Slides />
      <div className="flex items-center justify-center pb-24">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Contact us ➜
          </span>
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

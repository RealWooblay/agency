import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Origins() {
    return (
        <div className="text-white container mx-auto px-14">
            <Navbar />
            <div className="pt-24">
                <h1 className="text-2xl text-sky-200">Abstract</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

            </div>
            <div className="pt-14 pb-14">
                <h1 className="text-2xl text-violet-200">Mission</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>

            <h2 className="pb-7 text-xl">2023</h2>
            <div className="grid-cols-3 justify-between flex gap-10">
                <img className="h-auto  w-1/3 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                <img className="h-auto  w-1/3 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                <img className="h-auto  w-1/3 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            </div>

            <h1 className='text-2xl pt-14 pb-24'>Coming soon...</h1>
            <Footer />
        </div>
    )
}
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function expertise() {
    return (
        <div className='text-white container mx-auto px-14'>
            <Navbar />
            <div className="grid-cols-2 mt-10 flex items-center gap-10 jusitfy-between">
                <div className='w-2/3'>
                    <h1 className='text-2xl pb-5'>Marketing</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
                <div className='w-1/3'>
                    <h1 className='pb-10 font-bold'>
                        Insight into strategies and tactics
                    </h1>
                    <Link className="underline text-sky-200" href={''}>Download pdf</Link>
                </div>
            </div>

            <div className="mt-10 flex items-center grid-cols-2 gap-10 jusitfy-between">
                <div className='w-2/3'>
                    <h1 className='text-2xl pb-5'>Technology</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
                <div className='w-1/3'>
                    <h1 className='pb-10 font-bold'>
                        Insight into strategies and tactics
                    </h1>
                    <Link href={''} className="underline text-sky-200">Download pdf</Link>
                </div>
            </div>

            <div className="flex items-center justify-center pb-24 pt-14">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Contact us ➜
                    </span>
                </button>
            </div>
            <Footer />
        </div>
    )
}
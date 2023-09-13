import Link from 'next/link'

export default function EventCard() {
    return (
        <div className="flex grid-cols-2 w-full justify-between pt-16 gap-10">
            <div className="w-3/4">
                <h1 className="text-3xl pb-4">Technology convention</h1>
                <p>PUT WAITLIST FORM HERE AND INFO ABOUT WHAT WILL BE = EMAIL COLLECTION This is infomation about the current event such as what, who and how obviously where as well, i need to write more information
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <button className="btn btn-outline btn-info pr-10 pl-10 mt-10 mr-5">
                    Get tickets ➜
                </button>
                <button className="btn btn-outline btn-info pr-10 pl-10">
                    <Link href={"/contact"}>Get involved ➜</Link>
                </button>
            </div>
            <div>
                <img className="h-auto w-3/4 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
            </div>
        </div>
    )
}

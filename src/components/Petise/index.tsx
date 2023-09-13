

export default function Petise() {
    return (
        <div className="flex grid-cols-2 w-full justify-between pt-64 gap-10">
            <div className="text-white w-1/2">
                <h1 className="text-3xl pb-3">Marketing</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum</p>

                <h1 className="text-3xl pt-16 pb-3">Technology</h1>
                <p className="pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum</p>
                <button className="btn btn-outline btn-info pr-10 pl-10">
                    Details ➜
                </button>
            </div>

            <div className="w-1/2">
                <a href="#" className="p-4 mb-10 flex flex-col items-center border-blue-400 bg-green-800 border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-900">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Glowing your name to brand your something with making up random words I need to add more words here so here are the extra words to make it bigger</p>
                    </div>
                </a>

                <a href="#" className="p-4 mb-10 flex flex-col items-center border-blue-400 bg-green-800 border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-900">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.feedough.com/wp-content/uploads/2016/08/what-is-brand.png" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brand</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Build your brand something and something else i dont know really what to write i hope this extends the words well obviously it will so well see again</p>
                    </div>
                </a>

                <a href="#" className="p-4 flex flex-col items-center border-blue-400 bg-green-800 border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-900">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.millertanner.com/wp-content/uploads/2022/05/shutterstock_758264113.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>

        </div>
    )
}
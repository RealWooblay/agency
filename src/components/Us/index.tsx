import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Us() {
    return (
        <div className="mt-10 flex items-center grid-cols-3 gap-10 jusitfy-between">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center"> {/* Center content */}
                    <img className="mb-5 w-10 h-10 rounded-full" src="https://blog.logrocket.com/wp-content/uploads/2023/01/import-svgs-next-js-app.png" alt="Rounded avatar" />
                    <a href="#">
                        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Jack Coleman</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Information about myself here, see what happens, talk about a brief overview of origin and expertise and desires, etc.</p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                        Personal Website
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center"> {/* Center content */}
                    <img className="mb-5 w-10 h-10 rounded-full" src="https://www.sterrific.com.my/blog/wp-content/uploads/2020/04/colour-spectrum.jpg" alt="Rounded avatar" />
                    <a href="#">
                        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Spencer Hamilton</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Information about Spencer here, see what happens, talk about a brief overview of origin and expertise and desires, etc.</p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                        Personal Website
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ul className="flex justify-center items-center gap-5 pt-5 group">
                    <li><a href="https://youtube.com"><FaLinkedinIn className="text-blue-500" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaYoutube className="text-red-500" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaFacebook className="text-blue-600" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaInstagram className="text-purple-500" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaTwitter className="text-blue-400" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaDiscord className="text-indigo-500" style={{ fontSize: '24px' }} /></a></li>
                    <li><a href="https://youtube.com"><FaTiktok className="text-pink-500" style={{ fontSize: '24px' }} /></a></li>
                </ul>

                <button className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Details ➜
                    </span>
                </button>
            </div>
        </div>
    );
}



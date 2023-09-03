import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="bg-transparent">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Contact</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Discord</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Platform</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Whitepaper</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Jack Coleman™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <ul className="flex justify-center items-center gap-5 pt-5 group">
                            <li><a href="https://youtube.com"><FaLinkedinIn className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaYoutube className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaFacebook className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaInstagram className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaTwitter className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaDiscord className="text-gray-400" /></a></li>
                            <li><a href="https://youtube.com"><FaTiktok className="text-gray-400" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
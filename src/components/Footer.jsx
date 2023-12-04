import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#ffc700]">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="uppercase font-bold title-font">The store</a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
                    <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-2xl hover:text-green-500 cursor-pointer"><FaWhatsapp /></a>
                    <a className="ml-3 text-2xl hover:text-blue-700 cursor-pointer"><FaFacebookF /></a>
                    <a className="ml-3 text-2xl hover:text-purple-700 cursor-pointer"><FaInstagram /></a>
                </span>
            </div>
        </footer>
    )
}

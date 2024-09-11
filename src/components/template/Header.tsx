import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
    return (
        <header className="header flex justify-between items-center bg-black border-gray-800 border-b p-2">
            <div className="flex items-center space-x-4 ml-2 hidden md:flex">
                <img src="https://www.gkos.dev/vscode_icon.svg" className="w-7 h-6" alt="logo" />
                <nav className="flex space-x-3 text-gray-300 text-sm">
                    <span>File</span>
                    <span>Edit</span>
                    <span>Select</span>
                    <span>View</span>
                    <span>Access</span>
                    <span>To Execute</span>
                    <span>Terminal</span>
                    <span>Help</span>
                </nav>
            </div>

            <div className="flex items-center flex-grow justify-center  text-gray-300 text-sm">
                <FaArrowLeft className="mx-2 hidden md:flex " size={16} />
                <FaArrowRight className="mx-2 text-gray-700 hidden md:flex" size={16} />
                <span className="text-gray-500 border-gray-700 border-2 rounded-full px-4 py-1 text-center mx-max-w-[500px] md:w-[200px]">
                    Winicius Neves - Portfolio
                </span>
            </div>

            <div className="flex space-x-2 mr-2 hidden md:flex">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
        </header>
    );
}

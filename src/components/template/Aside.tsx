import { VscAccount } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscFiles } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";

import { FaFolderOpen, FaHtml5, FaCss3, FaJsSquare, FaGithub, FaReact, FaFileCode } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";



export default function Nav() {
    return (
        <aside className="flex  ">
            <div className="hidden md:w-16 md:bg-gray-900 md:flex md:flex-col md:items-center md:py-4 md:space-y-6 md:border-gray-800 md:border-r md:float-left  ">
                <a href="/">
                    <VscFiles className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                </a>
                <a href="/contact">
                    <VscSearch className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                </a>
                <a href="/github">
                    <VscGithub className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                </a>
                <a href="/code">
                    <VscCode className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                </a>
                <div className="flex flex-col items-center space-y-6 absolute bottom-2 pb-2">
                    <a href="/curriculum">
                        <VscAccount className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                    </a>
                    <a href="/settings">
                        <VscSettingsGear className="w-6 h-6 text-gray-400 hover:text-sky-300" />
                    </a>
                </div>
            </div>
            <div className="w-64 bg-gray-900 hidden md:block">
                <h4 className="text-gray-100">Explorador</h4>
                <div className="h-1/7 border-gray-800 border-b">
                    <h5 className="text-gray-400">Open Editors</h5>
                    <div className="text-sm ml-2">
                        Home.html
                        <span className="text-gray-400">views/home.html</span>
                    </div>
                    <div className="text-sm ml-2">
                        Curriculum.css
                        <span className="text-gray-400">views/curriculum.css</span>
                    </div>
                    <div className="text-sm ml-2">
                        Projects.js
                        <span className="text-gray-400">views/projects.js</span>
                    </div>
                    <div className="text-sm ml-2">
                        GitHub.ts
                        <span className="text-gray-400">views/github.ts</span>
                    </div>
                    <div className="text-sm ml-2">
                        Contact.jsx
                        <span className="text-gray-400">views/contact.jsx</span>
                    </div>
                </div>

                <div className="w-full h-6/7 border-gray-800 border-b mt-5 text-sm ">
                    <h4 className="text-gray-100 ml-2">Portfolio</h4>
                    <div className="flex items-center space-x-2 mb-2 ml-4">
                        <FaFolderOpen className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">src</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-4">
                        <FaFolderOpen className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">public</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-4">
                        <FaFolderOpen className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">front</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6 ">
                        <FaHtml5 className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">Home.html</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaCss3 className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">Curriculum.css</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaJsSquare className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">Projects.js</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaGithub className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">GitHub.git</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaReact className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">Contact.jsx</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaJsSquare className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">app.js</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <LuFileJson className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">package.json</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 ml-6">
                        <FaJsSquare className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-300">router.js</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}




export default function Contact() {
    return (
        <div 
            className="flex items-center justify-end bg-no-repeat bg-center bg-cover h-full w-full p-8"
            style={{ backgroundImage: "url('https://wallpaperaccess.com/full/6604090.gif')", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "overlay" }}
        >
            <div className="bg-white bg-opacity-80 p-6 rounded-md shadow-lg w-full md:w-1/2">
                <h1 className="text-gray-900 text-4xl font-bold mb-4">Contact</h1>
                <p className="text-gray-800 text-lg mb-2">
                    If you have any questions, please don't hesitate to contact me.
                </p>
                <p className="text-gray-900 text-xl mb-4">- Social</p>

                <div className="flex flex-col space-y-2">
                    <p className="text-gray-800">
                        * Email: 
                        <a className="text-blue-500 hover:underline ml-2" href="mailto:winiciusneves2004@hotmail.com" target="_blank" rel="noopener noreferrer">
                            Winiciusneves2004@hotmail.com
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * GitHub: 
                        <a className="text-blue-500 hover:underline ml-2" href="https://github.com/WiniciusNeves" target="_blank" rel="noopener noreferrer">
                            https://github.com/WiniciusNeves
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * LinkedIn: 
                        <a className="text-blue-500 hover:underline ml-2" href="https://www.linkedin.com/in/winicius-neves-4b9257268/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/winicius-neves/
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * Linktree: 
                        <a className="text-blue-500 hover:underline ml-2" href="https://linktr.ee/winiciusneves" target="_blank" rel="noopener noreferrer">
                            https://linktr.ee/winiciusneves
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

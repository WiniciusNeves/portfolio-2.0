export default function Contact() {
    return (
        <div 
            className="flex items-center justify-center bg-no-repeat bg-center bg-cover h-full w-full p-4 sm:p-6 md:p-8"
            style={{ backgroundImage: "url('https://wallpaperaccess.com/full/6604090.gif')", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "overlay" }}
        >
            <div className="bg-white bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact</h1>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-4">
                    If you have any questions, please don't hesitate to contact me.
                </p>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl mb-4">- Social</p>

                <div className="flex flex-col space-y-4">
                    <p className="text-gray-800">
                        * Email: 
                        <a className="text-blue-500 hover:underline" href="mailto:winiciusneves2004@hotmail.com" target="_blank" rel="noopener noreferrer">
                            Winiciusneves2004@hotmail.com
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * GitHub: 
                        <a className="text-blue-500 hover:underline" href="https://github.com/WiniciusNeves" target="_blank" rel="noopener noreferrer">
                            github.com/WiniciusNeves
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * LinkedIn: 
                        <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/winicius-neves-4b9257268/" target="_blank" rel="noopener noreferrer">
                          linkedin.com/in/winicius-neves/
                        </a>
                    </p>
                    <p className="text-gray-800">
                        * Linktree: 
                        <a className="text-blue-500 hover:underline" href="https://linktr.ee/winiciusneves" target="_blank" rel="noopener noreferrer">
                            linktr.ee/winiciusneves
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image
                src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
                alt="404 Image"
                className=" "
            />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
            <Link href="/" legacyBehavior>
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Go back to Home
                </a>
            </Link>
        </div>
    );
};

export default Custom404;


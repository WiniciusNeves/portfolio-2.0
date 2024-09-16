import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 h-full w-full text-gray-300 p-6" style={{ maxHeight: '85vh' }}>
      <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=999999&repeat=false&lines=Winicius+Neves" alt="Loading" className="w-96 h-auto" />
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
        {/* Esconder a imagem no celular */}
        <div className="hidden lg:flex flex-col items-center space-y-2 w-1/4">
          <Image
            src="/img/profile.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-3xl hover:scale-105 duration-300 w-full"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img
            id="typing"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=21&duration=4500&pause=1000&color=5DBB9B&center=false&vCenter=true&repeat=false&random=false&width=435&lines=Majoring+in+Computer+Science"
            alt="Typing SVG"
            className="self-center lg:self-start mb-4 w-96 h-auto"
          />
          <h3 className="text-lg">Hard Skills:</h3>
          <div className="flex flex-col mt-2 space-y-2">
            <div>
              <span>Web Development</span>
              <span>JavaScript / TypeScript / Node.js</span>
              <span>React / Next.js</span>
            </div>
            <div>
              <span>Bot (Python)</span>
              <span>Java</span>
              <span>Git / GitHub</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg mt-3">Soft Skills:</h3>
            <div className="flex flex-col mt-2 space-y-2">
              <div>
                <span>Problem Solving</span>
                <span>Communication</span>
                <span>Teamwork</span>
              </div>
              <div>
                <span>Adaptability</span>
                <span>Self-Learning</span>
                <span>Self-Motivation</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center space-x-8">
            <Link href="/curriculum" passHref>
              <button className="border-gray-700 border-r border-b px-4 py-2 rounded-full hover:border-sky-300 hover:text-sky-300">
                Curriculum
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="border-gray-700 border-r border-b px-4 py-2 rounded-full hover:border-sky-300 hover:text-sky-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

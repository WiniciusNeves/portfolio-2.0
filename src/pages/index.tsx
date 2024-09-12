import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-950 h-full text-gray-300">
      <div className="flex flex-row items-center justify-center space-x-10">

        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center">
          <img className=" "
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=999999&multiline=true&repeat=false&random=false&width=435&height=50&lines=Winicius+Neves"
            alt="Typing SVG" />
          <Image src="/img/profile.jpg" alt="foto" width={150} height={150} className="rounded-full mb-4" />
        </div>

        {/* Majoring Info and Hard Skills */}
          <div className="flex flex-col items-center">
        <img id="typing"
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=21&duration=4500&pause=1000&color=5DBB9B&center=true&vCenter=true&repeat=false&random=false&width=435&lines=Majoring+in+Computer+Science"
          alt="Typing SVG" />
        <h3 className="text-lg mt-2">Hard Skills:</h3>
          <div className="flex flex-wrap justify-center mt-2 space-x-4">
            <span>Web Development</span>
            <span>JavaScript / TypeScript / Node.js</span>
            <span>React</span>
            <span>Bot (Python)</span>
            <span>Java</span>
            <span>Git / GitHub</span>
          </div>
        </div>
      </div>

      {/* Buttons for Curriculum and Contact Me */}
      <div className="flex space-x-10 mt-8">
        <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600">Curriculum</button>
        <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600">Contact Me</button>
      </div>
    </div>
  );
}

export default Home;

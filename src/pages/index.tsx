import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-950" style={{ height: '55rem', width: '100vw' }}>
      {/* Nome e foto do perfil */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-gray-300 mb-4">Winicius Neves</h1>
        <Image src="/img/profile.jpg" alt="foto" width={150} height={150} className="rounded-full" />
      </div>

      {/* Curso */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-lg text-teal-400">Majoring in Computer Science</h2>
      </div>

      {/* Hard Skills */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h3 className="text-md text-gray-200 mb-2">Hard Skills:</h3>
        <p className="text-gray-400 text-center">
          Web Development &nbsp; | &nbsp; JavaScript / TypeScript / Node.js &nbsp; | &nbsp; React <br />
          Bot (Python) &nbsp; | &nbsp; Java &nbsp; | &nbsp; Git / GitHub
        </p>
      </div>

      {/* Botões */}
      <div className="flex justify-around w-1/2 mt-8">
        <button className="border-2 border-gray-400 rounded-md py-2 px-4 text-gray-300 hover:bg-gray-800 transition">Curriculum</button>
        <button className="border-2 border-gray-400 rounded-md py-2 px-4 text-gray-300 hover:bg-gray-800 transition">Contact Me</button>
      </div>
    </div>

  )
}

export default Home;

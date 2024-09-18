import HardSkills from "@/components/common/HardSkills";

export default function Curriculum() {

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 h-full text-gray-300 p-6 hover:border-sky-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-screen-md" style={{ height: "70vh" }}>
                {/* Coluna da Esquerda */}
                <div className="bg-gray-800 p-4 rounded-lg h-full overflow-hidden hover:overflow-y-scroll transition-all duration-300">
                    <div className="text-white text-2xl mb-4">Curriculum</div>
                    <p className="flex items-center mb-4 text-sm">
                        <span className="mr-2">🎓</span> Bachelor's in Computer Science
                    </p>

                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Hard-skills:</h2>
                        <HardSkills propagateServerField={{ title: "Web Development", percent: "3/4" }} />
                        <HardSkills propagateServerField={{ title: "JavaScript / TypeScript / Node.js", percent: "2/3" }} />
                        <HardSkills propagateServerField={{ title: "React.js / Next.js", percent: "3/5" }} />
                        <HardSkills propagateServerField={{ title: "PHP", percent: "2/3" }} />
                        <HardSkills propagateServerField={{ title: "Java", percent: "3/4" }} />
                        <HardSkills propagateServerField={{ title: "Python", percent: "2/3" }} />
                        <HardSkills propagateServerField={{ title: "C#.NET", percent: "2/3" }} />
                        <HardSkills propagateServerField={{ title: "MySQL", percent: "3/5" }} />
                        <HardSkills propagateServerField={{ title: "MongoDB", percent: "3/5" }} />
                        <HardSkills propagateServerField={{ title: "Git/GitHub", percent: "4/5" }} />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Soft-skills:</h2>
                        <p className="flex items-center mb-4 text-sm">
                            <span className="mr-2">💻</span>
                            <span>Responsible, Communicative, Disciplined, and always eager to learn</span>
                        </p>

                        <p className="flex items-center mb-4 text-sm">
                            <span className="mr-2">📝</span>
                            <span>Good interpersonal skills and teamwork abilities</span>
                        </p>

                        <p className="flex items-center mb-4 text-sm">
                            <span className="mr-2">🔍</span>
                            <span>Proactive and always looking for improvement</span>
                        </p>
                    </div>
                </div>

                {/* Coluna da Direita */}
                <div className="bg-gray-800 p-3 rounded-lg h-full overflow-hidden hover:overflow-y-scroll transition-all duration-300">
                    <h1 className="text-4xl text-white">WINICIUS DA SILVA NEVES</h1>
                    <h2 className="text-xl text-teal-400 mb-4">Bachelor&apos;s in Computer Science</h2>
                    <p className="mb-6">I am a student focused on Web Development, constantly looking to improve my skills in website creation. Dedicated to technical excellence, I am always learning to develop robust and secure solutions.</p>

                    <div className="mb-6">
                        <h2 className="text-2xl text-white mb-2">EDUCATION</h2>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Bachelor&apos;s in Computer Science - University of Curitiba</h3>
                            <span className="text-sm text-gray-400">2023-2025</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl text-white mb-2">EXPERIENCE</h2>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Auto Socorro Flecha de Prata (Family Business)</h3>
                            <span className="text-sm text-gray-400">2010 - Present</span>
                            <p>During this experience, I realized that, beyond effective communication and creative problem-solving, flexibility, time management, teamwork, and motivation were key to achieving goals.</p>
                        </div>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Internship Challenge - RENTCARS (2023)</h3>
                            <span className="text-sm text-gray-400">2023-2023</span>
                            <p>I participated in this challenge, developing a CRUD application using JavaScript, adopting an MVC structure, and integrating the frontend with the database.</p>
                        </div>
                        <div>
                            <h3 className="text-lg">UniSearch - University Communication App (2024)</h3>
                            <p>I significantly contributed to the development of the UniSearch application using JavaScript/TypeScript and React Native, gaining experience in frontend/backend integration and data management.</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl text-white mb-2">CONTACT</h2>
                        <p>📍 Paraná, Curitiba, Bairro Alto</p>
                        <p>📧 <a href="mailto:winiciusneves2004@hotmail.com" className="text-teal-400">winiciusneves2004@hotmail.com</a></p>
                        <p>📱 (41) 999643460</p>
                        <p>🔗 <a href="https://linktr.ee/winiciusneves" className="text-teal-400">linktr.ee/winiciusneves</a></p>
                        <p>🐦 <a href="https://www.linkedin.com/in/winicius-neves/" className="text-teal-400">@winicius_neves</a></p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <a
                    href="/img/Winicius-Neves-curriculum.pdf"
                    download="Winicius-Neves-curriculum.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition"
                >
                    Download My Resume
                </a>
            </div>
        </div>
    );
}

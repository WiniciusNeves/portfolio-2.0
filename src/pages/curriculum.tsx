import HardSkills from "@/components/common/HardSkills";

export default function Curriculum() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 h-full text-gray-300 p-6 hover:border-sky-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-screen-md" style={{ height: "70vh" }}>
                {/* Coluna da Esquerda */}
                <div className="bg-gray-800 p-4 rounded-lg h-full overflow-hidden hover:overflow-y-scroll transition-all duration-300">
                    <div className="text-white text-2xl mb-4">Currículo</div>
                    <p className="flex items-center mb-4 text-sm">
                        <span className="mr-2">🎓</span> Ciência da Computação - Unicuritiba (2023 - Presente)
                    </p>

                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Hard-skills:</h2>
                        <HardSkills propagateServerField={{ title: "Web & Mobile Development", percent: "5/5" }} />
                        <HardSkills propagateServerField={{ title: "JavaScript / TypeScript / Node.js", percent: "5/5" }} />
                        <HardSkills propagateServerField={{ title: "React.js / Next.js / React Native", percent: "5/5" }} />
                        <HardSkills propagateServerField={{ title: "PHP", percent: "4/5" }} />
                        <HardSkills propagateServerField={{ title: "Java", percent: "4/5" }} />
                        <HardSkills propagateServerField={{ title: "Python", percent: "4/5" }} />
                        <HardSkills propagateServerField={{ title: "SQL / MySQL / PostgreSQL", percent: "5/5" }} />
                        <HardSkills propagateServerField={{ title: "MongoDB", percent: "3/5" }} />
                        <HardSkills propagateServerField={{ title: "NestJS", percent: "4/5" }} />
                        <HardSkills propagateServerField={{ title: "Git/GitHub", percent: "5/5" }} />
                        <HardSkills propagateServerField={{ title: "Figma", percent: "5/5" }} />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Soft-skills:</h2>
                        <p className="flex items-center mb-4 text-sm">💻 Proativo, comunicativo e disciplinado</p>
                        <p className="flex items-center mb-4 text-sm">📝 Habilidades interpessoais e trabalho em equipe</p>
                        <p className="flex items-center mb-4 text-sm">🔍 Sempre buscando melhorias e inovação</p>
                        <p className="flex items-center mb-4 text-sm">🚀 Focado em aprendizado contínuo e adaptação rápida</p>
                    </div>
                </div>

                {/* Coluna da Direita */}
                <div className="bg-gray-800 p-3 rounded-lg h-full overflow-hidden hover:overflow-y-scroll transition-all duration-300">
                    <h1 className="text-4xl text-white">WINICIUS DA SILVA NEVES</h1>
                    <h2 className="text-xl text-teal-400 mb-4">Desenvolvedor Web e Mobile | Freelancer</h2>
                    <p className="mb-6">Sou apaixonado por tecnologia e atuo como freelancer no desenvolvimento web e mobile. Utilizo tecnologias modernas como JavaScript, TypeScript, React, React Native e Node.js para criar soluções eficientes e inovadoras. Tenho experiência em desenvolvimento full-stack, APIs REST, bancos de dados SQL e NoSQL e infraestrutura de servidores.</p>

                    <div className="mb-6">
                        <h2 className="text-2xl text-white mb-2">EXPERIÊNCIA</h2>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Assistente Administrativo - Auto Socorro Flecha de Prata</h3>
                            <span className="text-sm text-gray-400">Jan 2021 - Presente</span>
                            <p>Atuação na organização e otimização de processos internos, suporte técnico e operacional, além de melhorias na gestão de estoque.</p>
                        </div>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Freelancer - Desenvolvimento Web & Mobile</h3>
                            <span className="text-sm text-gray-400">Jan 2023 - Presente</span>
                            <p>Desenvolvimento de aplicações modernas, incluindo o app RAPA em React Native e Firebase, além de projetos utilizando Next.js, Node.js e bancos de dados relacionais e não relacionais.</p>
                        </div>
                        <div className="border-b border-gray-600 pb-4 mb-4">
                            <h3 className="text-lg">Desenvolvedor Backend - Projeto Marketplace de Serviços</h3>
                            <span className="text-sm text-gray-400">Mar 2024 - Presente</span>
                            <p>Desenvolvimento de uma API em NestJS com PostgreSQL para um sistema de serviços, incluindo autenticação JWT, módulos organizados e segurança avançada.</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl text-white mb-2">CERTIFICAÇÕES</h2>
                        <p>📜 Certificação em React + Redux: Fundamentos e 2 Apps do Absoluto ZERO! (Udemy - 2024)</p>
                        <p>📜 Certificação em C# Essencial (Com LINQ, Net 7.0 e .NET 8.0) (Udemy - 2024)</p>
                        <p>📜 Certificação em Fundamentos de Lógica de Programação (iTalents - 2024)</p>
                        <p>📜 Certificado de Atividade - EAI - Encontro Acadêmico Integrado 23.2 (Even3 - 2023)</p>
                        <p>📜 Certificação em JavaScript (Curso em Vídeo - 2023)</p>
                        <p>📜 Certificação em Oracle Database (Oracle - 2023)</p>
                    </div>


                    <div className="mt-6">

                        <h2 className="text-2xl text-white mb-2">CONTATO</h2>
                        <p>📍 Curitiba, Paraná</p>
                        <p>📧 <a href="mailto:winiciusneves2004@hotmail.com" className="text-teal-400">winiciusneves2004@hotmail.com</a></p>
                        <p>📱 (41) 99964-3460</p>
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
                    Download Meu Currículo
                </a>
            </div>
        </div>
    );
}

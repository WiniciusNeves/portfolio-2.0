import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Definindo a interface para o repositório
interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    homepage?: string;
    languages_url: string;
    languages?: string[];
}

export default function Github() {
    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

    const [repos, setRepos] = useState<Repository[]>([]);
    const [loadingLanguages, setLoadingLanguages] = useState(false);
    
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const repoResponse = await axios.get('https://api.github.com/users/winiciusneves/repos', {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`, // Use a variável de ambiente
                    },
                });
                const repoData: Repository[] = repoResponse.data;
                setRepos(repoData);

                // Carregar as linguagens de cada repositório de forma assíncrona
                setLoadingLanguages(true);
                const reposWithLanguages = await Promise.all(repoData.map(async (repo) => {
                    const languageResponse = await axios.get(repo.languages_url, {
                        headers: {
                            Authorization: `token ${GITHUB_TOKEN}`, // Use a variável de ambiente
                        },
                    });
                    return { ...repo, languages: Object.keys(languageResponse.data) || [] };
                }));
                setLoadingLanguages(false);
                setRepos(reposWithLanguages);

            } catch (error) {
                console.log(error);
            }
        };

        fetchRepos();
    }, [GITHUB_TOKEN]); // Adiciona GITHUB_TOKEN como dependência

    return (
        <section className="bg-gray-900 py-16 overflow-y-scroll" style={{ maxHeight: "87vh" }}>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map(repo => (
                        <div key={repo.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            {/* Título e link para o GitHub */}
                            <h3 className="text-xl font-semibold text-white mb-4">
                                <a href={repo.html_url} className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                    {repo.name} <FaGithub className="inline-block ml-2" />
                                </a>
                            </h3>

                            {/* Descrição do projeto */}
                            <p className="text-gray-400 mb-4">{repo.description}</p>

                            {/* Verifica se há linguagens antes de usar o .map() */}
                            {loadingLanguages ? (
                                <p className="text-gray-400 mb-4">Loading languages...</p>
                            ) : repo.languages && repo.languages.length > 0 ? (
                                <div className="flex flex-wrap mb-4">
                                    {repo.languages.slice(0, 5).map((language, index) => (
                                        <span key={index} className="bg-gray-700 text-white text-sm px-2 py-1 rounded mr-2 mb-2">
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-400 mb-4">No language specified</p>
                            )}

                            {/* Stars e Forks */}
                            <div className="flex justify-between items-center text-gray-400 text-sm">
                                <span><FaStar className="inline-block mr-1" /> {repo.stargazers_count}</span>
                                <span><FaCodeBranch className="inline-block mr-1" /> {repo.forks_count}</span>
                            </div>

                            {/* Botões para ver código e site */}
                            <div className="mt-4 flex justify-between">
                                <a href={repo.html_url} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center" target="_blank" rel="noopener noreferrer">
                                    View Code <FaGithub className="ml-2" />
                                </a>
                                {repo.homepage && (
                                    <a href={repo.homepage} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                                        View Deployment <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


import List from "../components/common/List";
import Box from "@/components/common/Box";

export default function Project() {
    return (
        <div className="bg-gray-900 text-gray-300 overflow-y-auto w-full flex justify-center " style={{ maxHeight: "87vh" }}>
            <div className="flex flex-col space-y-6 md:m-4 h-full">
                <List propagateServerField={{ title: "Web Development Projects (Html/CSS/JS)" }}>
                    <Box
                        propagateServerField={{
                            title: "Portfolio (old)",
                            content: "This is my portfolio, where I showcase my projects and skills.",
                            link: "https://github.com/WiniciusNeves/portfolio",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "Calculator",
                            content: "Simple calculator app built with HTML, CSS, and JavaScript.",
                            link: "https://github.com/WiniciusNeves/calculator",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "RentCars",
                            content: "CRUD system for car rentals, built with Node.js and React.",
                            link: "https://github.com/WiniciusNeves/rentcars",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "OLX Clone",
                            content: "A clone of OLX built with PHP and MySQL.",
                            link: "https://github.com/WiniciusNeves/Project_OLX",
                        }}
                    />
                </List>

                <List propagateServerField={{ title: "React/Next Projects" }}>
                    <Box
                        propagateServerField={{
                            title: "Portfolio",
                            content: "This is my portfolio, where I showcase my projects and skills.",
                            link: "https://github.com/WiniciusNeves/portfolio",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "UniSearch",
                            content: "University search engine built with React.nativo",
                            link: "https://github.com/WiniciusNeves/UniSearch",
                        }}
                    />
                </List>

                <List propagateServerField={{ title: "Python Projects" }}>
                    <Box
                        propagateServerField={{
                            title: "Bot Music(Poro)",
                            content: "Music bot made with Python and PyTube.",
                            link: "https://github.com/WiniciusNeves/BotDiscord",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "Anti-Virus",
                            content: "Anti-virus application made with Python.",
                            link: "https://github.com/WiniciusNeves/anti-virus",
                        }}
                    />
                </List>

                <List propagateServerField={{ title: "See more projects" }}>
                    <Box
                        propagateServerField={{
                            title: "Stop",
                            content: "Stop application made with Java.",
                            link: "https://github.com/WiniciusNeves/Stop",
                        }}
                    />
                    <Box
                        propagateServerField={{
                            title: "College",
                            content: "College application made with Java and PHP.",
                            link: "https://github.com/WiniciusNeves/college",
                        }}
                    />
                </List>
            </div>
        </div>
    );
}

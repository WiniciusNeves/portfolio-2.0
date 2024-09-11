import NavAbas from "../common/NavAbas";
import { VscCode, VscHome, VscFileCode, VscRepo, VscAccount } from "react-icons/vsc";

export default function Nav() {
    return (
        <nav className="w-full md:w-auto h-auto overflow-y-auto md:overflow-y-visible scrollbar-hide">
            <div className="flex space-x-4 items-center">
                <NavAbas
                    propagateServerField={{
                        name: "Home",
                        url: "/",
                        icon: <VscHome />,
                        
                    }}
                />
                <NavAbas
                    propagateServerField={{
                        name: "Curriculum",
                        url: "/curriculum",
                        icon: <VscFileCode />,

                    }}
                />
                <NavAbas
                    propagateServerField={{
                        name: "Projects",
                        url: "/projects",
                        icon: <VscCode />,
                    }}
                />
                <NavAbas
                    propagateServerField={{
                        name: "GitHub",
                        url: "/github",
                        icon: <VscRepo />,
                    }}
                />
                <NavAbas
                    propagateServerField={{
                        name: "Contact",
                        url: "/contact",
                        icon: <VscAccount />,
                    }}
                />
            </div>
        </nav>
    );
}

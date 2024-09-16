import "@/styles/globals.css";
import { useRouter } from 'next/router';
import type { AppProps } from "next/app";
import Header from "@/components/template/Header";
import Nav from "@/components/template/Nav";
import Aside from "@/components/template/Aside";
import Main from "@/components/template/Main";
import Footer from "@/components/template/Footer";
import Console from "@/components/template/Console";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const is404 = router.pathname === "/404";

  // Rotas em que você NÃO quer que o Console apareça
  const noConsoleRoutes = ["/404", "/curriculum", "/contact", "/github", "/projects"];
  const noAsideRoutes = ["/projects" , "/github"];

  if (is404) return <Component {...pageProps} />;

  return (

    <div className="relative w-screen flex flex-col h-screen">


      {/* Header no topo, z-index mais alto */}
      <Header/>

      <div className="relative flex flex-grow ">
        {!noAsideRoutes.includes(router.pathname) && (
          <div className="relative flex flex-grow">
            <Aside />

          </div>
        )}

        <div className="relative flex flex-col w-full ">
          {/* Nav abaixo do Header, ao lado do Aside, z-index mais alto */}
          <Nav />

          <div className=" flex flex-grow  ">
            <Main>
              <Component {...pageProps} />
            </Main>
          </div>
          {/* Renderiza o Console apenas em páginas específicas */}
          {!noConsoleRoutes.includes(router.pathname) && (
            <div className="relative  w-full flex justify-center">
              <Console />
            </div>
          )}
        </div>
      </div>

      {/* Footer na parte inferior, z-index mais alto */}
      <Footer className="relative " />

      {/* Main content atrás de tudo (z-index mais baixo) */}
    </div>
  );
}

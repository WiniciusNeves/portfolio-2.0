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
  const noConsoleRoutes = ["/404",]; // Adicione as rotas onde não deseja o Console

  if (is404) return <Component {...pageProps} />;

  return (

    <div className="relative flex flex-col h-screen">


      {/* Header no topo, z-index mais alto */}
      <Header className="relative z-10" />

      <div className="relative flex flex-grow z-10">
        {/* Aside à esquerda, z-index mais alto */}
        <Aside className="relative z-10" />

        <div className="relative flex flex-col w-full z-10">
          {/* Nav abaixo do Header, ao lado do Aside, z-index mais alto */}
          <Nav className="relative " />

          {/* Renderiza o Console apenas em páginas específicas */}
          {!noConsoleRoutes.includes(router.pathname) && (
            <div className="fixed bottom-8 w-full flex justify-center">
              <Console className="relative z-10" />
            </div>
          )}
        </div>
      </div>

      {/* Footer na parte inferior, z-index mais alto */}
      <Footer className="relative z-10" />

      {/* Main content atrás de tudo (z-index mais baixo) */}
      <div className="absolute inset-0 flex flex-grow -z-10 ">
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
    </div>
  );
}

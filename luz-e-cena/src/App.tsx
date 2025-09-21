import Banner from "./components/banner";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Banner src="./images/Banner.png" alt="Banner principal da página" />
      <Link href="/" target="_blank">
        Ir para Alura
      </Link>
    </>
  );
}

export default App;

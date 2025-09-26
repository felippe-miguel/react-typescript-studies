import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src="./images/Banner.png" alt="Banner principal da página" />
      <MovieSection />
    </>
  );
}

export default App;

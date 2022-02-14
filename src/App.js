import "./App.css";
import { Header, Footer, BannerSection, RightMenu } from "./components";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const clickMenu = document.querySelector(".clickMenu");
    const rightMenu = document.querySelector(".rightMenu");

    clickMenu.addEventListener("click", () => {
      if (!rightMenu.classList.contains("active")) {
        rightMenu.classList.add("active");
      } else {
        rightMenu.classList.remove("active");
      }
    });
  }, []);
  return (
    <div className="App !scrollbar-default">
      <Header />
      <main className="w-full h-auto mt-[65px] container mx-auto flex items-center justify-center">
        <BannerSection />
        <div
          className={`w-[350px] h-[calc(100%-50px)] fixed bg-bgwhite right-0 top-[65px] z-[9999] flex flex-col items-center px-[10px] py-5 rightMenu shadow-rightMenu`}
        >
          <RightMenu />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

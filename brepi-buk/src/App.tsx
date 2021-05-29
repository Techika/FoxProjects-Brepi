import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Pagination } from "antd";
import AABody from "./AABody";
import TileFace from "./tiles/TileInterface";
import { useEffect, useState } from "react";

function App() {
  const [itemCount, setItemCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [beerInfo, setBeerInfo] = useState<TileFace[]>([
    {
      id: "0",
      name: "Beer's Name",
      description:
        "Once upona time thre was a man who had the idea of making beer lots of beer And so he didd.",
      image_url: "https://images.punkapi.com/v2/keg.png",
    },
  ]);

  const paginatorChange = (currentPage: number) => {
    // find out what Types I should use there instead...
    console.log("This thing was clicked", currentPage);
    setCurrentPage(currentPage);
    console.log("Beer InfoX", beerInfo);
    const beerLevel = (100 / Math.ceil(itemCount / 6)) * currentPage;
    document.getElementById(
      "tile-frame",
    )!.style.backgroundSize = `auto ${beerLevel}%`;
  };

  const test1Clicked = (e: any) => {
    const testTarget = document.getElementById("test1Text");
    if (testTarget) {
      testTarget.textContent = "CLICKED";
      setItemCount(18);
      console.log(itemCount);
    }
  };

  console.log("Initial BeerInfo: ", beerInfo);

  useEffect(() => {
    (async function fetchData() {
      console.log("Fetch started");
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const data = await res.json();
      console.log(data.length);
      setItemCount(data.length);
      // beerInfo.current = data;
      setBeerInfo(data);
      console.log("Beer InfoX", beerInfo);

      console.log("fetch completed, data.length = ", itemCount);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Beer Stube</h1>
      </header>
      <div id="main-content">
        <AABody
          currentBeerPage={currentPage}
          beerInfo={beerInfo}
          beerTileCount={itemCount}
        />
        <Pagination
          onChange={paginatorChange}
          defaultCurrent={1}
          total={itemCount}
          defaultPageSize={6}
          className="pagination"
        />
      </div>
      <footer>
        <div id="reactor">
          <p>Powered by:</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </footer>
      {/* <div id="test1">
        <h2 id="test1Text">unclicked</h2>
        <Button onClick={test1Clicked} type="primary">
          ButtonMe
        </Button>
      </div> */}
    </div>
  );
}

export default App;

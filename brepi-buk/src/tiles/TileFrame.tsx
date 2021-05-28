import BeerTile from "./BeerTile";
import TileFace from "./TileInterface";
import { useEffect, useRef, useState } from "react";
import logo from "../logo.svg";

export interface TileFrameProps {
  tilesToShow: TileFace[];
}

const TileFrame: React.FC<TileFrameProps> = (props) => {
  // if (props.tilesToShow.length<6){
  //   for (let a = 6 - props.tilesToShow.length ;a ===0 ; a--){

  //   }
  // const hiddenTile = useRef(null);
  function beerClicked(e: any, id: string): void {
    setHiddenTile(id);
  }
  const [hiddenTile, setHiddenTile] = useState("");
  return (
    <div id="tile-frame" key="beer-matrix">
      {props.tilesToShow.map((tile: TileFace) => {
        // console.log("Tileinfo:", tile);
        return (
          <BeerTile
            tileInfo={tile}
            key={tile.id}
            clickHandler={beerClicked}
            hiddenTile={hiddenTile}
          />
        );
      })}
    </div>
  );
};

export default TileFrame;

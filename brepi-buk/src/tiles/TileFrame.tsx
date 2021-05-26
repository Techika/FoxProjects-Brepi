import BeerTile from "./BeerTile";
import TileFace from "./TileInterface";
import { useEffect, useRef } from "react";
import logo from "../logo.svg";

export interface TileFrameProps {
  tilesToShow: TileFace[];
}

const TileFrame: React.FC<TileFrameProps> = (props) => {
  // if (props.tilesToShow.length<6){
  //   for (let a = 6 - props.tilesToShow.length ;a ===0 ; a--){

  //   }
  return (
    <div id="tile-frame" key="beer-matrix">
      {props.tilesToShow.map((tile: TileFace) => {
        // console.log("Tileinfo:", tile);
        return <BeerTile tileInfo={tile} key={tile.id} />;
      })}
    </div>
  );
};

export default TileFrame;

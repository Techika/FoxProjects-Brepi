import TileFrame from "./tiles/TileFrame";
import TileFace from "./tiles/TileInterface";
import logo from "./logo.svg";

export interface BodyPartProps {
  currentBeerPage: number;
  beerTileCount: number;
  beerInfo: TileFace[];
}

const BodyPart: React.FC<BodyPartProps> = (props) => {
  console.log("Beer Info in AABody:", props.beerInfo);
  console.log("beer page: ", props.currentBeerPage);

  const tilesToShow = props.beerInfo.slice(
    props.currentBeerPage * 6 - 6,
    props.currentBeerPage * 6,
  );
  console.log("tilesToShow::", tilesToShow);

  return (
    <div>
      <TileFrame tilesToShow={tilesToShow} />
    </div>
  );
};

export default BodyPart;

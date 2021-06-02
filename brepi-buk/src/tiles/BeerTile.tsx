import logo from "../logo.svg";
import TileFace from "./TileInterface";
import { useEffect, useState, useRef } from "react";
// import { Card } from "antd";
// const { Meta } = Card;

export interface BeerTileProps {
  tileInfo: TileFace;
  clickHandler: (e: any, id: string) => void;
  // hiddenTile: React.MutableRefObject<any>;
  hiddenTile: null | string;
}

// const beerClicked = (e:React.MouseEvent<HTMLElement>) => {
//   e.currentTarget
// }
const BeerTile: React.FC<BeerTileProps> = (props) => {
  // const [imageVisible, setImageVisible] = useState(true);
  // const onTileClick = () => setImageVisible(!imageVisible);
  const flippedRef = useRef(null);

  return (
    <div
      className="beer-card"
      key={props.tileInfo.id}
      onClick={(e) => props.clickHandler(e, props.tileInfo.id)}
    >
      <div className="beer-holder">
        {props.hiddenTile !== props.tileInfo.id && (
          <div className="img-container">
            <img
              src={props.tileInfo.image_url}
              className="beer-picture"
              alt="logo"
            />
          </div>
        )}
        <p className="beer-story">{props.tileInfo.description}</p>
      </div>

      <div className="beer-name-box">
        <p className="beer-name">{props.tileInfo.name}</p>
      </div>
    </div>
  );
};

export default BeerTile;

// const BeerTile: React.FC<BeerTileProps> = (props) => {
//   return (
//     <Card
//       hoverable
//       style={{ width: 100, maxHeight: 200 }}
//       cover={<img alt="example" src={props.tileInfo.image_url} />}
//     >
//       <Meta
//         title={props.tileInfo.name}
//         description={props.tileInfo.description}
//       />
//     </Card>
//   );
// };

// export default BeerTile;

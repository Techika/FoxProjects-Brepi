import logo from "../logo.svg";
import TileFace from "./TileInterface";
import { useEffect, useState } from "react";
// import { Card } from "antd";
// const { Meta } = Card;

export interface BeerTileProps {
  tileInfo: TileFace;
}

// const beerClicked = (e:React.MouseEvent<HTMLElement>) => {
//   e.currentTarget
// }
const BeerTile: React.FC<BeerTileProps> = (props) => {
  // const [imageVisible, setImageVisible] = useState(true);
  // const onTileClick = () => setImageVisible(!imageVisible);
  function beerClicked(e: any): void {
    const img = e.currentTarget.querySelector(".img-container");
    if (img.classList.contains("hidden")) {
      img.classList.toggle("hidden");
    } else {
      document
        .querySelector(".img-container.hidden")
        ?.classList.toggle("hidden");
      img.classList.toggle("hidden");
    }
  }
  return (
    <div
      className="beer-card"
      key={props.tileInfo.id}
      onClick={(e) => beerClicked(e)}
    >
      <div className="beer-holder">
        <div className="img-container">
          <img
            src={props.tileInfo.image_url}
            className="beer-picture"
            alt="logo"
          />
        </div>

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

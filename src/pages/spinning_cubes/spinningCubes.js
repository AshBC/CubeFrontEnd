import React from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";

class SpinningCubes extends React.Component {


  render() {
    return (
    <>
      <div className="allCubes">
        <div className="cube"><Link to="/exhibitions">
          <div>
            {/* <iframe
              src="https://player.vimeo.com/video/515591215"
              width="100%"
              height="100%"
              border="0"
              allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="title">Exhibitions</div>
          <div className="title"></div>
          <div className="title"></div>
          <div></div>
          <div></div>
          </Link>
        </div>

        <div className="cube"><Link to="/upload">
          <div className="title"></div>
          <div></div>
          <div className="title">+ your Exhibition to the list</div>
          <div></div>
          <div>CryptoVoxel</div>
          <div></div>
          </Link>
        </div>

        <div className="cube"><Link to="/buySR">
          <div>
            {/* <iframe
              src="https://www.cryptovoxels.com/play?coords=SW@126W,128N"
              width="100%"
              height="100%"
              border="0"
              allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
              hide="mobile-controls-container"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="title">Buy Art</div>
          <div></div>
          <div></div>
          <div></div>
          </Link>
        </div>
      </div>
      <div className="welcome">
      <p className="welcome-paragraph">Welcome to Cube, a portal to the worlds of web-based art, the crypto art market and its discourse.</p>
      <p className="welcome-paragraph-sub">Flipping the dynamics of the modernist 'white cube' web-based art offers direct communication between artists and collectors. Virtual spaces such as cryptovoxels are allowing makers to determine and literally build their own narratives in their own contexts. And AudioVisual NFT's are only the first example of the collaborations possible as art re-enters the everyday surfaces of our lives -- Screens.</p>
      </div>
      <Header />
      </>
    );
  }
}
export default SpinningCubes;

import React from "react";
import Header from "../../components/Header";

class Trending extends React.Component {
  render() {
    return (
      <div className="trending-page">
        <h1 className="trending-title">
          There's a lot out there, here are some creators to keep an eye on...
        </h1>
        <div className="container-right">
          <p className="trending-tip">
            Baron Lanteigne creates art installations bridging the real and
            virtual worlds through LCD as if they were portals. His work is
            presented internationally at digital art events such as Mapping
            Festival (GE), Mirage Festival (FR), Dutch Design Week (NL), SONAR+D
            (ES) and at the Ludwig Museum (HU).
            <p> </p>
            <p>
              Deciding what is great work can be narrowed down by considering a
              few aesthetic categories in which one could compare makers (not
              unlike how curators have operated for centuries). Within web-based
              art these categories are arguably: audio visual NFT’s, hyperreal,
              glitch, fantasy, collage, mixed media (reproductions of physical
              works mixed with digitally made works) and what I will call
              ‘psychedel-pic’. However, in my opinion what was true remains
              true, a great work is made great by it’s ability to inflect
              meaning, entertain or inspire, resonate or question. Without it
              even something beautiful falls flat.
            </p>
          </p>
        </div>
        <div className="container-left">
          <iframe
            className="trending-video"
            width="100%"
            height="450px"
            border="0"
            src="https://superrare.co/baronlanteigne"
          ></iframe>
          
        </div>
        <div className="container-right">
          <p className="trending-tip">
            Anonymity is not a value indicator in web-based-art collecting.
            Certainly there are quickly becoming a group of ‘known’ artists that
            are being validated by the traditional art market; the auction
            houses that are arguably trying to hold some piece of a pie made to
            disclude them. Because traditional collectors remain largely
            uncomfortable in the crypto space institutions like auction houses
            are able to maintain their position as experts by offering their
            services as arbitrators of value.
            <p> </p>
            <p>
              However this new frontier offers something the old one did not —
              direct access to conversations with artists and other collectors
              who are openly sharing and actively trading what they have. The
              stigma of auctioning works recently purchased in the physical
              world is reversed in the crypto space, where value increases the
              more a work is ‘seen’, shared and sold. Each transaction happening
              through blockchain, artists earn royalties embedded in the
              transaction, addressing the inequities of the auction house or
              gallery systems in which exchanges of wealth solely benefit
              collections.
            </p>
          </p>
        </div>
        <div className="container-left">
          <iframe
            className="trending-video"
            width="100%"
            height="450px"
            border="0"
            src="https://opensea.io/assets/0x60f80121c31a0d46b5279700f9df786054aa5ee5/502957"
          ></iframe>
          
        </div>
        <Header />
      </div>
    );
  }
}
export default Trending;

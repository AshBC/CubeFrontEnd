import axios from "axios";
import React from "react";
import QuickViewBuy from "../../components/QuickViewBuy";
import Header from "../../components/Header";

const openseaApiUrl ="https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20";

class ToBuy extends React.Component {
                state={
                    artworks: [],
                };
                getOpenSeaData= () => {
                    axios.get(`${openseaApiUrl}`)
                    .then (response => {
                        console.log("get opensea data", response.data);
                       this.setState({artworks: response.data}) 
                    })
                    .catch((err) => console.log(err))
                };
              
                componentDidMount (){
                    this.getOpenSeaData();
                  
                 }; 
             

    render() {
        return (
            <div className="Buy">
                <Header />
                <QuickViewBuy className="buy-page" artworks={this.state.artworks} />

            </div>

        )
    }
}
export default ToBuy;

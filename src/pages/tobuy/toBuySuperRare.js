import axios from "axios";
import React from "react";
import Header from "../../components/Header";
import QuickBuySR from "../../components/QuickBuySR";


const superRareUrl="https://superrare.co/sr-json/v0/nfts/assets?order_direction=desc&offset=0&limit=60";

class BuySR extends React.Component {
                state={
                    artworks: [],
                };
                getSuperRareData= () => {
                    axios.get(`${superRareUrl}`)
                    .then (response => {
                        console.log(response.data);
                       this.setState({artworks: response.data}) 
                    })
                };
              
                componentDidMount (){
                    this.getSuperRareData();
                  
                 }; 
             

    render() {
        return (
            <div className="Buy">
                <Header />
                <QuickBuySR className="buy-page" artworks={this.state.artworks} />

            </div>

        )
    }
}
export default BuySR;

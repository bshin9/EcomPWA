import React from "react";
import Card from "../components/Card";
import Video from "../components/Video";
import axios from "axios";

// Create a Product class
class Product extends React.Component {
  // created a state with product's empty array
  state = {
    products: []
  };
  // using a componentDidMount here to retrieve my products from my endpoint
  // this componentDidMount will load the products in when the page loads
  componentDidMount() {
    this.getMongoProducts();
  }

  getMongoProducts = () => {
    const url = "/products";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("failed--", err);
      });
  };

  // filtering the products by category
  getSelectedProducts = e => {
    const url = "/productfilter" + e.target.value;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("failed--", err);
      });
  };
  // filter function by category
  // getSelectedProducts = e => {
  //   const url = "/productfilter" + e.target.value;
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ products: data });
  //     })
  //     .catch(error => {
  //       console.log("BAD", error);
  //     });
  // };

  // filter function by prices
  // getSelectedPrices = (low, high) => {
  //   const url = "http://localhost:5000/api/pricefilter/" + low + "/" + high;
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ products: data });
  //     })
  //     .catch(error => {
  //       console.log("BAD", error);
  //     });
  // };

  render() {
    return (
      <div className="Product">
        {/* HEADER */}
        <Video />
        {/* Product Page */}
        <section id="products">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Strut Out In Our Proper Watches</h2>
                <hr text-align="left" width="50%" />
                <p className="productTxt">
                  To be a champ you have to look like one
                </p>
              </div>
            </div>
            {/* Filter */}
            <div id="myBtnContainer">
              <button className="filterBtn" onClick={this.getMongoProducts}>
                Show all
              </button>
              <button
                className="filterBtn"
                value="Rubber"
                onClick={this.getSelectedProducts}
              >
                Rubber
              </button>
              <button
                className="filterBtn"
                value="Wood"
                onClick={this.getSelectedProducts}
              >
                Wood
              </button>
              <button
                className="filterBtn"
                value="Leather"
                onClick={this.getSelectedProducts}
              >
                Leather
              </button>
              <button
                className="filterBtn"
                value="Steel"
                onClick={this.getSelectedProducts}
              >
                Steel
              </button>
              <button
                className="filterBtn"
                value="Gold"
                onClick={this.getSelectedProducts}
              >
                Gold
              </button>
            </div>
            <div id="myfilterBtnContainer">
              <button className="filterBtn" onClick={this.getMongoProducts}>
                All Prices
              </button>
              <button
                className="filterBtn"
                onClick={() => this.getSelectedPrices(0, 199)}
              >
                $0-$199
              </button>
              <button
                className="filterBtn"
                onClick={() => this.getSelectedPrices(200, 399)}
              >
                $200-$399
              </button>
              <button
                className="filterBtn"
                onClick={() => this.getSelectedPrices(400, 599)}
              >
                $400-$599
              </button>
              <button
                className="filterBtn"
                onClick={() => this.getSelectedPrices(600, 40000)}
              >
                $600-$40,000
              </button>
            </div>
            {/* Products Layout */}
            {/* mapping through my products here and calling back my Card component, 
                each variable here retrieves specific information from the Card */}
            <div className="flex-items">
              {this.state.products &&
                this.state.products.map((product, index) => (
                  <Card
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    buy={product.buy}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;

import React from "react";
class Details extends React.Component{
    Product = this.props.location.SelectedObject;
    render(){
        return(
            <div className="container">
                <h6 className="m-y-2">Product Id: </h6>
                <label>{this.Product.id || this.props.match.params.id}</label>

                <h6 className="m-y-2">Product Name: </h6>
                <label>{this.Product.name}</label>

                <h6 className="m-y-2">Product Price: </h6>
                <label>{this.Product.price}</label>

                <h6 className="m-y-2">Product Quantity: </h6>
                <label>{this.Product.quantity}</label>

                <h6 className="m-y-2">Product Category: </h6>
                <label>{this.Product.category}</label>

                <h6 className="m-y-2">Product Image: </h6>
                <img src={`../images/${this.Product.productimag}`} style={{ height: "300px", width: "500px" }}></img>
                
                <h6>
                <button className="btn btn-outline-success m-2" onClick={()=>{this.props.history.push("/List");}}>back to list</button>
                </h6>

            </div>
        );
    }
}
export default Details;
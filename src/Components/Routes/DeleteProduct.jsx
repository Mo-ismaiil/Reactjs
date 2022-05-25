import { Link } from "react-router-dom";
let Delete = (props)=>{
    let Product = props.location.SelectedObject;
    let index = props.location.SelectedIndex;
    return(
        <>
        <div className="container">
        <h2>Are you sure you want to delete this product?</h2>
        <button className="btn btn-outline-danger my-2" onClick={()=>{
            props.RemoveFn(index);
            props.history.push("/List")
        }}>Delete</button>
        <Link className="btn btn-outline-warning m-2" to={"/List"}>Cancel</Link>
                <h6 className="m-y-2">Product Id: </h6>
                <label>{Product.id || props.match.params.id}</label>

                <h6 className="m-y-2">Product Name: </h6>
                <label>{Product.name}</label>

                <h6 className="m-y-2">Product Price: </h6>
                <label>{Product.price}</label>

                <h6 className="m-y-2">Product Quantity: </h6>
                <label>{Product.quantity}</label>

                <h6 className="m-y-2">Product Category: </h6>
                <label>{Product.category}</label>

                <h6 className="m-y-2">Product Image: </h6>
                <img src={`../../images/${Product.productimag}`} style={{ height: "150px", width: "300px" , marginBottom:"5px"}}></img>
                

            </div>
        </>
    );
}
export default Delete;
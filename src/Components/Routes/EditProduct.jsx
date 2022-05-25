import React from "react";
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.Product = this.props.location.SelectedObject;
        this.state={
            id:this.Product.id,
            name:this.Product.name,
            price:this.Product.price,
            quantity:this.Product.quantity,
            image:this.Product.productimag,
            category:this.Product.category
        }
    }
    SaveToVar = (e)=>{
        this.setState({
        [e.target.name] : e.target.value
        })
    }
    SaveImg = (e)=>{
        this.setState({
            image : e.target.files[0].name
        })
    }
    render(){
        return(
            <div className="container">
                <label> id: </label>
                <input type="text" className="form-control" name="id" value={this.state.id}></input>
                <label> name: </label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.SaveToVar}></input>
                <label> price: </label>
                <input type="text"  className="form-control" name="price" value={this.state.price} onChange={this.SaveToVar}></input>
                <label> quantity: </label>
                <input type="text" className="form-control" name="quantity" value={this.state.quantity} onChange={this.SaveToVar}></input>
                <div className="mt-2">
                    <img src={`../images/${this.state.image}`} style={{ height: "150px", width: "300px" }}></img>
                </div>
                <label> update image: </label>
                <input type="file" className=" form-control" onChange={this.SaveImg}></input>
                
                <label> category: </label>
                <input type="text" className="form-control" name="category" value={this.state.category} onChange={this.SaveToVar}></input>
                <div className="text-center">
                    <button className="btn btn-success m-2" 
                            onClick={()=>{
                                this.props.EditFun({
                                    id:this.state.id,
                                    name:this.state.name,
                                    price:this.state.price,
                                    quantity:this.state.quantity,
                                    productimag:this.state.image,
                                    category:this.state.category,
                                    });
                                    this.props.history.push("/List");
                                    }}>
                        Edit
                    </button>
                </div>
            </div>
        );
    }
}
export default Edit;

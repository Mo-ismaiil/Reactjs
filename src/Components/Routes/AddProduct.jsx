import React from "react";
class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            price:'',
            quantity:'',
            image:'',
            category:''
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
                <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.SaveToVar}></input>
                <label> name: </label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.SaveToVar}></input>
                <label> price: </label>
                <input type="text"  className="form-control" name="price" value={this.state.price} onChange={this.SaveToVar}></input>
                <label> quantity: </label>
                <input type="text" className="form-control" name="quantity" value={this.state.quantity} onChange={this.SaveToVar}></input>
                <label> image: </label>
                <input type="file" className="form-control" onChange={this.SaveImg}></input>
                <label> category: </label>
                <input type="text" className="form-control" name="category" value={this.state.category} onChange={this.SaveToVar}></input>
                <div className="text-center">
                    <button className="btn btn-success m-2" 
                            onClick={()=>{
                                this.props.AddFun({
                                    id:this.state.id,
                                    name:this.state.name,
                                    price:this.state.price,
                                    quantity:this.state.quantity,
                                    productimag:this.state.image,
                                    category:this.state.category,
                                    });
                                    this.props.history.push("/List");
                                }}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
export default Add;

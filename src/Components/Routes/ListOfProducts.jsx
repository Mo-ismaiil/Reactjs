import { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct"
let Products = (props)=>{
    let [filter, setFilter] = useState("All");
    let arr =[];
    props.Items.forEach(element => {
        arr.push(element.category);
    })
    let [categories,setCategories] = useState([...new Set(arr)]);
    return(
        <>
            Select Category:          &nbsp;
            <select value={filter} className="w-50" onChange={(e)=>setFilter(e.target.value)}>
                <option>All</option>
                {
                    categories.map(category=>{
                        return(
                            <option value={category}>{category}</option>
                        );
                    })
                }
                   
            </select>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <td> id </td>
                        <td> name </td>
                        <td> price </td>
                        <td> quantity </td>
                        <td> product image </td>
                        <td> product category </td>
                        <td> </td>
                    </tr>
                </thead>
                <tbody>
                    {props.Items.map((item,index)=>{
                        if(item.category == filter ||filter=="All"){
                            return(
                                <tr key={item.id}>
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <img src={`images/${item.productimag}`}  style={{height:"70px",width:"150px"}}></img>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>
                                        <Link className="btn btn-danger m-2" to={{ pathname: `/List/Delete/${item.id}`, SelectedObject: item, SelectedIndex:index }}>Delete</Link>
                                        <Link className="btn btn-success m-2" to={{ pathname: `/Edit/${item.id}`, SelectedObject: item }}>Edit</Link>
                                        <Link className="btn btn-info m-2" to={{ pathname: `/Details/${item.id}`, SelectedObject: item }}>Details</Link>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            <Route component={()=><DeleteProduct {...props}/>} path="/List/Delete/:id?"/>
        </>
    );
}
export default Products;
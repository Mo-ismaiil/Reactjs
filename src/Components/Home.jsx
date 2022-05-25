import {BrowserRouter, Route} from "react-router-dom";
import ListOfProducts  from "./Routes/ListOfProducts";
import AddProduct from "./Routes/AddProduct";
import ProductDetails from "./Routes/Details";
import EditProduct from "./Routes/EditProduct"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react";
let Home = ()=>{
    let [products,setProducts] = useState(
        [
            { id: 1, name: "HP", price: 300, quantity: 500, productimag: "lab1.jpg", category:"Labtops" },
            { id: 2, name: "Tommy", price: 40, quantity: 100, productimag: "5.jpg", category:"Clothes" },
            { id: 3, name: "DELL", price: 200, quantity: 200, productimag: "lab2.jpg", category:"Labtops"},
            { id: 4, name: "H&M", price: 50, quantity: 100, productimag: "6.jpg", category:"Clothes"}, 
            { id: 5, name: "Apple", price: 400, quantity: 10, productimag: "lab3.jpg", category:"Labtops" },
            { id: 6, name: "Gucci", price: 60, quantity: 400, productimag: "7.jpg", category:"Clothes" },
            
        ]
    );
    let AddProd = (_newProduct) => {
        products.push(_newProduct);
        setProducts(products);
    }
    let EditProd = (_editedProduct)=>{
        for(let i=0; i<products.length; i++){
            if(products[i].id == _editedProduct.id)
            products[i] = _editedProduct;
        }
        setProducts(products);
    }
    let RemoveProduct =(_index)=>{
        products.splice(_index,1);
        setProducts(products)
      }
    return(
        <BrowserRouter>
            <Header/>
            <Route component={(props)=><ListOfProducts Items={products} RemoveFn={RemoveProduct} {...props}/>} path="/" exact/>
            <Route component={(props)=><ListOfProducts Items={products} RemoveFn={RemoveProduct} {...props}/>} path="/List"/>
            <Route component={(props)=><AddProduct AddFun={AddProd} {...props}/>} path="/Add"/>
            <Route component={ProductDetails} path="/Details/:id?"/>
            <Route component={(props)=><EditProduct EditFun={EditProd} {...props}/>} path="/Edit/:id?"/>
            <Footer/>
        </BrowserRouter>
    );
}
export default  Home;
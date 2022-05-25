import { useState } from "react";
import Home from "./Home"
let Login = ()=>{
    let AdminData = {
        Name: "Admin",
        Password : 123
    }
    let [userName,setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [IsAuthenticated,setIsAuthenticated] = useState(false);

    let userAuthentication = ()=>{
        if(AdminData.Name == userName && AdminData.Password == password){
            setIsAuthenticated(true);
        }
    }
    if(!IsAuthenticated){
        return(
            <div className="row offset-4 col-4">
                <div className="offset-2 col-8 text-center" style={{marginTop:"25%"}}>
                    <h2>Sign in</h2>
                    <br/>
                    <input type="text" className="form-control m-2 " placeholder="User Name" onChange={(e)=>setUserName(e.target.value)} />

                    <input type="password" className="form-control m-2" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

                    <button className="btn btn-primary m-2" type="submit" onClick={userAuthentication}>Sign in</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <Home/>
        );
    }
}
export default  Login;
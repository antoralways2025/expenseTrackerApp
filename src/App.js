 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 

 import Home from "./pages/Home";
import TransactionsPage from "./pages/TransactionsPage";


function App() {
    return ( 

        <Router> 

           <Routes> 

          
           <Route  path="/" element={<Home/>}/>

            <Route  path="/transactionall" element={<TransactionsPage/>}/>
 

          </Routes>
        </Router>
         
    );
}

export default App;

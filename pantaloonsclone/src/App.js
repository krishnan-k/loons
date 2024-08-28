import React from "react";
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brandpage from "./pages/Brandpage";
import Womenpage from "./pages/Womenpage";
import Menpage from "./pages/Menpage";
import { Account } from "./pages/Account";
import { Cart } from "./pages/Cart";
import Beauty from "./pages/Beauty";
import Support from "./component/Support";
import Kids from "./pages/Kids";
import Admin from "./Admin/Admin";
import Womendashboard from "./Admin/Womendashboard";
import Mendashboard from "./Admin/Mendashboard";
import Kidsdashboard from "./Admin/Kidsdashboard";
import Menedit from "./Admin/Menedit";
import Menadd from "./Admin/Menadd";
import Womenadd from "./Admin/Womenadd";
import Womenedit from "./Admin/Womenedit";
import Kidsedit from "./Admin/Kidsedit";
import Kidsadd from "./Admin/Kidsadd";
import Mainproduct from "./pages/Mainproduct";
import Trendingdashboard from "./Admin/Trendingdashboard";
import Trendingadd from "./Admin/Trendingadd";
import Trendingedit from "./Admin/Trendingedit";
import Bestsellerdashboard from "./Admin/Bestsellerdashboard";
import Bestselleradd from "./Admin/Bestselleradd";
import Admindashboard from "./Admin/Admindashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Cartdrawer from "./pages/Cartdrawer";
function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar />
        {/* <Cartdrawer/> */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="women" element={<Womenpage />} />
          <Route path="men" element={<Menpage />} />
          <Route path="kids" element={<Kids/>}/>
          <Route path="beauty" element={<Beauty />} />
          <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="/admin/womendashboard" element={<Womendashboard/>}/>
          <Route path="/admin/mendashboard" element={<Mendashboard/>}/>
          <Route path="/admin/kidsdashboard" element={<Kidsdashboard />}/>
          <Route path="/admin/trendingdashboard" element={<Trendingdashboard/>}/>
          <Route path="/admin/bestsellerdashboard" element={<Bestsellerdashboard/>}/>
          <Route path="/admin/womenedit/:id" element={<Womenedit/>} loader={({params}) => fetch(`http://localhost:5000/women/${params.id}`)}/>
          <Route path="/admin/womenadd" element={<Womenadd/>}/>
          <Route path="/admin/menedit/:id" element={<Menedit/>} loader={({params}) => fetch(`http://localhost:5000/men/${params.id}`)}/>
          <Route path="/admin/menadd" element={<Menadd/>}/>
          <Route path="/admin/kidsedit/:id" element={<Kidsedit/>} loader={({params}) => fetch(`http://localhost:5000/kids/${params.id}`)}/>
          <Route path="/admin/kidsadd" element={<Kidsadd/>}/>
          <Route path="/admin/trendingadd" element={<Trendingadd/>}/>
          <Route path="/admin/trendingedit/:id" element={<Trendingedit/>} loader={({params}) =>fetch(`http://localhost:5000/trending/${params.id}`)}/>
          <Route path="/admin/bestselleradd" element={<Bestselleradd/>}/>
          <Route path="brand" element={<Brandpage />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/women/:id" element={<Mainproduct/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Support/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

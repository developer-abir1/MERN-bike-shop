
import './App.css';
import { Routes, Route, } from "react-router-dom";
import HomeScressns from './components/Home/HomeScreens/HomeScressns';
import DashboardHome from './components/dashboard/dashboard/dashboardHome/DashboardHome';
import AdminHome from './components/dashboard/admin/adminHome/AdminHome';
import PaymentGetway from './components/dashboard/dashboard/paymentGetway/PaymentGetway';
import CastomerReview from './components/dashboard/dashboard/castomerReview/CastomerReview';
import AddProducts from './components/dashboard/admin/addProducts/AddProducts';
import ManageProducts from './components/dashboard/admin/manageProducts/ManageProducts';
import MakeAdmin from './components/dashboard/admin/makeAdmin/MakeAdmin';
import PathHooks from './components/utilits/pathHooks';
import Admin from './components/dashboard/admin/admin/Admin';
import Dashboard from './components/dashboard/dashboard/dashboard/Dashboard';
import ProductDiteles from './components/Home/Products/ProductDiteles/ProductDiteles';


function App() {

  const [pageTitle] = PathHooks(null)


  return (
    <div  >

      <Routes>
        <Route path="/" element={<HomeScressns />} />
        <Route path="/products/:id" element={<ProductDiteles />} />


        {/*  Dashboard */}
        <Route path="/" element={<DashboardHome title={pageTitle} />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/payment" element={<PaymentGetway />} />
          <Route path="/dashboard/castomerReview" element={<CastomerReview />} />
        </Route>
        {/* admin */}
        <Route path="/" element={<AdminHome title={pageTitle} />} >

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-products" element={<AddProducts />} />
          <Route path="/admin/mange-products" element={<ManageProducts />} />
          <Route path="/admin/make-admin" element={<MakeAdmin />} />



        </Route>

      </Routes>
    </div>
  );
}

export default App;

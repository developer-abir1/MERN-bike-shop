
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeScressns from './components/Home/HomeScreens/HomeScressns';
import DashboardHome from './components/dashboard/dashboard/dashboardHome/DashboardHome';
import AdminHome from './components/dashboard/admin/adminHome/AdminHome';
import PaymentGetway from './components/dashboard/dashboard/paymentGetway/PaymentGetway';
import CastomerReview from './components/dashboard/dashboard/castomerReview/CastomerReview';


function App() {
  return (
    <div  >

      <Routes>
        <Route path="/" element={<HomeScressns />} />
        <Route path="/dashboard" element={<DashboardHome />} >
          <Route path="/dashboard/payment" element={<PaymentGetway />} />
          <Route path="/dashboard/castomerReview" element={<CastomerReview />} />
        </Route>
        <Route path="/admin" element={<AdminHome />} />

      </Routes>
    </div>
  );
}

export default App;

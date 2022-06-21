import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeScressns from './components/Home/HomeScreens/HomeScressns';
import DashboardHome from './components/dashboard/dashboard/dashboardHome/DashboardHome';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<HomeScressns />} />
        <Route path="/dashboard" element={<DashboardHome />} />

      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateNewPassword from './pages/createNewPassword';
import Login from './components/login';
import Signin from './pages/signin';
import EmailNotFound from './pages/emailNotFound';
import FindYourAcc from './pages/findYourAcc';
import EmailConfirmed from './pages/emailConfirmed';
import SigninEmailConfirmed from './pages/signinEmailConfirmed';
import MealPlan from './pages/mealPlan';
import MealPlanCustomize from './pages/mealPlanCustomize';
import SigninUserDetails from './pages/signinUserDetails';
import NutritionalHistory from './pages/nutritionalHistory';
import OrderFood from './pages/orderFood';
import NavBar from './components/navBar';


function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <Router>
      <NavBar onLoginClick={() => setIsLoginOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPassword" element={<CreateNewPassword />} />
        {/* <Route isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} element={<Login />} /> */}

        <Route path="/signin" element={<Signin />} />
        <Route path="/emailNotFound" element={<EmailNotFound />} />
        <Route path="/findYourAcc" element={<FindYourAcc />} />
        <Route path="/emailConfirmed" element={<EmailConfirmed />} />
        <Route path="/signinEmailConfirmed" element={<SigninEmailConfirmed />} />
        <Route path="/mealPlan" element={<MealPlan />} />
        <Route path="/mealPlanCustomize" element={<MealPlanCustomize />} />
        <Route path="/signinUserDetails" element={<SigninUserDetails />} />
        <Route path="/nutritionalHistory" element={<NutritionalHistory />} />
        <Route path="/orderFood" element={<OrderFood />} />
      </Routes>
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Router>
  );
}

export default App;

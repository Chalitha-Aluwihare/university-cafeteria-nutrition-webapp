import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateNewPassword from './pages/createNewPassword';
import EmailNotFound from './pages/emailNotFound';
import FindYourAcc from './pages/findYourAcc';
import EmailConfirmed from './pages/emailConfirmed';
import SigninEmailConfirmed from './pages/signinEmailConfirmed';
import MealPlan from './pages/mealPlan';
import MealPlanCustomize from './pages/mealPlanCustomize';
import NutritionalHistory from './pages/nutritionalHistory';
import OrderFood from './pages/orderFood';
import NavBar from './components/navBar';
import AbountUs from './pages/aboutUs';
import ScrollToTop from './components/scrollToTop';
import NutritionTable from './components/nutritionTable';


function App() {

  const [activeModel, setActiveModel] = useState(null);

  const loginModelOpen = () => setActiveModel("login");
  const signinModelOpen = () => setActiveModel("signin");
  const closeModel = () => setActiveModel(null);

  return (
    <Router>
      <ScrollToTop />
      <NavBar
        loginModelOpen={loginModelOpen}
        signinModelOpen={signinModelOpen}
      />

      
      <Routes>
        {/* Login Pages Routes */}
        
        <Route path="/findYourAcc" element={<FindYourAcc />} />
        <Route path="/emailNotFound" element={<EmailNotFound />} />
        <Route path="/emailConfirmed" element={<EmailConfirmed />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />

        {/* Signin Pages Routes */}
        <Route path="/signinEmailConfirmed" element={<SigninEmailConfirmed />} />



        {/* Main Pages Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/mealPlan" element={<MealPlan />} />
        <Route path="/mealPlan/mealPlanCustomize" element={<MealPlanCustomize />} />
        <Route path="/mealPlan/mealPlanCustomize/:food/:handel" element={<MealPlanCustomize />} />
        

        <Route path="/nutritionalHistory" element={<NutritionalHistory />} />
        <Route path="/orderFood" element={<OrderFood />} />
        {/* <Route path="/mealPlan/mealPlanCustomize/MainMeals/:id/orderFood" element={<MealPlanCustomize />} /> */}

        <Route path="/aboutUs" element={<AbountUs />} />

        {/* Components Routes */}
        <Route path="/nutritionTable" element={<NutritionTable />} />

      </Routes>
      {activeModel === 'login' && <Login closeModel={closeModel} />}
      {activeModel === 'signin' && <Signin closeModel={closeModel} />}

    </Router>
  );
}

export default App;

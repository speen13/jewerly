import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage.jsx";
import NavBar from "./components/pages/NavBar.jsx";
import User from "./components/pages/User.jsx";
import BasketPage from "./components/pages/BasketPage.jsx";
function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<User />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App

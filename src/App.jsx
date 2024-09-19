import { useState } from "react";
import Home from "./pages/home/Home";
import Nav from "./components/navigation/Nav";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart/Cart";

function App() {
  //*NOTIFICATION BADGE
  const [activePage, setActivePage] = useState(false);
  const handleNotifCart = (isActive) => {
    if (isActive) {
      setActivePage(true);
    } else setActivePage(false);
  };

  return (
    <>
      <Nav navNotif={activePage} />
      <Routes>
        <Route exact path="/" element={<Home homeActive={handleNotifCart} />} />
        <Route
          exact
          path="/cart"
          element={<CartPage cartActive={handleNotifCart} />}
        />
      </Routes>
    </>
  );
}

export default App;

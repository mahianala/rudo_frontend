import NavBar from "./Components/NavBar/NavBar";
import AddTransaction from "./Pages/AddTransaction/AddTransaction";
import ListTransactions from "./Pages/ListTransactions/ListTransactions";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/transactions" element={<ListTransactions />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/update-transaction/:id" element={<AddTransaction isUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

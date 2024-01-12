import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/expense-tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/expense-tracker" exact element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import PaymentsWidget from "./components/PaymentsWidget";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <PaymentsWidget />
    </div>
  );
}

export default App;

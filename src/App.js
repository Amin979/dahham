import './App.css';
import Header from "./components/Headers/Header";
import "./assets/js/script";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";

function App() {
    return (
        <div className="App">
            <Header/>
            <Services/>
            <About/>
            <Qualities/>
            <Features/>
        </div>
    );
}

export default App;

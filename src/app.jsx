import React from "react";
import "../public/index.css";
import Card from "./components/card";
import Footer from "./components/footer";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default App;

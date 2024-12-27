import React from "react";
import "../public/index.css";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex-grow">
                <AboutMe/>
            </div>
            <Footer />
        </div>
    );
}

export default App;

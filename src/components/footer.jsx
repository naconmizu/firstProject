import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-20 box-border">
            <div className="w-full h-full bg-slate-800 flex items-center px-10">
                <h2 className="text-2xl font-bold -translate-y-3 text-white">Nacon</h2>
                <div className="w-px h-1/2 bg-slate-500 ml-7"></div>
                <div className="flex gap-4 mx-4 -translate-y-3">
                    <a href="https://www.instagram.com/somi1one/"><img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="instagram logo" /></a>
                    <a href="https://github.com/naconmizu"><img className="w-6 h-6 bg-white rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png" alt="github logo" /></a>
                    <a href="https://www.linkedin.com/in/nacon-rabelo-77b57833a/"><img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin logo" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

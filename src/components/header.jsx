import React from "react";






const Header = () => {
    return (
        <header id="header" className="bg-black w-full h-[100px] flex items-center justify-between px-10">
            <img id="logo" src="https://i.pinimg.com/236x/ab/dc/aa/abdcaa395563fee65a329ad8bb192509.jpg" alt="" />
            <div id="headerDIV">

                <a href="/" class="P!" id="headerP1" c>Home</a>
                <a href="https://github.com/naconmizu" class="P@" id="headerP2">github</a>
                <a href="https://www.instagram.com/somi1one/" class="P#" id="headerP3">social media</a>

            </div>
        </header>
    )
}

export default Header;
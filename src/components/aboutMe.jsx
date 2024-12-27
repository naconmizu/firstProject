import React from "react";
import HolderUser from "../../public/assets/HolderUser.jpg";

const imageUser = null ;

const style = {
    div: {

        backgroundColor: "rgba(3,3,3,0.3)",
        borderRadius: "10px",
        width: "700px",
        height: "400px",
        backdropFilter: "blur(10px)",
    },
    p: {
        color: "aliceblue",
        fontSize: "20px",
        fontWeight: "bold",
    },

}




const AboutMe = () => {
    return (
        <>
            <div style={style.div} className="  flex flex-col items-center mx-auto mt-20 px-10 justify-center">
                <h1 style={{ ...style.p, 'fontSize': '30px', transform: "translateY(-100px)" }} >About Me</h1>
                <div className="flex flex-row -translate-y-5 ">
                    <p style={style.p} >I am a student at IEMA in Brazil, studying to become a software engineer with a strong passion for creating innovative solutions. I am a quick learner, always eager to enhance my skills and grow as a developer. I deeply enjoy this field and am committed to becoming an excellent software engineer.

                    </p>
                    <img
                        src={HolderUser}
                        className="rounded-full w-28 h-28"
                        alt="Usuário"
                    />

                </div>
            </div>
        </>

    )
}

export default AboutMe;
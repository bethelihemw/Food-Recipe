import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import "./Settings.css"; // Import the CSS

function Settings() {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("rgb(255,0,255)");
  const [fontSize, setFontSize] = useState("medium");
  const [speed, setSpeed] = useState("medium");

  const primaryColors = [
    "rgb(255,0,255)",
    "rgb(0,0,255)",
    "rgb(0,255,0)",
    "rgb(255,255,0)",
    "rgb(160, 32, 240)"
  ];

  return (
    <div className="settings-container">
        {/* Preferred Theme */}
        <div className="section d-block">
            <h2>Preferred theme</h2>
            <div className="opt-container">
            <div
                className={`opt light ${theme === "light" ? "selected" : ""}`}
                onClick={() => setTheme("light")}
            >
                {theme === "light" && (
                <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                )}
            </div>
            <div
                className={`opt dark ${theme === "dark" ? "selected" : ""}`}
                onClick={() => setTheme("dark")}
            >
                {theme === "dark" && (
                <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                )}
            </div>
            </div>
        </div>

      {/* Primary Color */}
        <div className="section d-block">
            <h2>Primary color</h2>
            <div className="opt-container">
            {primaryColors.map((c, index) => (
                <div
                key={index}
                className={`opt color ${color === c ? "selected" : ""}`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
                >
                {color === c && (
                    <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>

      {/* Font Size */}
        <div className="section d-block">
            <h2>Font size</h2>
            <div className="opt-container">
            {["small", "medium", "large"].map((size) => (
                <button
                key={size}
                className={`btn ${fontSize === size ? "selected" : ""}`}
                onClick={() => setFontSize(size)}
                >
                {size.toUpperCase()}
                </button>
            ))}
        </div>
      </div>

      {/* Animation Speed */}
        <div className="section d-block">
            <h2>Animation speed</h2>
            <div className="opt-container">
            {["slow", "medium", "fast"].map((s) => (
                <button
                key={s}
                className={`btn ${speed === s ? "selected" : ""}`}
                onClick={() => setSpeed(s)}
                >
                {s.toUpperCase()}
                </button>
            ))}
            </div>
        </div>
    </div>
  );
}

export default Settings;


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
// import  {useState} from 'react'

// function Settings(){
//     const {theme, setTheme} = useState("dark")
//     const primaryColor=[
//         "rgb(255,0,255)","rgb(0,0,255)","rgb(0,255,0)","rgba(90, 4, 90, 1)"
//     ]
//     return(
        
//         <div>
//             <div className="section d-block">
//                 <h2> Preffered Theme</h2>
//                 <div className="opt-container">
//                     <div className="opt light">
//                         { theme === "light" && (
//                             <div className="check">
//                                 <FontAwesomeIcon icon={faCheck} />
//                             </div>
//                         )}
//                     </div>
//                     <div className="opt dark">
//                         { theme === "dark" && (
//                             <div className="check">
//                                 <FontAwesomeIcon icon={faCheck} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className="section d-block">
//                 <h2> Primary Color</h2>
//                 <div className="opt-container">
                    
//                     {primaryColor.map((color, index) =>{
//                         <div className="opt light">
//                             { true  && (
//                                 <div className="check">
//                                     <FontAwesomeIcon icon={faCheck} />
//                                 </div>
//                             )}
//                         </div>
//                     })}
                    
//                 </div>
//             </div>
//         </div>
        
        
//     )
// }

// export default Settings
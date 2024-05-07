import React from "react";

export const Footer = ({ children }) => {
    return (
        <footer>
            <div className="max-h bg-black">
                <div className="text-center text-lg color text-gray-100"> el footer de mari QUE</div>
            </div>
        { children }
        </footer>
    )
}
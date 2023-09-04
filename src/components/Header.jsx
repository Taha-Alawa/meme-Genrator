import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="/public/images/troll-img.webp" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Create By Taha</h4>
        </header>
    )
}
import React from "react";

function Header() {
    return (
    <div className = "p-3 mb-2 bg-light text-dark">
<header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
    <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
<p className="mb-16 text-md">Search for an employee or sort by Name/Category.</p>
</header>
    </div>
    )
}

export default Header;
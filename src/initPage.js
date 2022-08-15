import React from "react";

function FirstPage() {
    const redirect = () => {
        window.location.href = "/purchase";
    }
    return(
        <div className="container">
            <h1>You need to login to book tickets.</h1>
            <button className="button" onClick={redirect}>Login</button>
        </div>
    )
}

export default FirstPage;
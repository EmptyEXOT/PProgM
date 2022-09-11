import React from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/home">Home</Link> |{" "}
                <Link to="/pprog">PProg</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default App;
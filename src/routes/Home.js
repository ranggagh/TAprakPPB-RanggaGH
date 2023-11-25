import Hero from "../components/Header/Hero";
import Navbar from "../components/Navbar/Navbar";
import CocktailCard from "../components/CocktailCard";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                title="Your Cocktail Your Rules"
                text="Got Cocktail?"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <CocktailCard className="cCard"/>
            <Footer/>
        </>
    );
}

export default Home;
import React from 'react'
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from '../Screen/Home/Home';
import Movies from'../Screen/Movi'
import Series from'../Screen/Serires'
import Cartoon from'../Screen/Cartoons'
import Nav from'../Components/Navbar'
import MovieDetails from '../Screen/Movidetails.jsx/Movidetails';
import Footer from '../Components/Footer';
import Login from '../Components/LoginScreen'
import Signup from '../Components/Signup'
const RouterConfig = () => {
    return (
        <>
        <BrowserRouter>
        <Nav/>
       
        <Routes>
         <Route path='/'  element={<Home/>} />
         <Route path='movies'  element={<Movies/>} />
         <Route path='series'  element={<Series/>} />
         <Route path='cartoon'  element={<Cartoon/>} />
         <Route path='movedetails'  element={<MovieDetails/>} />
         <Route path='login'  element={<Login/> } />
         <Route path='signup'  element={<Signup/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        </>
       )
}

export default RouterConfig






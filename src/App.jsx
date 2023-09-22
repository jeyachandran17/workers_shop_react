import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../images/logo.png'

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

function Application() {
  return (
    <div className="application">
      <div className="navigationBar">
        <AllCategories />
      </div>
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={logo} alt="logo" id='logo' />
        <label htmlFor="logo">Worker's Shop</label>
      </div>
      <div className="nav-title">
        <div className="categories-container">
          <select className='categories'>
            <option value="" defaultChecked>Categories</option>
            <option value="all categories">All Categories</option>
            <option value="foodstuffs">Foodstuffs</option>
            <option value="dress">Dress</option>
            <option value="electronice">Electronice</option>
          </select>
        </div>
        <div className="search-engine">
          <form action="" className="search-bar">
	          <input type="text" className="search" required />
	          <button className="search-btn" type="submit"><span>Search</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

function AllCategories() {
  return (
    <div className="allcategories">
      <div className="navigation">
        <NavigationBar />
      </div>
      <div className="title-container">
        <h3>All Categories</h3>
      </div>
    </div>
  );
}

export default App

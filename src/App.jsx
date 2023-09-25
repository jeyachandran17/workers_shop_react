import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../images/logo.png'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  }));
  
  return (
    <div >
      <AppBar position="static" className="navigation-container">
        <Toolbar style={{gap:"50px"}}>
          <div className="logo-container">
            <img src={logo} alt="logo" id='logo' />
            <label htmlFor="logo">Worker's Shop</label>
          </div>
          <div className="search-engine">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </div>
          <div className="nav-title">
            <div className="categories-container">
              <FormControl sx={{ m: 1, minWidth: 120, borderColor:"white" }} size="small" >
                <InputLabel id="demo-select-small-label" style={{color:"white"}}>Categories</InputLabel>
                <Select label="Categories" onChange={handleChange}>
                  <MenuItem value="all categories">All Categories</MenuItem>
                  <MenuItem value="foodstuffs">Foodstuffs</MenuItem>
                  <MenuItem value="dress">Dress</MenuItem>
                  <MenuItem value="electronice">Electronice</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function AllCategories() {
  return (
    <div className="allcategories">
      <div className="navigation">
        <NavigationBar />
      </div>
      <div className="All-title-container">
        <h3>All Categories</h3>
      </div>
      <div className="all-item-backage-container">
        <div className="foodstuffs-item-package-cotainer">
          <div className='foodstuffs-item-package-image-cotainer'>
            <img src="" alt="Food Stuffs package" />
            <img src="" alt="Food Stuffs package" />
            <img src="" alt="Food Stuffs package" />
            <img src="" alt="Food Stuffs package" />
          </div>
          <label htmlFor="">Food Stuffs</label>
        </div>
        <div className="dress-item-package-cotainer">
          <div className='dress-item-package-image-container'>
            <img src="" alt="Dress package" />
            <img src="" alt="Dress package" />
            <img src="" alt="Dress package" />
            <img src="" alt="Dress package" />
          </div>
          <label htmlFor="">Mobiles</label>
        </div>
        <div className="electornice-item-package-cotainer">
          <div className="electronice-item-package-image-container">
            <img src="" alt="Eletornice package" />
            <img src="" alt="Eletornice package" />
            <img src="" alt="Eletornice package" />
            <img src="" alt="Eletornice package" />
          </div>
          <label htmlFor=""></label>
        </div>
      </div>
    </div>
  );
}

export default App

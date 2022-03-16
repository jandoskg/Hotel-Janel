import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import logo from "../../assetcs/logo/JaneL.svg"
import styles from "./Navbar.module.css"

import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ADMIN } from '../../helpers/const';
import { useAuth } from '../../contexts/AuthContext';
import { Badge, Input } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';



const pages = [
    { name: "Главная", link: "/", id: 1 },
    { name: "Апартаменты", link: "/products", id: 4 },
    { name: "О Нас", link: "/aboutus", id: 3 },
    { name: "Контакты", link: "/contacts", id: 7 },
    { name: "Отзывы", link: "/comments", id: 10 }
    
  ];


const Navbar = () => {
    const {
        handleLogout,
        user: { email },
      } = useAuth();

    const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { cart } = useProducts();
  
  
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts } = useProducts();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  

  return (
    <AppBar position="static"  sx={{backgroundColor:"black"}}  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
           
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            
          >
             
            <img  className={styles.navbarLogo} src={logo} alt="logo" />
            
          </Typography>
          
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={{backgroundColor:"black"}}>
                    <Link to={page.link}>
                  <Typography sx={{color:"white"}} textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {email == ADMIN ? (
                <MenuItem sx={{backgroundColor:"black"}}>
                  <Link to="/admin">
                    <Typography sx={{color:"white"}} textAlign="center">Панель Админа </Typography>
                  </Link>
                </MenuItem>
              ) : null}

           {email == ADMIN ? (null) : (
              <Link to="/favorite">
                <Button 
                  
                  sx={{ backgroundColor:"black",width:"18vw",  color: 'white',fontSize:"13px" }}>
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                   Избранное
                  </Badge>
                </Button>
              </Link>
            )}

              
            </Menu>
          </Box >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img onClick={()=>navigate("/")} className={styles.navbarLogo} src={logo} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:"center",marginLeft:"-20vw" }}>
            {pages.map((page) => (
                <Link to={page.link}>
              <Button
                className={styles.navbarItem}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:1, color: 'white', display: 'block',fontSize:10 }}
              >
                {page.name}
              </Button>
              </Link>
            ))}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button 
                className={styles.navbarItem}
                sx={{ my: 2, color: "white", display: "block", fontSize: 10 }}
                >
                  Панель Админа
                </Button>
              </Link>
            ) : null}


            {email == ADMIN ? (null) : (
              <Link to="/favorite">
                <Button 
                  className={styles.navbarItem}
                  sx={{ my: 2, color: 'white',fontSize:10 }}>
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                   Избранное
                  </Badge>
                </Button>
              </Link>
            )}
          </Box>


          <Box>
            <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              fontFamily: "-apple-system",
              borderRadius: 2,
              width: "20vw",
              border: 1,
              marginRight:2,
              color: "white",
              borderColor: "white",
              flexWrap: "wrap",
            }}
            placeholder="Поиск"
          />
         </Box>



          <Typography variant="h5">
            {email ? (
              <Link to="/">
                <Button
                  className={styles.loginBtn}
                  sx={{ my: 2, color: 'white', display: 'block',fontSize:10 }}
                  onClick={handleLogout}
                >
                  Выйти
                </Button>
              </Link>
            ) : null}

            {email ? null : (
              <Link to="/auth">
                <Button
                 className={styles.loginBtn}
                  
                  sx={{ my: 2, color: 'white', display: 'block',fontSize:10 }}
                  onClick={handleLogout}
                >
                  Войти
                </Button>
              </Link>
            )}
          </Typography>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

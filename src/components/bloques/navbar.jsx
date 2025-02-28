import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Tooltip, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CodeBlock } from "../custom/codeBlock";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:600px)");

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElProducts, setAnchorElProducts] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const handleNavigateProductsMenu = (producto) => {
    // if (producto === "biorhiza") {
    //   navigate("/biorhiza-endo");
    //   setAnchorElProducts(null);
    // }
    // if (producto === "promotor") {
    //   navigate("/promotor-plus");
    //   setAnchorElProducts(null);
    // }
    // if (producto === "amin") {
    //   navigate("/amin-gpb");
    //   setAnchorElProducts(null);
    // }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHome = () => {
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorElLanguage(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (anchorElProducts) {
        handleCloseProductsMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorElProducts]);

  //Nav 2
  const [anchorElNav2, setAnchorElNav2] = useState(null);
  const [anchorElUser2, setAnchorElUse2] = useState(null);

  const handleOpenNavMenu2 = (event) => {
    setAnchorElNav2(event.currentTarget);
  };

  const handleCloseNavMenu2 = () => {
    setAnchorElNav2(null);
  };

  const handleOpenUserMenu2 = (event) => {
    setAnchorElUse2(event.currentTarget);
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUse2(null);
  };

  const exampleCode = `
      <AppBar position="static" className="nav-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              onClick={handleHome}
              component="img"
              src="/static/logo-extrados.png"
              alt="Logo"
              sx={{
                height: "4rem",
                width: "10rem",
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
            />

            {/* Icono con menu desplegable en mobile */}
            <Box
              onClick={handleHome}
              component="img"
              src="/static/logo-extrados.png"
              alt="Logo"
              sx={{
                height: "4rem",
                maxWidth: "8rem",
                mr: 25,
                mt: 3,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                cursor: "pointer",
              }}
            />

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="rgb(3, 74, 150)"
              >
                <MenuIcon sx={{ fontSize: 40, marginTop: "1.5rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    document
                      .getElementById("descripcion")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.nosotros")}
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={handleOpenProductsMenu}
                  aria-controls="products-menu"
                  aria-haspopup="true"
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.productos")}
                  </Typography>
                </MenuItem>
                <Menu
                  id="products-menu"
                  anchorEl={anchorElProducts}
                  open={Boolean(anchorElProducts)}
                  onClose={handleCloseProductsMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    onClick={() => handleNavigateProductsMenu("promotor")}
                  >
                    <Typography>{t("nav.promotor")}</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleNavigateProductsMenu("biorhiza")}
                  >
                    <Typography>{t("nav.biorhiza")}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                    <Typography>{t("nav.amin")}</Typography>
                  </MenuItem>
                </Menu>
                <MenuItem
                  onClick={handleOpenLanguageMenu}
                  aria-controls="language-menu"
                  aria-haspopup="true"
                >
                  <TranslateIcon sx={{ color: "rgb(3, 74, 150)" }} />
                </MenuItem>
                <Menu
                  id="language-menu"
                  anchorEl={anchorElLanguage}
                  open={Boolean(anchorElLanguage)}
                  onClose={handleCloseLanguageMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={() => changeLanguage("es")}>
                    <Typography color="rgb(3, 74, 150)">
                      {t("nav.es")}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("pt")}>
                    <Typography color="rgb(3, 74, 150)">
                      {t("nav.pt")}
                    </Typography>
                  </MenuItem>
                </Menu>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.contacto")}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Menu web */}
            <Box
              sx={{
                flexGrow: isMobile ? 0 : 1,
              }}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                className="nav-bar-btn"
                onClick={() => {
                  handleCloseNavMenu();
                  document
                    .getElementById("descripcion")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.nosotros")}
              </Button>
              <Button
                className="nav-bar-btn"
                onClick={handleOpenProductsMenu}
                aria-controls="products-menu"
                aria-haspopup="true"
              >
                {t("nav.productos")}
              </Button>
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("promotor")}
                >
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.promotor")}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("biorhiza")}
                >
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.biorhiza")}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.amin")}
                  </Typography>
                </MenuItem>
              </Menu>
              <Button
                className="nav-bar-btn"
                onClick={() => {
                  handleCloseNavMenu();
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.contacto")}
              </Button>
              <Button
                className="nav-bar-btn"
                onClick={handleOpenLanguageMenu}
                aria-controls="language-menu"
                aria-haspopup="true"
              >
                <TranslateIcon />
              </Button>
              <Menu
                id="language-menu"
                anchorEl={anchorElLanguage}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguageMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => changeLanguage("es")}>
                  <Typography color="rgb(3, 74, 150)">{t("nav.es")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("pt")}>
                  <Typography color="rgb(3, 74, 150)">{t("nav.pt")}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  `;

  return (
    <>
      {/* Opcion 1 */}
      <AppBar position="static" className="nav-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              onClick={handleHome}
              component="img"
              src="/static/logo-extrados.png"
              alt="Logo"
              sx={{
                height: "4rem",
                width: "10rem",
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
            />

            {/* Icono con menu desplegable en mobile */}
            <Box
              onClick={handleHome}
              component="img"
              src="/static/logo-extrados.png"
              alt="Logo"
              sx={{
                height: "4rem",
                maxWidth: "8rem",
                mr: 25,
                mt: 3,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                cursor: "pointer",
              }}
            />

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="rgb(3, 74, 150)"
              >
                <MenuIcon sx={{ fontSize: 40, marginTop: "1.5rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    document
                      .getElementById("descripcion")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.nosotros")}
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={handleOpenProductsMenu}
                  aria-controls="products-menu"
                  aria-haspopup="true"
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.productos")}
                  </Typography>
                </MenuItem>
                <Menu
                  id="products-menu"
                  anchorEl={anchorElProducts}
                  open={Boolean(anchorElProducts)}
                  onClose={handleCloseProductsMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    onClick={() => handleNavigateProductsMenu("promotor")}
                  >
                    <Typography>{t("nav.promotor")}</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleNavigateProductsMenu("biorhiza")}
                  >
                    <Typography>{t("nav.biorhiza")}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                    <Typography>{t("nav.amin")}</Typography>
                  </MenuItem>
                </Menu>
                <MenuItem
                  onClick={handleOpenLanguageMenu}
                  aria-controls="language-menu"
                  aria-haspopup="true"
                >
                  <TranslateIcon sx={{ color: "rgb(3, 74, 150)" }} />
                </MenuItem>
                <Menu
                  id="language-menu"
                  anchorEl={anchorElLanguage}
                  open={Boolean(anchorElLanguage)}
                  onClose={handleCloseLanguageMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={() => changeLanguage("es")}>
                    <Typography color="rgb(3, 74, 150)">
                      {t("nav.es")}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("pt")}>
                    <Typography color="rgb(3, 74, 150)">
                      {t("nav.pt")}
                    </Typography>
                  </MenuItem>
                </Menu>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgb(3, 74, 150)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {t("nav.contacto")}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Menu web */}
            <Box
              sx={{
                flexGrow: isMobile ? 0 : 1,
              }}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                className="nav-bar-btn"
                onClick={() => {
                  handleCloseNavMenu();
                  document
                    .getElementById("descripcion")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.nosotros")}
              </Button>
              <Button
                className="nav-bar-btn"
                onClick={handleOpenProductsMenu}
                aria-controls="products-menu"
                aria-haspopup="true"
              >
                {t("nav.productos")}
              </Button>
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("promotor")}
                >
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.promotor")}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("biorhiza")}
                >
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.biorhiza")}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                  <Typography color="rgb(3, 74, 150)">
                    {t("nav.amin")}
                  </Typography>
                </MenuItem>
              </Menu>
              <Button
                className="nav-bar-btn"
                onClick={() => {
                  handleCloseNavMenu();
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.contacto")}
              </Button>
              <Button
                className="nav-bar-btn"
                onClick={handleOpenLanguageMenu}
                aria-controls="language-menu"
                aria-haspopup="true"
              >
                <TranslateIcon />
              </Button>
              <Menu
                id="language-menu"
                anchorEl={anchorElLanguage}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguageMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => changeLanguage("es")}>
                  <Typography color="rgb(3, 74, 150)">{t("nav.es")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("pt")}>
                  <Typography color="rgb(3, 74, 150)">{t("nav.pt")}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Opcion 2 */}
      <AppBar position="static" sx={{ marginTop: 4 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu2}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav2)}
                onClose={handleCloseNavMenu2}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu2}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu2}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser2)}
                onClose={handleCloseUserMenu2}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu2}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <IconButton
        onClick={handleHome}
        sx={{
          position: "absolute",
          top: 250,
          left: 10,
          backgroundColor: "rgba(0,0,0,0.1)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Container>
        <Typography className="description-title">NavBar</Typography>
        <Typography className="main-title">
          A continuación se deja el código del primer navbar, el código se Se
          encuentra con React y Material UI. Para mayor profundización de los
          estilos y funciones ver el código fuente.
        </Typography>

        <CodeBlock code={exampleCode} />
      </Container>
    </>
  );
}

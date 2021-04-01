import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import rectify from "../images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    appbar: {
      background: "none",
    },
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 400,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  appBarSolid: {
    backgroundColor: "rgba(67, 129, 168)",
  },
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168,0,5)",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = React.useRef();
  navRef.current = navBackground;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appbarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {RectifyLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "white",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{RectifyLogo}</div>
      </Toolbar>
    );
  };

  const RectifyLogo = (
    <Toolbar>
      <img src={rectify} alt="RectifyLogo" className={classes.logo} />
    </Toolbar>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          style={{ color: "black" }}
          {...{
            key: label,

            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "white",
            style: { textDecoration: "white" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };
  return (
    <header>
      <AppBar
        id="header"
        className={classes.appBarTransparent}
        style={{
          backgroundColor: "rgba(200, 247, 197, 1)",

          //backgroundColor: "transparent",
          color: "black",
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Services",
    href: "/creditrepairservices",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Credit Education",
    href: "/crediteducation",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
  {
    label: "Financial Calculator",
    href: "/financialcalculator",
  },
];

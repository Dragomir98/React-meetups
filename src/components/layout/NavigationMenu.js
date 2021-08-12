import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FavoritesContext from "../../store/favorites-context";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledNav = styled(AppBar)`
  background-color: ${(props) => props.theme.navbar};
  & > header {
    background-color: inherit;
  }
`;

export default function NavigationMenu() {
  const favoritesCtx = useContext(FavoritesContext);
  const materialClassess = useStyles();
  const [mobileView, setMobileView] = useState(false);
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 902
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Typography variant="h5" className={materialClassess.title}>
          <Link to="/">React Meetups</Link>
        </Typography>
        <ul className="nav-ul nav-desktop">
          <li>
            <Typography variant="h6" className={materialClassess.title}>
              <Link to="/new-meetup">Add New Meetup</Link>
            </Typography>
          </li>
          <li>
            <Typography variant="h6" className={materialClassess.title}>
              <Link to="/favorites">
                Favorites
                <span className="favorites-count">
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </Typography>
          </li>
        </ul>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          edge="start"
          className={materialClassess.menuButton}
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"top"}
          open={state}
          onClose={toggleDrawer(false)}
          className="drawer"
        >
          <ul className="nav-ul nav-mobile">
            <li>
              <Typography variant="h6" className={materialClassess.title}>
                <Link to="/new-meetup">Add New Meetup</Link>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={materialClassess.title}>
                <Link to="/favorites">
                  My Favorites
                  <span className="favorites-count">
                    {favoritesCtx.totalFavorites}
                  </span>
                </Link>
              </Typography>
            </li>
          </ul>
        </Drawer>
        <Typography variant="h5" className={materialClassess.title}>
          <Link to="/">React Meetups</Link>
        </Typography>
        <Link to="/favorites" className="favorites-link">
          <span className="favorites-count">{favoritesCtx.totalFavorites}</span>
        </Link>
      </Toolbar>
    );
  };

  return (
    <div className={materialClassess.root}>
      <StyledNav>
        {/* <AppBar position="static"> */}
        {mobileView ? displayMobile() : displayDesktop()}
        {/* </AppBar> */}
      </StyledNav>
    </div>
  );
}

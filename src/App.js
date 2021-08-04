import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import EditMeetup from "./pages/EditMeetup";
import { ThemeStore } from "./store/theme-context";
import Theme from "./Theme";

export default function App() {
  return (
    <ThemeStore>
      <Theme>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AllMeetupsPage />
            </Route>
            <Route path="/new-meetup">
              <NewMeetupsPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
            <Route path="/edit-meetup/:id">
              <EditMeetup />
            </Route>
          </Switch>
        </Layout>
      </Theme>
    </ThemeStore>
  );
}

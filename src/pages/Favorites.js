import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { Typography } from "@material-ui/core";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <Typography variant="h6" className="page-title" align="center">
        You have no favorites yet.
      </Typography>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>;
  }

  return (
    <section>
      <Typography variant="h4" align="center" className="page-title">
        Favorites
      </Typography>
      {content}
    </section>
  );
}

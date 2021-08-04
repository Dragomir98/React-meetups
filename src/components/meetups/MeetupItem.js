import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  section: {
    padding: theme.spacing(2),
    boxShadow: "0 4px 6px",
    borderRadius: "5px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const materialClasses = useStyles();

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.description,
        image: props.image,
      });
    }
  }

  function handleDelete(id) {
    const meetupRef = firebase.database().ref("meetups").child(id);
    meetupRef
      .remove()
      .then(console.log("removed"))
      .catch((err) => {
        console.log(`Meetup #${id} could not be deleted: ${err}`);
      });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <Grid item xs={12} sm={6} md={4} className="meetup-item">
      <Paper className={materialClasses.paper}>
        <div className="image-box">
          <img src={props.image} alt={props.title} className="meetup-image" />
        </div>
        <section className="meetup-field-wrapper">
          <div className="meetup-field">
            <label>Title:</label>
            <span>{props.title}</span>
          </div>

          <div className="meetup-field">
            <label>Address:</label>
            <span>{props.address}</span>
          </div>

          <div className="meetup-field">
            <label>Details:</label>
            <span>{props.description}</span>
          </div>
        </section>
        <div className="meetup-actions">
          <Button onClick={toggleFavoriteStatusHandler} color="primary">
            {itemIsFavorite ? (
              <StarIcon fontSize="large" />
            ) : (
              <StarOutlineIcon fontSize="large" />
            )}
          </Button>

          <div className="edit-delete">
            <Link
              to={{
                pathname: `/edit-meetup/${props.id}`,
                state: {
                  id: props.id,
                  title: props.title,
                  address: props.address,
                  description: props.description,
                  image: props.image,
                },
              }}
            >
              <Button variant="contained" className="secondary">
                Edit
              </Button>
            </Link>

            <Button
              variant="contained"
              onClick={() => handleDelete(props.id)}
              className="primary"
            >
              Delete
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

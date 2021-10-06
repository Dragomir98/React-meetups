import MeetupItem from "./MeetupItem";
import Grid from "@material-ui/core/Grid";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MeetupList(props) {
  const materialClasses = useStyles();

  return (
    <Container maxWidth="md">
      <div className={materialClasses.root}>
        <Grid container spacing={3}>
          {props.meetups.map((meetup) => (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
}

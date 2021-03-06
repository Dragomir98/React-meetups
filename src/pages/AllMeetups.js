import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const materialClassess = useStyles();

  //this code will be executed only under certain circumstances
  useEffect(() => {
    setIsLoading(true);
    //fetch data on load
    fetch(`${process.env.REACT_APP_FIREBASE}/meetups.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <Typography variant="h6" className="page-title" align="center">
        <p>Loading...</p>
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4" className="page-title" align="center">
        All Meetups
      </Typography>
      <div>
        {loadedMeetups.length > 0 ? (
          <MeetupList meetups={loadedMeetups} />
        ) : (
          <Typography
            variant="h4"
            className={materialClassess.title}
            align="center"
          >
            There are no current meetups.
          </Typography>
        )}
      </div>
    </Box>
  );
}

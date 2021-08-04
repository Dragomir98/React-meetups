import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

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
    fetch(
      "https://react-meetups-e5862-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); //get the response data as json
      })
      .then((data) => {
        //transport the data using helper array
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        //then get the actual data
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); //if there is no second param to useEffect, the effect function executes when the component executes

  if (isLoading) {
    return (
      <Typography variant="h6" className="page-title" align="center">
        <p>Loading...</p>
      </Typography>
    );
  }

  return (
    <section>
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
    </section>
  );
}

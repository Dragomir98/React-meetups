import MeetupForm from "../components/meetups/MeetupForm";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function NewMeetupsPage() {
  const history = useHistory(); //manipulate browser history

  function handleAddMeetup(meetupData) {
    //make http request - send a post req with our data to firebase
    fetch(
      "https://react-meetups-e5862-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData), //what type if data to send
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <Typography variant="h4" align="center" className="page-title">
        Add New Meetup
      </Typography>
      <MeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}

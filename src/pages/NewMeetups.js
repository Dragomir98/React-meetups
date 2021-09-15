import MeetupForm from "../components/meetups/MeetupForm";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function NewMeetupsPage() {
  const history = useHistory();

  function handleAddMeetup(meetupData) {
    fetch(`${process.env.REACT_APP_FIREBASE}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section className="section-full">
      <Typography variant="h4" align="center" className="page-title">
        Add New Meetup
      </Typography>
      <MeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}

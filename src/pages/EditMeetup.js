import React from "react";
import EditMeetupForm from "../components/meetups/EditMeetupForm";
import { useHistory, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function EditMeetup(props) {
  const location = useLocation();
  const history = useHistory();

  const currentMeetup = {
    id: location.state?.id,
    title: location.state?.title,
    address: location.state?.address,
    description: location.state?.description,
    image: location.state?.image,
  };

  function handleEditMeetup(meetupData) {
    fetch(
      `https://react-meetups-e5862-default-rtdb.firebaseio.com/meetups/${currentMeetup.id}.json`,
      {
        method: "PUT",
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
    <div>
      <Typography variant="h4" align="center" className="page-title">
        Edit Meetup
      </Typography>
      <EditMeetupForm
        onEditMeetup={handleEditMeetup}
        currentMeetup={currentMeetup}
      />
    </div>
  );
}

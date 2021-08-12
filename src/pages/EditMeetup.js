import React from "react";
import EditMeetupForm from "../components/meetups/EditMeetupForm";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function EditMeetup(props) {
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();

  const currentMeetup = {
    id: location.state?.id,
    title: location.state?.title,
    address: location.state?.address,
    description: location.state?.description,
    image: location.state?.image,
  };

  // const currentMeetup = async (meetups) => {
  //   const data = await fetch(
  //     `https://react-meetups-e5862-default-rtdb.firebaseio.com/meetups.json`
  //   );
  //   return data;
  // };
  // console.log(currentMeetup);

  const handleEditMeetup = async (meetupData) => {
    try {
      await fetch(
        `https://react-meetups-e5862-default-rtdb.firebaseio.com/meetups/${currentMeetup.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(meetupData), //what type if data to send
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(id);

  return (
    <div className="section-full">
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

import Card from "../ui/Card";
import { useState } from "react";
import { Container, TextField, Button, FormGroup } from "@material-ui/core";

export default function MeetupForm(props) {
  const [title, setTitle] = useState(false);
  const [image, setImage] = useState(false);
  const [address, setAddress] = useState(false);
  const [description, setDescription] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTitleError(false);
    setImageError(false);
    setAddressError(false);
    setDescriptionError(false);

    if (!title) {
      setTitleError(true);
    }
    if (!image) {
      setImageError(true);
    }
    if (!address) {
      setAddressError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }

    if (title && image && description && address) {
      const meetupData = {
        title: title,
        image: image,
        address: address,
        description: description,
      };

      console.log(meetupData);
      props.onAddMeetup(meetupData);
    }
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <form onSubmit={handleSubmit}>
          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup title"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meetup title..."
              variant="outlined"
              color="primary"
              error={titleError}
            />
          </FormGroup>

          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup image"
              type="url"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL..."
              color="primary"
              variant="outlined"
              error={imageError}
            />
          </FormGroup>

          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup address"
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter meetup address"
              color="primary"
              variant="outlined"
              error={addressError}
            />
          </FormGroup>

          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup description"
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter details about this meetup..."
              color="primary"
              variant="outlined"
              error={descriptionError}
            />
          </FormGroup>

          <div align="center">
            <Button type="submit" className="secondary">
              Add
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}

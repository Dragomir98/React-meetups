import Card from "../ui/Card";
import { useState, useRef, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { TextField, Container, Button, FormGroup } from "@material-ui/core";

export default function EditMeetupForm(props) {
  const [title, setTitle] = useState(props.currentMeetup.title);
  const [image, setImage] = useState(props.currentMeetup.image);
  const [address, setAddress] = useState(props.currentMeetup.address);
  const [description, setDescription] = useState(
    props.currentMeetup.description
  );
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  // useEffect(() => {
  //   const inputReset = () => {
  //     setTitle("");
  //   };
  // }, []);

  let titleRef = useRef(title).current;
  let imageRef = useRef(image).current;
  let addressRef = useRef(title).current;
  let descriptionRef = useRef(title).current;

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
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
      props.onEditMeetup(meetupData);
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
              error={titleError}
              color="primary"
              variant="outlined"
              defaultValue={title}
            />
            <span className="resetInput" onClick={() => setTitle("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup image"
              type="url"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL..."
              error={imageError}
              color="primary"
              variant="outlined"
              defaultValue={image}
            />
            <span className="resetInput" onClick={() => setImage("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup address"
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter meetup address..."
              error={addressError}
              color="primary"
              variant="outlined"
              defaultValue={address}
            />
            <span className="resetInput" onClick={() => setAddress("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <TextField
              className="form-input"
              label="Meetup description"
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter details about this meetup..."
              error={descriptionError}
              color="primary"
              variant="outlined"
              defaultValue={description}
            />
            <span className="resetInput" onClick={() => setDescription("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <div align="center">
            <Button type="submit" className="secondary">
              Edit
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}

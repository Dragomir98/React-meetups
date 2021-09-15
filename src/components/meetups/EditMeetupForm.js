import Card from "../ui/Card";
import CancelIcon from "@material-ui/icons/Cancel";
import { Container, Button, FormGroup } from "@material-ui/core";
import FormStates from "./FormStates";
import { useEffect } from "react";
import StyledInput from "../ui/StyledInput";

export default function EditMeetupForm(props) {
  const {
    title,
    setTitle,
    image,
    setImage,
    address,
    setAddress,
    description,
    setDescription,
    titleError,
    setTitleError,
    imageError,
    setImageError,
    addressError,
    setAddressError,
    descriptionError,
    setDescriptionError,
  } = FormStates();

  function handleSubmit(e) {
    e.preventDefault();

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

  useEffect(() => {
    setTitle(props.currentMeetup.title);
    setImage(props.currentMeetup.image);
    setDescription(props.currentMeetup.description);
    setAddress(props.currentMeetup.address);
  }, []);

  return (
    <Container maxWidth="sm">
      <Card>
        <form onSubmit={handleSubmit}>
          <FormGroup className="form-field">
            <StyledInput
              className="form-input"
              label="Meetup title"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meetup title..."
              error={titleError}
              color="primary"
              variant="outlined"
              value={title}
            />
            <span className="resetInput" onClick={() => setTitle("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <StyledInput
              className="form-input"
              label="Meetup image"
              type="url"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL..."
              error={imageError}
              color="primary"
              variant="outlined"
              value={image}
            />
            <span className="resetInput" onClick={() => setImage("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <StyledInput
              className="form-input"
              label="Meetup address"
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter meetup address..."
              error={addressError}
              color="primary"
              variant="outlined"
              value={address}
            />
            <span className="resetInput" onClick={() => setAddress("")}>
              <CancelIcon />
            </span>
          </FormGroup>
          <FormGroup className="form-field">
            <StyledInput
              className="form-input"
              label="Meetup description"
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter details about this meetup..."
              error={descriptionError}
              color="primary"
              variant="outlined"
              value={description}
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

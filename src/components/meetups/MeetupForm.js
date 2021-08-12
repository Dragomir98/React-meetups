import Card from "../ui/Card";
import { Container, Button, FormGroup } from "@material-ui/core";
import FormStates from "./FormStates";
import CancelIcon from "@material-ui/icons/Cancel";
import StyledInput from "../ui/StyledInput";

export default function MeetupForm(props) {
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
      props.onAddMeetup(meetupData);
    }
  }

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
              variant="outlined"
              color="primary"
              error={titleError}
            />
            <span
              className="resetInput"
              onClick={() => (document.getElementById("title").value = "")}
            >
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
              color="primary"
              variant="outlined"
              error={imageError}
            />
            <span
              className="resetInput"
              onClick={() => (document.getElementById("image").value = "")}
            >
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
              placeholder="Enter meetup address"
              color="primary"
              variant="outlined"
              error={addressError}
            />
            <span
              className="resetInput"
              onClick={() => (document.getElementById("address").value = "")}
            >
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
              color="primary"
              variant="outlined"
              error={descriptionError}
            />
            <span
              className="resetInput"
              onClick={() =>
                (document.getElementById("description").value = "")
              }
            >
              <CancelIcon />
            </span>
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

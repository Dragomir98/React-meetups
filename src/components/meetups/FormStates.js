import { useState } from "react";

const FormStates = () => {
  const [title, setTitle] = useState(false);
  const [image, setImage] = useState(false);
  const [address, setAddress] = useState(false);
  const [description, setDescription] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  return {
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
  };
};

export default FormStates;

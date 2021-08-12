import { TextField } from "@material-ui/core";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${(props) => props.theme.input};
  }
  & .MuiOutlinedInput-root {
    background-color: ${(props) => props.theme.input};

    & fieldset {
      color: ${(props) => props.theme.input};
    }

    & label {
      background: red;
    }

    &:hover fieldset {
      color: ${(props) => props.theme.input};
    }

    &.Mui-focused fieldset {
      color: ${(props) => props.theme.input};
    }

    &.Mui-focused fieldset {
      border-color: ${(props) => props.theme.input};
    }
  }

  & .MuiInputLabel-shrink {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};

    padding: 2px 5px;
    border-radius: 5px;
    z-index: 10;
  }
`;

export default StyledTextField;

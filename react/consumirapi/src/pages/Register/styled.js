import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;

    &:focus {
      outline: none;
      border-color: ${colors.primaryColor};
    }
  }
`;

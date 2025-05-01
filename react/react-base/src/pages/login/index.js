import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
    </Container>
  );
}

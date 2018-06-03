import React, { Component } from "react";
import { render } from "react-dom";
import styled, { injectGlobal, ThemeProvider } from "styled-components";

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
  }

  body {
    margin: 1em;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.main};
`;

const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.theme.bg};
`;

const Input = styled.input`
  border: solid 1px ${props => props.theme.main};
`;

const Button = styled.button`
  color: ${props => (props.primary ? props.theme.fg : props.theme.main)};
  background: ${props => (props.primary ? props.theme.main : props.theme.bg)};
  border: solid 1px ${props => props.theme.main};
  border-radius: 4px;
`;

const themes = [
  {
    name: "Styled Components",
    theme: {
      main: "palevioletred",
      bg: "papayawhip",
      fg: "white"
    }
  },
  {
    name: "React Page",
    theme: {
      main: "#61dafb",
      bg: "#20232a",
      fg: "black"
    }
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = themes[0];
  }

  setFirstTheme(event) {
    event.preventDefault();
    this.setState(() => themes[0]);
  }

  setSecondTheme(event) {
    event.preventDefault();
    this.setState(() => themes[1]);
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Title>Display theme "{this.state.name}"!</Title>
          <Input placeholder="Type.." />
          <Button primary onClick={this.setFirstTheme.bind(this)}>
            First
          </Button>
          <Button onClick={this.setSecondTheme.bind(this)}>Second</Button>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));

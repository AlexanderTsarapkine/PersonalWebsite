import React from 'react';

import '../assets/styles/homePage.css';

const allHellos = ['Hello.', 'привет.', 'أهلا.', 'Bonjour.', '你好.', 'Hola.', 'नमस्ते.'];


class HelloText extends React.Component {

  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {

    let hello = allHellos[this.state.textIdx % allHellos.length];
    return <h1>{hello}</h1>;
  }
}

  export default HelloText;
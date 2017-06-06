// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var timeLeft = this.state.secondsLeft
    if (timeLeft === 0){
      return <p>Boom!</p>
    } else

    return (

      <p>
        {timeLeft} seconds left before I go boom!
      </p>
    )
  }
}

export default Bomb;

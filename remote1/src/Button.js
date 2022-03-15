import React from 'libs/react';
import { useHistory } from 'libs/react-router-dom';

const Button = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return <button onClick={handleClick}>from remote app (Services): Go Back</button>;
};

export default Button;

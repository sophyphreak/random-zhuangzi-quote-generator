import React from 'react';
import { Button } from 'reactstrap';

const NewQuoteButton = (props) => (
  <Button 
    color="info"
    onClick={props.clickHandler}
  >New Quote</Button>
);

export default NewQuoteButton;
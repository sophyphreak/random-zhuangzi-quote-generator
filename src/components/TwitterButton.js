import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap';

export default class TwitterButton extends React.Component { 
  tweet (e) {
    let text = this.props.currentQuote.split(" ").join("%20").split(";").join("%3B");
    window.open('https://twitter.com/intent/tweet?text=' + text);
  };
  
  render() {
    
    return (
      <Button 
        onClick={(e) => this.tweet(e)}
        color="info"
        ><FontAwesomeIcon icon={faTwitter} /></Button>
    );
  }
};
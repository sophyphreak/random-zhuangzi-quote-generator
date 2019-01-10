import React from 'react';
import QuoteBox from './QuoteBox';
import TwitterButton from './TwitterButton';
import NewQuoteButton from './NewQuoteButton';
import quoteList from '../data/quoteList';

export default class Machine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentQuote: this.getRandomInt(0, quoteList.length)
    };
    this.getQuote = this.getQuote.bind(this);
    this.getQuoteNumber = this.getQuoteNumber.bind(this);
  };
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  getQuoteNumber (e) {
    this.setState({currentQuote: this.getRandomInt(0, quoteList.length)});
  };
  
  getQuote() {
    return quoteList[this.state.currentQuote]; 
  };
    
  render() {
    return (
      <div>
        <div className="zhuangzi Machine">
          <QuoteBox currentQuote={this.getQuote()}/>
          <div className="buttonBox justify-start">
            <TwitterButton currentQuote={this.getQuote()}/>
            <NewQuoteButton clickHandler={this.getQuoteNumber}/>
          </div>
        </div>
        <p className="who-is-zhuangzi"><a href="https://en.wikipedia.org/wiki/Zhuangzi_(book)" target="_blank" rel="noopener noreferrer">Who is Zhuangzi?</a></p>
      </div>
    );
  }
};
import React from 'react';
import Quote from './Quote';
import QuoteAttr from './QuoteAttr';

const QuoteBox = (props) => (
  <div className="Machine__child quoteBox">
    <Quote currentQuote={props.currentQuote}/>
    <QuoteAttr/>
  </div>
);

export default QuoteBox;
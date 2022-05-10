import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random?tags=technology,famous-quotes";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (
   
 



<div className="contact-info-text mb-md-70">
                        <div className="common-heading mb-30">
                           
                            <h2 className="title">Quote of the day</h2>
                        </div>
                        <h5>{author}</h5>
                        <p>
                        {content}
                        </p>
                        <button  className="main-btn mt-35" onClick={getNewQuote}>Next Quote </button>
                    </div> 

    
    
  );
};

export default Quotes;
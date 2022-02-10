import React, { useEffect, useState } from 'react';

export default function QuizPage() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quote, setQuote] = useState([]);
  
    useEffect(() => {
        fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
        .then(res => res.json())
        .then(
            function (quote) {
            setIsLoaded('true');
            console.log(quote);
            setQuote(quote);
          },
            (error) => {
                setIsLoaded('true');
                setError(error);
              }
        )
        
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <h1>Guess That Movie!</h1>
            <br></br>
          
          <p>{quote.quote}</p>
          <input type="text" name="answer" />
          <button type="submit">Submit Answer</button>
          </>
        );
        }
    }

async function winLose() {
  
}
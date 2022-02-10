import React, { useEffect, useState } from 'react';
import AnswerForm from '../../components/Answer/Answer';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function QuizPage() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quote, setQuote] = useState([]);
    const [answerForm, setAnswerForm] = useState([])
  
    useEffect(() => {
        fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
        .then(res => res.json())
        .then(
            function (quote, answer) {
            setIsLoaded('true');
            console.log(quote);
            setQuote(quote);
            setAnswerForm(answer)
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
          <br></br>

          {/* <p>{answer.answer}</p> */}

          </>
        );
        }
    }

    

// async function winLose() {
  
// }


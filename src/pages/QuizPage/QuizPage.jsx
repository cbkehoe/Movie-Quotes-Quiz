import React, { useEffect, useState } from 'react';
// import Answer from '../../components/Answer/Answer';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function QuizPage() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quote, setQuote] = useState([]);
    // const [answer, setAnswer] = useState([])
  
    useEffect(() => {
        fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
        .then(res => res.json())
        .then(
            function (quote, answer) {
            setIsLoaded('true');
            console.log(quote);
            setQuote(quote);
            // setAnswer(answer)
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
            <h1>Guess That Tilte!</h1>
            <br></br>
          
          <p>{quote.quote}</p>
          <br></br>

          <div>
<select id="select1">
    <option value="Mindhunter">Mindhunter</option>
    <option value="True Detective">True Detective</option>
    <option value="Soprano">The Sopranos</option>
    <option value="The Wire">The Wire</option>
    <option value="Sillicon Valley">Silicon Valley</option>
    <option value="The Office">The Office</option>
    <option value="Space Force">Space Force</option>
    <option value="Fargo">Fargo</option>
    <option value="Fargo S04">Fargo S04</option>
    <option value="Fargo S03">Fargo S03</option>
    <option value="Ozark">Ozark</option>
    <option value="Lucifer">Lucifer</option>
    <option value="American Psycho">American Psycho</option>
    <option value="The Machinist">The Machinist</option>
    <option value="God Father">The Godfather</option>
    <option value="The Silence Of The Lambs">The Silence Of The Lambs</option>
    <option value="Forrest Gump">Forrest Gump</option>
    <option value="Spiral From The Book Of Saw">Spiral From The Book Of Saw</option>
</select>
<button type="submit" onClick={() => handleWinLoss(quote.quote, quote.value)} >Submit Answer</button>
</div>


          </>
        );
        async function handleWinLoss(quote, value, show) {
          if (value === quote.show) {
            console.log("You Win!")
          } else {
            console.log("Sorry Wrong Answer")
          }
        }
        }
    }    
    

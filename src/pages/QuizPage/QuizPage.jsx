
import { is } from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import Show from '../../components/Show/Show';



export default function QuizPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);
  const [show, setShow] = useState(null)
  const [winner, setWinner] = useState(false)


  useEffect(() => {
    getMovieQuote()

  }, [])

  async function getMovieQuote() {
    fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
      .then(res => res.json())
      .then(
        function (quote, show) {
          setIsLoaded('true');
          console.log(quote);
          setQuote(quote);
          
        },
        (error) => {
          setIsLoaded('true');
          setError(error);
        }
      )
  }

  async function handleWinLoss() {
    if (quote.show === show) {
      setWinner(true)
    }

  }

  function handleChange(evt) {
    setShow(evt.target.value)
  }

  function resetGame(){
    setIsLoaded(false);
    setWinner(false);
    setError(null)
    getMovieQuote()
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (winner) {
    return (
      <> 
      
        <div>You Win</div>
        <button onClick={resetGame}>Play Again</button>
      </>
    )
  
  } else {
    return (
      <>
        <h1>Guess That Title!</h1>
        <br></br>

        <p>{quote.quote}</p>
        <br></br>

        <div>
          <select id="show"
            onChange={handleChange}
          >
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
          <button onClick={handleWinLoss} >Submit Answer</button>
        </div>


      </>
    );


  }
}
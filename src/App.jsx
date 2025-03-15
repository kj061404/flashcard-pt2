import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard.jsx'
import cards from './FlashcardData';

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState(""); // State to store user input
  const [feedback, setFeedback] = useState(""); // State for feedback
  const [streak, setStreak] = useState(0);
  const [longest, setLongest] = useState(0);



  const onNextClick = () => {
    if (index === 16) {
      setIndex(0);
      setFlipped(false);
      setUserAnswer("");
      setFeedback("");
      
    } else {
      setIndex(index + 1);
      setFlipped(false);
      setUserAnswer("");
      setFeedback("");
    }
  }

  const onBackClick = () => {
    if (index === 0) {
      setIndex(16);
      setFlipped(false);
      setUserAnswer("");
      setFeedback("");
    } else {
      setIndex(index - 1);
      setFlipped(false);
      setUserAnswer("");
      setFeedback("");
    }
  }

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userAnswer.trim().toLowerCase() === cards[index].answer.toLowerCase()) {
      setFeedback("✅ Correct!");
      setStreak(streak + 1);
      if (streak + 1 > longest) {
        setLongest(streak + 1);
      }
    } else {
      setFeedback(`❌ Incorrect! The correct answer is: ${cards[index].answer}`);
      setStreak(0);

    }
  };



  return (
    <div className='root'>
      <div className='app-container'>
        <h2>The All-around knowledge quiz!</h2>
        <h4>One question per difficulty: Easy, Medium, Hard, Impossible</h4>
        <h4>Easy: Green | Medium: Yellow | Hard: Orange | Impossible: Red</h4>
        <h4>Four subjects: Math, English, Science, History</h4>
        <h5>Number of cards: 16</h5>
        <h5>Current streak: {streak} | Longest streak: {longest}</h5>
        <Flashcard cardNumber={index}/>
        <div className='guessing'>
          <form onSubmit={handleSubmit}>
            <label for="answer">Guess the answer here: </label>
            <input type="text" id="answer" name="answer" placeholder="Place your answer here..." value={userAnswer} onChange={handleInputChange}></input>
            <button type='submit' className='submit-button'>Submit Guess</button>
          </form>
        </div>
        <div className='feedback'>{feedback}</div>
        <div className='navigation'>
          <button onClick={onBackClick} flipped={flipped} setFlipped={setFlipped}>⭠</button>
          <button onClick={onNextClick} flipped={flipped} setFlipped={setFlipped}>→</button>
        </div>
      </div>
    </div>
  );
}

export default App

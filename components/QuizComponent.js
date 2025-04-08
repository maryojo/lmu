import React, { useState, useEffect } from 'react'
import Quiz from 'react-quiz-component';


const QuizComponent = ({ quizTitle, questions, timeLimit, onStart, onQuizComplete, resetKey }) => {
    const [timeLeft, setTimeLeft] = useState(timeLimit || 120);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(null);
  
    // Convert Plasmic questions to react-quiz-component format
    const formattedQuizData = {
      quizTitle: quizTitle || "Custom Quiz",
      quizSynopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      questions: questions.map((q, index) => ({
        question: q.question_text,
        questionType: "text",
        answerSelectionType: "single",
        answers: q.options,
        correctAnswer: (q.options.indexOf(q.correct_answer) + 1).toString(),
        point: 10,
      })),
    };
  
    useEffect(() => {
      setQuizFinished(false);
      setScore(null);
      setTimeLeft(timeLimit || 120);
    }, [resetKey]);

    // useEffect(() => {
    //   setQuizFinished(false);
    //   setScore(null);
    // }, [resetKey]);
    

  // Timer Countdown
  // useEffect(() => {
  //   if (timeLeft > 0 && !quizFinished) {
  //     const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  //     return () => clearTimeout(timer);
  //   }
  //   if (timeLeft === 0) {
  //     setQuizFinished(true);
  //   }
  // }, [timeLeft, quizFinished]);

  useEffect(() => {
    const startBtn = document.querySelector('.startQuizBtn');
    if (startBtn) {
      const handleClick = () => {
        if (onStart) {
          onStart(); // Your Plasmic prop function
        }
      };
  
      startBtn.addEventListener('click', handleClick);
  
      return () => {
        startBtn.removeEventListener('click', handleClick);
      };
    }
  }, [resetKey]);  
  

  // Handle quiz completion
  const onComplete = (obj) => {
    setScore(obj.correctPoints);
    setQuizFinished(true);

    if (onQuizComplete) {
      onQuizComplete({
        totalScore: obj.correctPoints,
        totalPoints: obj.totalPoints,
      });
    }
  };
  
    return (
      <div className="p-4 border rounded-md shadow-md max-w-md mx-auto text-center">
        {!quizFinished ? (
            <>
            {/* <h3 className="text-lg font-bold">{formattedQuizData.quizTitle}</h3> */}
            <Quiz
                key={resetKey}
                quiz={formattedQuizData}
                shuffle={true}
                showInstantFeedback={false}
                showDefaultResult={false}
                timer={120}
                onComplete={onComplete}
                onStart={onStart}
            />
            </>
        ) : (
            <h2 className="text-xl font-bold">
            {score !== null
                ? `Your Score: ${(score/(formattedQuizData.questions.length * 10)*100).toFixed(1)}%`
                : "Time is up! Quiz ended."}
            </h2>
        )}
      </div>
    );
  }
  

export default QuizComponent
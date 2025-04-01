import React, { useState, useEffect } from 'react'
import Quiz from 'react-quiz-component';


const QuizComponent = ({ quizTitle, questions, timeLimit, onStart }) => {
    const [timeLeft, setTimeLeft] = useState(timeLimit || 120);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
  
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
  

  // Handle quiz completion
  const onComplete = (obj) => {
    setScore(obj.correctPoints);
    setQuizFinished(true);
  };
  
    return (
      <div className="p-4 border rounded-md shadow-md max-w-md mx-auto text-center">
        {!quizFinished ? (
            <>
            {/* <h3 className="text-lg font-bold">{formattedQuizData.quizTitle}</h3> */}
            <Quiz
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
                ? `Your Score: ${score} / ${formattedQuizData.questions.length}`
                : "Time is up! Quiz ended."}
            </h2>
        )}
      </div>
    );
  }
  

export default QuizComponent
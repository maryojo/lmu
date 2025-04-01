import React from 'react'
import Quiz from 'react-quiz-component';
import { registerComponent } from "@plasmicapp/host";
import { quiz } from '../data/quizzes/quiz'

const TestQuiz = () => {
  return (
    <div>
        <Quiz quiz={quiz}/>
    </div>
  )
}

// registerComponent(TestQuiz, {
//   name: "TestQuiz",
//   displayName: "Quiz a Component",
//   importPath: "./components/TestQuiz",
//   props: {},
// });


export default TestQuiz
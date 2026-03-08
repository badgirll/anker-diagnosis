"use client";

import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";
import { calculateResult, type CharacterType } from "@/lib/diagnosticData";

type Screen = "start" | "question" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<CharacterType | null>(null);

  const handleStart = () => {
    setScreen("question");
    setCurrentQuestion(1);
    setAnswers({});
  };

  const handleAnswer = (questionId: number, choiceId: string) => {
    const newAnswers = { ...answers, [questionId]: choiceId };
    setAnswers(newAnswers);

    if (questionId < 4) {
      setCurrentQuestion(questionId + 1);
    } else {
      const finalResult = calculateResult(newAnswers);
      setResult(finalResult);
      setScreen("result");
    }
  };

  const handleRestart = () => {
    setScreen("start");
    setCurrentQuestion(1);
    setAnswers({});
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {screen === "start" && <StartScreen onStart={handleStart} />}
      {screen === "question" && (
        <QuestionScreen
          questionNumber={currentQuestion}
          onAnswer={handleAnswer}
        />
      )}
      {screen === "result" && result && (
        <ResultScreen result={result} onRestart={handleRestart} />
      )}
    </main>
  );
}

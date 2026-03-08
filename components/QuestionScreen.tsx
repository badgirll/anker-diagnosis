import { questions } from "@/lib/diagnosticData";

interface QuestionScreenProps {
  questionNumber: number;
  onAnswer: (questionId: number, choiceId: string) => void;
}

export default function QuestionScreen({
  questionNumber,
  onAnswer,
}: QuestionScreenProps) {
  const question = questions.find((q) => q.id === questionNumber);

  if (!question) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#f5f5f5]">
      <div className="max-w-3xl w-full">
        <div className="mb-8 text-center">
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`h-2 w-16 transition-all duration-300 ${
                  num <= questionNumber
                    ? "bg-[#00a9e0]"
                    : "bg-[#e0e0e0]"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-[#666666]">
            質問 {questionNumber} / 4
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-md rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.choices.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => onAnswer(question.id, choice.id)}
                className="w-full text-left p-6 bg-white border border-[#e0e0e0] rounded-md hover:border-[#00a9e0] hover:shadow-md transition-all duration-200"
              >
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00a9e0] text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg font-medium text-[#1a1a1a] flex-grow">
                    {choice.text}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center min-h-screen bg-[#f5f5f5]">
      <div className="max-w-5xl w-full bg-white shadow-md overflow-hidden md:rounded-lg">
        {/* キービジュアル */}
        <div className="relative w-full">
          <picture>
            <source media="(max-width: 768px)" srcSet="/key-visual-sp.jpg" />
            <source media="(min-width: 769px)" srcSet="/key-visual.jpg" />
            <img
              src="/key-visual.jpg"
              alt="電源の処方箋 Ankerのタイプ診断"
              className="w-full h-auto"
            />
          </picture>
        </div>

        {/* コンテンツエリア */}
        <div className="p-8 md:p-12 text-center">
          <div className="bg-[#f5f5f5] p-6 mb-8 rounded-md">
            <p className="text-[#1a1a1a] mb-2 font-medium">
              たった4つの質問に答えるだけ！
            </p>
            <p className="text-sm text-[#666666]">
              所要時間：約1分
            </p>
          </div>
          <button
            onClick={onStart}
            className="anker-button text-white text-xl font-bold py-4 px-12 transition-all duration-200"
          >
            診断をはじめる
          </button>
        </div>
      </div>
    </div>
  );
}

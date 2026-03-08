import Image from "next/image";
import { characterResults, type CharacterType } from "@/lib/diagnosticData";

interface ResultScreenProps {
  result: CharacterType;
  onRestart: () => void;
}

const resultImageMap: Record<CharacterType, { pc: string; sp: string }> = {
  1: {
    pc: "/診断結果_スピードスター_PC.jpg",
    sp: "/診断結果_スピードスター_sp.jpg",
  },
  2: {
    pc: "/診断結果_ミニマリスト_PC.jpg",
    sp: "/診断結果_ミニマリスト_sp.jpg",
  },
  3: {
    pc: "/診断結果_心配性_PC.jpg",
    sp: "/診断結果_心配性_sp.jpg",
  },
  4: {
    pc: "/診断結果_本物志向_PC.jpg",
    sp: "/診断結果_本物志向_sp.jpg",
  },
};

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const character = characterResults[result];

  const handleDownloadImage = () => {
    const imageUrl = resultImageMap[result].sp;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop() || "anker-shindan-result.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTwitterShare = () => {
    const text = `Ankerのタイプ診断の結果：${character.title.replace(/\n/g, " ")}\n\n#Ankerのタイプ診断 #電源の処方箋 #充電器選び`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 py-12 bg-[#f5f5f5]">
      <div className="max-w-4xl w-full">
        <div className="bg-white p-8 md:p-12 shadow-md rounded-lg">
          <div className="text-center mb-8">
            {/* 診断結果画像 */}
            <div className="mb-6">
              <picture>
                <source media="(min-width: 769px)" srcSet={resultImageMap[result].pc} />
                <source media="(max-width: 768px)" srcSet={resultImageMap[result].sp} />
                <img
                  src={resultImageMap[result].pc}
                  alt={`診断結果: ${character.title}`}
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                />
              </picture>
            </div>

            {/* タイトルと説明（スマホ・PC両方に表示） */}
            <h3 className="text-lg md:text-3xl font-bold text-[#1a1a1a] mb-6 whitespace-pre-line">
              {character.title}
            </h3>
            <p className="text-sm md:text-base text-[#666666] leading-relaxed whitespace-pre-line">
              {character.description}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg md:text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
              あなたにぴったりの製品はこちら
            </h4>

            {character.chargers.length > 0 && (
              <div className="mb-6">
                <h5 className="text-xl font-bold text-[#00a9e0] mb-4 text-center md:text-left">
                  急速充電器
                </h5>
                <div className="space-y-4">
                  {character.chargers.map((charger) => (
                    <div
                      key={charger.model}
                      className="bg-white p-6 border border-[#e0e0e0] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={charger.imageUrl}
                            alt={charger.name}
                            width={128}
                            height={128}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <h6 className="font-bold text-[#1a1a1a] mb-2">
                            {charger.name}
                          </h6>
                          {charger.price && (
                            <p className="text-lg font-bold text-[#00a9e0] mb-2">
                              {charger.price}
                            </p>
                          )}
                          <p className="text-sm text-[#666666] mb-3">
                            {charger.reason}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                            <a
                              href={charger.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block anker-button px-6 py-2 text-sm font-medium"
                            >
                              詳細を見る
                            </a>
                            {charger.amazonUrl && (
                              <a
                                href={charger.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block anker-button-secondary px-6 py-2 text-sm font-medium"
                              >
                                Amazonで詳細を見る
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.batteries.length > 0 && (
              <div>
                <h5 className="text-xl font-bold text-[#00a9e0] mb-4 text-center md:text-left">
                  モバイルバッテリー
                </h5>
                <div className="space-y-4">
                  {character.batteries.map((battery) => (
                    <div
                      key={battery.model}
                      className="bg-white p-6 border border-[#e0e0e0] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={battery.imageUrl}
                            alt={battery.name}
                            width={128}
                            height={128}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <h6 className="font-bold text-[#1a1a1a] mb-2">
                            {battery.name}
                          </h6>
                          {battery.price && (
                            <p className="text-lg font-bold text-[#00a9e0] mb-2">
                              {battery.price}
                            </p>
                          )}
                          <p className="text-sm text-[#666666] mb-3">
                            {battery.reason}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                            <a
                              href={battery.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block anker-button px-6 py-2 text-sm font-medium"
                            >
                              詳細を見る
                            </a>
                            {battery.amazonUrl && (
                              <a
                                href={battery.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block anker-button-secondary px-6 py-2 text-sm font-medium"
                              >
                                Amazonで詳細を見る
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={onRestart}
              className="anker-button-gray font-bold py-3 px-8"
            >
              もう一度診断する
            </button>
            <button
              onClick={handleDownloadImage}
              className="anker-button font-bold py-3 px-8"
            >
              画像をダウンロード
            </button>
            <button
              onClick={handleTwitterShare}
              className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Xでシェア
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

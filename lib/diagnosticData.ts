export type CharacterType = 1 | 2 | 3 | 4;

export interface Choice {
  id: string;
  text: string;
  scores: Partial<Record<CharacterType, number>>;
}

export interface Question {
  id: number;
  question: string;
  choices: Choice[];
}

export interface Product {
  name: string;
  model: string;
  url: string;
  amazonUrl?: string;
  imageUrl: string;
  price?: string;
  reason: string;
}

export interface CharacterResult {
  id: CharacterType;
  title: string;
  description: string;
  chargers: Product[];
  batteries: Product[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "朝、スマホのバッテリーが20%だったら？",
    choices: [
      {
        id: "1a",
        text: "🚀 5分でいいから超急速充電！とにかく速く充電したい",
        scores: { 1: 3 },
      },
      {
        id: "1b",
        text: "🔋 モバイルバッテリーで移動中に充電！家を出てから充電すればOK",
        scores: { 2: 1, 3: 2 },
      },
      {
        id: "1c",
        text: "😌 低電力モードで粘る…まずはそのまま出かける",
        scores: { 3: 2, 4: 2 },
      },
    ],
  },
  {
    id: 2,
    question: "お出かけのときのバッグは？",
    choices: [
      {
        id: "2a",
        text: "👝 ポケットか小さなポシェット。必要最小限しか持たない",
        scores: { 2: 3 },
      },
      {
        id: "2b",
        text: "🎒 普通のリュックやトートバッグ。必要なものは一通り入れる",
        scores: { 3: 2 },
      },
      {
        id: "2c",
        text: "💼 PCも入る大きめバッグ。仕事道具も常に携帯したい",
        scores: { 1: 2, 4: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "カフェでのコンセント事情は？",
    choices: [
      {
        id: "3a",
        text: "🔌 コンセント席を1番に探す！作業するためにカフェにいく",
        scores: { 1: 2, 4: 2 },
      },
      {
        id: "3b",
        text: "✨ 自分のバッテリーがあるから不要。場所を選ばず自由に座る",
        scores: { 2: 2, 3: 1 },
      },
      {
        id: "3c",
        text: "😎 そもそも充電を気にしない。バッテリー持ちに自信あり",
        scores: { 3: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "ぶっちゃけ、充電し忘れる？",
    choices: [
      {
        id: "4a",
        text: "😭 寝落ちして朝絶望することが多い。よくケーブルなども忘れる",
        scores: { 3: 3 },
      },
      {
        id: "4b",
        text: "💯 常に100%に近い状態を保つ。几帳面に管理している",
        scores: { 1: 2, 4: 2 },
      },
      {
        id: "4c",
        text: "🤔 減ってきたら充電する。充電が減っても気にしない",
        scores: { 2: 2, 3: 1 },
      },
    ],
  },
];

export const characterResults: Record<CharacterType, CharacterResult> = {
  1: {
    id: 1,
    title: "効率派でシゴデキ！\nスピードスターなあなた",
    description:
      "あなたは時間を何よりも大切にする効率派！待つことがちょっと苦手で、5分10分の隙間時間があればサクッと充電を済ませたいタイプです。朝の準備も、充電も、すべてスピード重視。無駄な時間は1秒たりとも許したくない。そんなあなたには、急速充電ができるパワフルな製品がぴったりです！",
    chargers: [
      {
        name: "Anker Charger (140W, 4 Ports) with USB-C & USB-C ケーブル",
        model: "B2697",
        url: "https://www.ankerjapan.com/products/b2697",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DRD68WDZ?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/B2697-GRAY.jpg?v=1746141589",
        reason: "最大140Wの超パワフルな急速充電。持ち運びにも最適な最強充電器",
      },
      {
        name: "Anker Prime Charger (100W, 3 Ports, GaN)",
        model: "A2688",
        url: "https://www.ankerjapan.com/products/a2688",
        amazonUrl: "https://www.amazon.co.jp/dp/B0D73JBJ56?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A2688-SILVER.jpg?v=1722567319",
        reason: "最大100Wの超高速充電。複数デバイスを同時に急速充電可能",
      },
    ],
    batteries: [
      {
        name: "Anker Nano Power Bank (10000mAh, 45W, 巻取り式 USB-Cケーブル)",
        model: "A1638",
        url: "https://www.ankerjapan.com/products/a1638",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DNLVY85L?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22&th=1",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A1638N11.jpg?v=1760574549",
        reason: "ケーブル内蔵でサッと充電開始。忙しいあなたの時間を無駄にしません",
      },
    ],
  },
  2: {
    id: 2,
    title: "手ぶら至上主義！\nミニマリストなあなた",
    description:
      "あなたは身軽さを何よりも大切にする自由人！荷物は最小限、身につけるものはスマートに。充電器もコンパクトでスタイリッシュなものがお好み。そんなあなたには、小型・軽量・薄型の製品がぴったりです！",
    chargers: [
      {
        name: "Anker Nano Charger (35W, 巻取り式 USB-Cケーブル)",
        model: "A2658",
        url: "https://www.ankerjapan.com/products/a2658",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DPL7Q5WP?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A2658N11001.jpg?v=1758772030",
        reason: "ケーブルが巻き取り式で絡まない。これ1つでスッキリ充電",
      },
      {
        name: "Anker 511 Charger (Nano 3, 30W)",
        model: "A2147",
        url: "https://www.ankerjapan.com/products/a2147",
        amazonUrl: "https://www.amazon.co.jp/dp/B0B2QR8HN9?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/products/A2147N11.jpg?v=1700636728",
        reason: "極小サイズで持ち運び最強。ポケットにすっぽり収まる",
      },
    ],
    batteries: [
      {
        name: "Anker Nano Power Bank (22.5W, Built-In USB-C Connector)",
        model: "A1653",
        url: "https://www.ankerjapan.com/products/a1653",
        amazonUrl: "https://www.amazon.co.jp/dp/B0CCJFY2V4?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A1653011.jpg?v=1772162330",
        reason: "手のひらサイズで超軽量。カバンに入れても邪魔にならない",
      },
      {
        name: "Anker Nano Power Bank (5000mAh, MagGo, Slim)",
        model: "A1665",
        url: "https://www.ankerjapan.com/products/a1665",
        amazonUrl: "https://www.amazon.co.jp/dp/B0F6LBT3ZX?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A1665-BLACK.jpg?v=1756965288",
        reason: "iPhoneに磁石でピタッと貼り付け。ケーブル不要で究極にスマート",
      },
    ],
  },
  3: {
    id: 3,
    title: "忘れ物が不安！だけど充電も面倒！\n面倒くさがりさん・心配性なあなた",
    description:
      "あなたは準備万端にしたいけど、ちょっぴり面倒くさがり！「充電忘れて出かけちゃった…」「ケーブル忘れた…」という経験、ありますよね？いつもバッテリー残量が気になって、安心して過ごしたいと思っています。そんなあなたには、ケーブル巻取り式・充電器とバッテリーが一体化した製品がぴったりです！",
    chargers: [
      {
        name: "Anker Nano Charger (35W, 巻取り式 USB-Cケーブル)",
        model: "A2658",
        url: "https://www.ankerjapan.com/products/a2658",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DPL7Q5WP?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A2658N11001.jpg?v=1758772030",
        reason: "ケーブルが巻き取り式で持ち運び楽々。ケーブルを忘れる心配もなし！",
      },
    ],
    batteries: [
      {
        name: "Anker Power Bank (10000mAh, Fusion, Built-In USB-C ケーブル)",
        model: "A1637",
        url: "https://www.ankerjapan.com/products/a1637",
        amazonUrl: "https://www.amazon.co.jp/dp/B0CX4C1TVK?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A1637001.jpg?v=1718695129",
        reason:
          "充電器とモバイルバッテリーが1つに！コンセントに挿せば充電器、外せばバッテリーに。これ1つで安心",
      },
    ],
  },
  4: {
    id: 4,
    title: "とにかく最強なガジェットがほしい！\n妥協したくない、本物志向なあなたへ",
    description:
      "あなたは最高スペック・最新技術を追求するガジェット好き！スマホ、タブレット、PC、イヤホン…複数デバイスを同時に使いこなし、充電環境も妥協したくないタイプです。そんなあなたには、多ポート・大容量・多機能な最強製品がぴったりです！",
    chargers: [
      {
        name: "Anker Nano Charging Station (7-in-1, 100W, 巻取り式 USB-Cケーブル)",
        model: "A91C8",
        url: "https://www.ankerjapan.com/products/a91c8",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DPWW49HK?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A91C8_Main.png?v=1751615147",
        reason: "7ポート搭載の電源タップ型充電ステーション。デスク周りを完全制覇",
      },
      {
        name: "Anker Charger (140W, 4 Ports) with USB-C & USB-C ケーブル",
        model: "B2697",
        url: "https://www.ankerjapan.com/products/b2697",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DRD68WDZ?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/B2697-GRAY.jpg?v=1746141589",
        reason: "最大140Wの超パワフルな急速充電。持ち運びにも最適な最強充電器",
      },
    ],
    batteries: [
      {
        name: "Anker Power Bank (25000mAh, Built-In & 巻取り式USB-Cケーブル)",
        model: "A1695",
        url: "https://www.ankerjapan.com/products/a1695",
        amazonUrl: "https://www.amazon.co.jp/dp/B0DT4RGDSJ?m=A2Q9OW6QVJC5XE&tag=aoositmdtlpg-22",
        imageUrl: "https://www.ankerjapan.com/cdn/shop/files/A1695N11.jpg?v=1746153429",
        reason: "25,000mAhの大容量で、MacBook Airもフル充電。外出先でもフルパワー",
      },
    ],
  },
};

export function calculateResult(
  answers: Record<number, string>
): CharacterType {
  const scores: Record<CharacterType, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

  questions.forEach((question) => {
    const answerId = answers[question.id];
    const choice = question.choices.find((c) => c.id === answerId);
    if (choice) {
      Object.entries(choice.scores).forEach(([type, score]) => {
        scores[type as unknown as CharacterType] += score;
      });
    }
  });

  const maxScore = Math.max(...Object.values(scores));
  const tiedTypes = (Object.keys(scores) as unknown as CharacterType[]).filter(
    (type) => scores[type] === maxScore
  );

  if (tiedTypes.length === 1) {
    return tiedTypes[0];
  }

  const priority: CharacterType[] = [3, 2, 4, 1];
  for (const type of priority) {
    if (tiedTypes.includes(type)) {
      return type;
    }
  }

  return 1;
}

# Ankerのタイプ診断

Anker製品の購入を検討しているユーザー向けの診断ツールです。4つの質問に答えることで、あなたのライフスタイルに合った充電器・モバイルバッテリーをレコメンドします。

## 診断結果タイプ

1. **スピードスター** - 効率派でシゴデキなあなた
2. **ミニマリスト** - 手ぶら至上主義なあなた
3. **面倒くさがりさん・心配性** - 忘れ物が不安なあなた
4. **本物志向** - 妥協したくないガジェット好きなあなた

## 技術スタック

- **Next.js 16** - React フレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS 4** - ユーティリティファーストCSS
- **Vercel** - デプロイ & ホスティング

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
# プロダクションビルド
npm run build

# ビルドしたアプリの起動
npm start
```

## プロジェクト構成

```
anker-shindan/
├── app/
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # レイアウトコンポーネント
│   └── page.tsx           # メインページ
├── components/
│   ├── StartScreen.tsx    # スタート画面
│   ├── QuestionScreen.tsx # 質問画面
│   └── ResultScreen.tsx   # 診断結果画面
├── lib/
│   └── diagnosticData.ts  # 質問・スコアリング・製品データ
└── public/                # 静的ファイル（画像）
```

## ライセンス

ISC

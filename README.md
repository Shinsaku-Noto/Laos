# ラオス LP - Next.js

ラオスの観光写真を使った1ページのランディングページです。

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## Vercelへのデプロイ

1. [Vercel](https://vercel.com) にアカウントを作成（GitHubアカウントでログイン可能）

2. プロジェクトをGitHubにプッシュ
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. Vercelでプロジェクトをインポート
   - Vercelダッシュボードで「New Project」をクリック
   - GitHubリポジトリを選択
   - フレームワークプリセットは「Next.js」を選択
   - 「Deploy」をクリック

4. 自動的にデプロイが開始され、数分で完了します

または、Vercel CLIを使用する場合：

```bash
npm i -g vercel
vercel
```

## プロジェクト構造

```
.
├── app/
│   ├── layout.jsx      # ルートレイアウト
│   ├── page.jsx        # メインページ
│   └── globals.css     # グローバルスタイル
├── public/
│   └── image/          # 画像ファイル
├── package.json
├── next.config.js
└── README.md
```

## 技術スタック

- Next.js 14 (App Router)
- React 18
- CSS Modules (グローバルCSS)



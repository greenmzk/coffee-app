# Brew Day レシピカードをアプリに組み込む

このパッケージは、Brew Dayのレシピを1080 × 1080 pxのPNGにするための素材です。ブラウザのCanvasで描画し、外部ライブラリや画像のダウンロードは不要です。

| ファイル | 用途 |
| --- | --- |
| `brew-day-recipe-card.mjs` | 描画とPNG書き出し用のJavaScriptモジュール |
| `sample-recipes.json` | 日本語版・英語版の表示を確認するための入力データ |
| `Brew-Day-Instagram-Side-by-Side-Updated-JA.png` / `…-EN.png` | 完成見本 |

## Codexに渡す指示

ZIPを展開してBrew Dayのプロジェクトにフォルダを置き、以下をCodexに貼り付けてください。

> `Brew-Day-Codex-Import/README.md` と同フォルダの描画コード、サンプルJSON、完成見本PNGを確認し、既存のBrew Dayアプリのレシピ詳細から「画像を保存 / Save image」で1080 × 1080のPNGを出力できるようにしてください。  
> 入力は既存レシピを下記の形式に変換し、表示言語はアプリの現在の設定を使ってください。器具はIDから表示名に解決してください。注湯の時刻は抽出開始からの経過時間、湯量は各回に注いだ分です。蒸らしが別フィールドなら0行目にまとめ、重複を避けてください。フレーバーの未入力項目には値を補わず、すべて未入力ならチャートは省略してください。  
> 既存の保存形式を使い、画像出力のための変換はレシピを保存し直さずに実行してください。日本語と英語、ホットとアイス、注湯の累計、任意項目が空欄のレシピで出力を確認してください。

## JavaScript API

```js
import { createRecipeCardPng, renderRecipeCard } from './brew-day-recipe-card.mjs';

// 既存のレシピを下記の形式に変換したオブジェクトを渡します。
const png = await createRecipeCardPng(recipe, { language: 'ja' }); // Blob（image/png）

// アプリ内にプレビューを置く場合
renderRecipeCard(canvas, recipe, { language: 'en' });
```

言語は `ja` または `en`。見出しと日付の表記を切り替えます。豆の名前やメモなどの入力内容は入力した言語で表示されます。Canvasで使えるフォントにより、端末ごとに字形や折り返し位置が多少変わります。長い項目などがカードに収まらない場合はエラーを返すため、アプリ上でメッセージを表示してください。

## データの対応

| カードに渡すキー | 渡す値 |
| --- | --- |
| `title`, `roaster` | 豆・産地の表示名、焙煎所の名前 |
| `date`, `roasted` | 抽出日・焙煎日。両方とも `YYYY-MM-DD` |
| `serving` | `hot` または `iced`。省略時は氷の量が正ならアイス |
| `beans`, `water`, `ice` | 豆・湯・氷の重量。単位は g。 `water` を省略すると注湯手順の湯量から算出 |
| `temperature`, `duration` | 湯温は摂氏の数値、抽出時間は表示文字列（例 `2:45`） |
| `dripper`, `filter`, `grinder`, `grind`, `milk` | 器具、挽き目、ミルクの表示名。不要な項目は省略 |
| `pours` | 最大5件の配列。各要素は `{ time: "0:30", grams: 40 }`。レシピに蒸らしがある場合、先頭に置く |
| `flavor` | `aroma`, `acidity`, `sweetness`, `body`, `finish`。実際に記録された整数1〜5を渡す |
| `note` | メモ本文 |

過去のBrew Dayコードでは、豆名は `beanOrigin`、焙煎所は `roasterName`、焙煎日は `roastDate`、豆量は `beanWeight`、氷は `iceWeight`、湯温は `waterTemp`、抽出時間は `brewTime`、グラインダーは `mill`、メモは `notes`、ホット・アイスは `beverageType` の `Hot` / `Ice` でした。注湯量は `pours[].water`、蒸らし量は `bloomWater` です。実装時は作業先の現行コードに合わせてください。

通常のエクスポートでは、`Blob` をアプリのダウンロード処理に渡してください。既存PWAでオフライン書き出しを使う場合は、描画モジュールを既存のキャッシュ対象に含めてください。

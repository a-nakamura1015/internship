# reversi
## 概要
Google Apps Script でリバーシを作成するコンテンツ。
## 環境構築
1. package.jsonに記録されているパッケージをインストールする。
```
yarn install
```
2. clasp で Google アカウントにログインをして、作成した空のGASプロジェクトをクローンする。
```
clasp login
clasp clone **スクリプトID**
```
3. `clasp clone`を実行した際に生成される`.clasp.json`の内容を以下の通りに編集する。
```json
{
  "scriptId": "スクリプトID",
  "rootDir": "src"
}
```
4. 以下のコマンドを実行して、srcフォルダ内のファイルがGASのスクリプトエディタにアップデートできれば成功です。
```
clasp push
```

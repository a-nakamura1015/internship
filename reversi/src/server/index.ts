/**
 * ユーザーがアプリケーションにアクセスした際に実行される関数。
 * return {HtmlOutput} サニタライズされたHTML
 */
function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createTemplateFromFile('client/index').evaluate();
}

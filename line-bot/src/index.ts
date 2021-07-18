// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(e) {
  // 発生したイベントの情報
  const event = JSON.parse(e.postData.contents).events[0];

  // 返信先のメッセージを特定するトークン
  const replytoken = event.replyToken;
  if (typeof replytoken === 'undefined') {
    throw new Error('返信先が取得できませんでした。');
  }

  // Line の応答メッセージ
  const messages = [
    {
      type: 'text',
      text: event.message.text,
    },
  ];

  // Line の応答メッセージを送信するAPIのURL
  const url = 'https://api.line.me/v2/bot/message/reply';

  // Line Developers の Channel access token
  const channelAccessToken = 'XXXXXXXXXXXXXXXXX';

  // HTTPリクエストの種類(postは送信の命令)
  const method = 'post';

  // HTTP通信で送る内容
  const payload = {
    // 返信先のメッセージを特定するトークン
    replyToken: replytoken,
    // Line の応答メッセージ
    messages: messages,
  };

  // HTTP通信で送る内容を文字列にしたもの
  const strPayload = JSON.stringify(payload);

  // URL先から情報を取得する(HTTP通信に必要なURLとオプションを渡す)
  UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + channelAccessToken },
    contentType: 'application/json; charset=UTF-8',
    method: method,
    payload: strPayload,
  });

  // 処理が正常に終了したことを知らせる
  return ContentService.createTextOutput(JSON.stringify({ content: 'post ok' })).setMimeType(
    ContentService.MimeType.JSON
  );
}

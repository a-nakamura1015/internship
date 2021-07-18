// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTodaySchedules() {
  // 本日の日付を取得する
  const today = new Date();
  // 本日の予定を取得する
  const events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
  const schedules = [];
  for (let index = 0; index < events.length; index++) {
    const event = events[index];
    // イベントのタイトルを取得する
    const title = event.getTitle();
    // イベントの開始時刻を取得する
    const startTime = event.getStartTime();
    const strStartTime = covertStrDate(startTime);
    // イベントの終了時刻を取得する
    const endTime = event.getEndTime();
    const strEndTime = covertStrDate(endTime);
    const message = {
      type: 'text',
      text: title + '\n開始時刻 ' + strStartTime + '\n終了時刻 ' + strEndTime,
    };
    schedules.push(message);
  }
  if (schedules.length < 1) {
    // 本日の予定が１件もなかった場合
    const message = {
      type: 'text',
      text: '予定なし！',
    };
    schedules.push(message);
  }
  return schedules;
}

/**
 * 日付をHH:mm形式に変換する関数。
 * @param  {date} date 日付
 * @return {string}    HH:mm形式の時間の文字列
 */
function covertStrDate(date) {
  const hours = date.getHours();
  const minitues = date.getMinutes();
  return convertTwoDigits(hours) + ':' + convertTwoDigits(minitues);
}

/**
 * 数値を2桁の数字に変換する関数。
 * @param  {number} number 数値
 * @return {string}        2桁の数字
 */
function convertTwoDigits(digit) {
  // 数値の先頭に0をつけて文字列にする
  const digits = '0' + digit;
  // 後ろから2文字だけを返す
  return digits.slice(-2);
}

function relativeTime(time) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const seconds = (Date.now() - Date.parse(time)) / 1000;
  if (seconds < 60) {
    return rtf.format(Math.round(-seconds), "seconds");
  } else if (seconds < 60 * 60) {
    return rtf.format(Math.round(-seconds / 60), "minutes");
  } else if (seconds < 60 * 60 * 24) {
    return rtf.format(Math.round(-seconds / (60 * 24)), "hours");
  } else if (seconds > 60 * 60 * 24) {
    return rtf.format(Math.round(-seconds / (60 * 60 * 24)), "days");
  }
}

export default relativeTime;

export function wakeLock() {
  if (!navigator.wakeLock) {
    alert(
      'Your device does not support the Wake Lock API. Try on an Android phone or on a device running iOS 16.4 or higher!'
    );
  } else {
    navigator.wakeLock.request();
  }
}

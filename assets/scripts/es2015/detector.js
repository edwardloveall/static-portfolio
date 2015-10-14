class Detector {
  static setBodyClass() {
    let body = document.getElementsByTagName('body')[0];
    let browserName = bowser.name.toLowerCase();
    if (body.className === '') {
      body.className = browserName;
    } else {
      body.className += ' ' + browserName;
    }
  }
}

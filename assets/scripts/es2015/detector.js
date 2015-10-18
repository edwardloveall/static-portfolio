class Detector {
  static setBodyClass() {
    let body = document.getElementsByTagName('body')[0];

    if (this.isUnsupported(bowser.name, bowser.version)) {
      body.className = 'unsupported';
      return;
    }

    let browserName = bowser.name.toLowerCase();

    if (body.className === '') {
      body.className = browserName;
    } else {
      body.className += ' ' + browserName;
    }
  }

  static isUnsupported(name, version) {
    let floatVersion = parseFloat(version);
    if (name === "Internet Explorer" && floatVersion < 11) {
      return true;
    } else if (name === "Android" && floatVersion < 4.4) {
      return true;
    } else {
      return false;
    }
  }
}

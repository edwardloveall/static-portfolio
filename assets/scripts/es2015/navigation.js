class Navigation {
  constructor(selector) {
    this.navEle = document.querySelector(selector);
    this.track = this.navEle.children.item(0);
    this.attachListeners();
  }

  positionNav(link) {
    let translateX = this.calulatePrecentageOffset(link)
    this.track.style.transform = `translateX(${translateX}%)`;
  }

  calulatePrecentageOffset(link) {
    let left = link.offsetLeft;
    let halfWidth = link.offsetWidth / 2;

    return -100 * (left + halfWidth) / this.track.offsetWidth;
  }

  attachListeners() {
    var navLinks = this.track.children;
    for (var i = 0; i < navLinks.length; i++) {
      navLinks.item(i).addEventListener('click', (e) => {
        let link = e.target;
        this.positionNav(link);

        e.preventDefault();
      }, false);
    }
  }
}

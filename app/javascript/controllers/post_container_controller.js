import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['currentNumberLabel', 'item'];
  static values = { currentNumber: Number };
  // outletsが動かない。もし使えれば色々便利になりそう。
  // https://github.com/hotwired/stimulus/issues/618
  static outlets = ['item'];

  connect() {
    console.log("PostContainerController")
    this.currentNumberValue = 1 // 初期値
    this.currentNumberLabelTarget.innerText = 1
    console.log(this.itemTargets)
  }

  next() {
    console.log("next")
    ++this.currentNumberValue
    this.itemTargets.forEach((element, index) => {
      if (index + 1 == this.currentNumberValue) {
        element.classList.remove('d-none')
      } else {
        element.classList.add('d-none')
      }
    })
  }

  complete() {
    alert("完了")
    // ここでサーバにサブミットか
  }

  currentNumberValueChanged() {
    console.log("currentNumberValueChanged")
    this.currentNumberLabelTarget.textContent = this.currentNumberValue
  }
}

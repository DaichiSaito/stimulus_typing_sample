import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['input'];
  static values = { number: Number, spell: String, currentChar: String, currentSpell: String, isLast: Boolean };
  connect() {
    console.log('spell:', this.spellValue)
    this.currentCharValue = this.spellValue.slice(0, 1)
    console.log('isLast:', this.isLastValue)
  }

  done() {
    console.log("done")
    console.log(this.isLastValue)
    // 最後の問題だったら
    if (this.isLastValue) {
      console.log("呼ばれてる？")
      this.dispatch("complete", { detail: { number: this.numberValue } })
    } else {
      this.dispatch("next", { detail: { number: this.numberValue } })
    }
  }

  inputChanged(e) {
    console.log('currentChar:', this.currentCharValue)
    console.log('inputted:', e.target.value)
    console.log('e.target.value.slice(-1):', e.target.value.slice(-1))
    if (this.currentCharValue == e.target.value.slice(-1)) {
      console.log("あってる")
      this.currentSpellValue = e.target.value
      if (e.target.value == this.spellValue) {
        this.done()
      } else {
        console.log(this.spellValue.charAt(this.currentSpellValue.length))
        this.currentCharValue = this.spellValue.charAt(this.currentSpellValue.length)
      }
    } else {
      console.log("まちがってる")
      this.inputTarget.value = this.currentSpellValue
    }
  }

  numberValueChanged() {
    console.log("numberValueChanged")
    // this.viewTarget.textContent = this.numValue;
    // this.countTarget.value = this.numValue;
    // this.dispatch("changed", { detail: { content: this.numValue } })
  }
}

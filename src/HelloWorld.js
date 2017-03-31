class HelloWorld {
  constructor (targetElement) {
    this.placeHtmlElement = targetElement
  }

  message () {
    let now = new Date()
    this.placeHtmlElement.target.innerHTML = `<p> Hello !! <br /> from the HelloWorld.run method at <br />${now} /p>`
  }
}

export default HelloWorld

class HelloWorld {
  constructor (targetElement) {
    this.placeHtmlElement = targetElement
  }

  message () {
    this.placeHtmlElement.target.innerHTML = '<p> Hello World from the HelloWorld.run method !! </p>'
  }
}

export default HelloWorld

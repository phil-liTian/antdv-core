export function updateCss(css: string) {
  injectCss(css)
}

export function injectCss(css: string) {
  const styleNode = document.createElement('style')
  styleNode.innerHTML = css
  const container = getContainer()
  container.appendChild(styleNode)
}

function getContainer() {
  return document.body
}
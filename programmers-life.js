
  const code = document.querySelector('.code')
  code.innerHTML = repeat.toString()
    .split(/\n/)
    .map(line => `<p>${line}</p>`)
    .join('')



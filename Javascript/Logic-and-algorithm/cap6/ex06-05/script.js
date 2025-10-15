const inMessage = document.querySelector('#inMessage')
const btEncrypt = document.querySelector('#btEncrypt')
const btDecrypt = document.querySelector('#btDecrypt')

const message = inMessage.value

btEncrypt.addEventListener('click', () => {
  const message = inMessage.value

  if (message = '') {
    inMessage.focus
    return 'Digit a valid message'
  }
});

const telWhats = '+51910434749'

export const mapMessage = (data) => {
  const info = data.map((res) => {
    let message = ''
    message = `\n -${message + res.title}: ${res.price}$ `
    return message
  })
  let total = 0
  data.map((res) => (total = total + res.price))

  sendWhatsapp(info.toString(), total)
}

export const sendWhatsapp = (data, total) => {
  const msgwhatsapp = `Estas comprando en *Respuestos* deseas comprar:\n${data}\n\n *Total*: ${total}$ \n\n Siguenos en nuestro instagram: https://www.instagram.com/cocinasrubsan/?hl=es-la`
  const popup = window.open(
    'https://api.whatsapp.com/send?phone=' +
      telWhats +
      '&text=' +
      encodeURIComponent(msgwhatsapp),
    'WHATSAPP',
    'width=' +
      screen.width +
      ',height=' +
      screen.height +
      ',toolbar=0,resizable=1,scrollbars=no'
  )
  popup.focus()
}

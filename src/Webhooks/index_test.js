
const base64 = striing => {
  return Buffer.from(JSON.stringify(striing), 'base64').toString('utf8');
}

const hash = base64({
  "bot_id":1,
  "mensagem": "OI"
})

console.log(hash)
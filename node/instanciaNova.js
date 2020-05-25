// uma factory retorna uma nova instacia/ novo objeto
module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}

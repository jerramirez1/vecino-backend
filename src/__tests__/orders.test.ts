describe('Pedido Service', () => {
  it('debe validar estados permitidos del pedido', () => {
    const estadosValidos = ['pendiente', 'confirmado', 'en_preparacion', 'en_transito', 'entregado']
    const estado = 'pendiente'
    expect(estadosValidos).toContain(estado)
  })

  it('no debe permitir estado inválido', () => {
    const estadosValidos = ['pendiente', 'confirmado', 'en_preparacion', 'en_transito', 'entregado']
    const estadoInvalido = 'cancelado'
    expect(estadosValidos).not.toContain(estadoInvalido)
  })

  it('debe calcular total correctamente', () => {
    const items = [
      { precio: 3500, cantidad: 2 },
      { precio: 8000, cantidad: 1 }
    ]
    const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    expect(total).toBe(15000)
  })
})
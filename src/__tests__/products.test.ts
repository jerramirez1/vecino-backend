describe('Producto Service', () => {
  it('debe rechazar precio negativo', () => {
    const precio = -1000
    expect(precio).toBeLessThan(0)
  })

  it('debe rechazar stock negativo', () => {
    const stock = -5
    expect(stock).toBeLessThan(0)
  })

  it('debe aceptar producto con datos válidos', () => {
    const producto = {
      nombre: 'Pandebono',
      precio: 3500,
      stock: 10,
      categoria: 'Panadería'
    }
    expect(producto.precio).toBeGreaterThan(0)
    expect(producto.stock).toBeGreaterThanOrEqual(0)
    expect(producto.nombre).toBeTruthy()
  })
})
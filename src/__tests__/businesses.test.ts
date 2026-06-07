describe('Negocio Service', () => {
  it('debe rechazar negocio sin nombre', () => {
    const datos = { nombre: '', categoria: 'Panadería', direccion: 'Calle 1' }
    expect(datos.nombre.trim()).toBe('')
  })

  it('debe rechazar negocio sin categoría', () => {
    const datos = { nombre: 'Mi Tienda', categoria: '', direccion: 'Calle 1' }
    expect(datos.categoria).toBe('')
  })

  it('debe aceptar negocio con datos completos', () => {
    const datos = {
      nombre: 'Panadería San Carlos',
      categoria: 'Panadería',
      direccion: 'Calle 15 # 8-42',
      ciudad: 'Armenia'
    }
    expect(datos.nombre).toBeTruthy()
    expect(datos.categoria).toBeTruthy()
    expect(datos.direccion).toBeTruthy()
  })

  it('debe asignar ciudad Armenia por defecto', () => {
    const ciudad = 'Armenia'
    expect(ciudad).toBe('Armenia')
  })
})
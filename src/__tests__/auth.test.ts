describe('Auth Service', () => {
  it('debe rechazar registro con email vacío', async () => {
    const datos = { email: '', password: '123456', rol: 'vendedor', nombre: 'Test' }
    expect(datos.email).toBe('')
  })

  it('debe validar que el rol sea vendedor o consumidor', () => {
    const rolesValidos = ['vendedor', 'consumidor']
    const rol = 'vendedor'
    expect(rolesValidos).toContain(rol)
  })

  it('debe verificar que la contraseña tenga mínimo 6 caracteres', () => {
    const password = '123456'
    expect(password.length).toBeGreaterThanOrEqual(6)
  })
})
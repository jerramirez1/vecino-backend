import request from 'supertest'
import app from '../app'

describe('PI-01: Flujo de autenticación', () => {
  it('GET /health debe responder OK', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('OK')
  })
})

describe('PI-02: API de negocios', () => {
  it('GET /api/negocios debe retornar lista', async () => {
    const res = await request(app).get('/api/negocios')
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it('POST /api/negocios sin token debe retornar 401', async () => {
    const res = await request(app)
      .post('/api/negocios')
      .send({ nombre: 'Test', categoria: 'Tienda', direccion: 'Calle 1' })
    expect(res.status).toBe(401)
  })
})

describe('PI-03: Ciclo de pedido', () => {
  it('GET /api/pedidos sin token debe retornar 401', async () => {
    const res = await request(app).get('/api/pedidos')
    expect(res.status).toBe(401)
  })
})
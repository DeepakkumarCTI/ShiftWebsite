export const KEYS = {
  users: 'shift_users',
  session: 'shift_session',
  bookings: 'shift_bookings',
  enquiries: 'shift_enquiries',
  admin: 'shift_admin',
}

const safeParse = (value, fallback) => {
  try { return value ? JSON.parse(value) : fallback } catch { return fallback }
}

export const getData = (key, fallback = []) => safeParse(localStorage.getItem(key), fallback)
export const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const makeId = (prefix = 'SFT') => `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

export function seedData() {
  const users = getData(KEYS.users, null)
  if (!users) setData(KEYS.users, [])

  const bookings = getData(KEYS.bookings, null)
  if (!bookings) setData(KEYS.bookings, [])

  const enquiries = getData(KEYS.enquiries, null)
  if (!enquiries) setData(KEYS.enquiries, [])

  const admin = getData(KEYS.admin, null)
  if (!admin) setData(KEYS.admin, { email: 'admin@shift.com', password: 'admin123', name: 'SHIFT Admin' })
}

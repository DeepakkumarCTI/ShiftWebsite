import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getData, KEYS, makeId, seedData, setData } from '../utils/storage'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  seedData()
  const [users, setUsers] = useState(() => getData(KEYS.users))
  const [bookings, setBookings] = useState(() => getData(KEYS.bookings))
  const [enquiries, setEnquiries] = useState(() => getData(KEYS.enquiries))
  const [session, setSession] = useState(() => getData(KEYS.session, null))

  const saveUsers = (next) => { setUsers(next); setData(KEYS.users, next) }
  const saveBookings = (next) => { setBookings(next); setData(KEYS.bookings, next) }
  const saveEnquiries = (next) => { setEnquiries(next); setData(KEYS.enquiries, next) }

  const register = (payload) => {
    if (users.some((u) => u.email.toLowerCase() === payload.email.toLowerCase())) return { ok: false, message: 'An account with this email already exists.' }
    const user = { id: makeId('USR'), ...payload, createdAt: new Date().toISOString() }
    saveUsers([...users, user])
    setSession({ type: 'user', userId: user.id, name: user.name, email: user.email })
    setData(KEYS.session, { type: 'user', userId: user.id, name: user.name, email: user.email })
    return { ok: true }
  }

  const login = (email, password) => {
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!user) return { ok: false, message: 'Invalid email or password.' }
    const next = { type: 'user', userId: user.id, name: user.name, email: user.email }
    setSession(next); setData(KEYS.session, next)
    return { ok: true }
  }

  const adminLogin = (email, password) => {
    const admin = getData(KEYS.admin, { email: 'admin@shift.com', password: 'admin123', name: 'SHIFT Admin' })
    if (email.toLowerCase() !== admin.email.toLowerCase() || password !== admin.password) return { ok: false, message: 'Invalid admin credentials.' }
    const next = { type: 'admin', name: admin.name, email: admin.email }
    setSession(next); setData(KEYS.session, next)
    return { ok: true }
  }

  const logout = () => { setSession(null); localStorage.removeItem(KEYS.session) }

  const createBooking = (payload) => {
    const booking = { id: makeId('SFT'), status: 'Pending', createdAt: new Date().toISOString(), ...payload }
    saveBookings([booking, ...bookings])
    return booking
  }

  const updateBookingStatus = (id, status) => saveBookings(bookings.map((b) => b.id === id ? { ...b, status, updatedAt: new Date().toISOString() } : b))
  const createEnquiry = (payload) => {
    const enquiry = { id: makeId('ENQ'), status: 'Pending', createdAt: new Date().toISOString(), ...payload }
    saveEnquiries([enquiry, ...enquiries])
    return enquiry
  }
  const updateEnquiryStatus = (id, status) => saveEnquiries(enquiries.map((e) => e.id === id ? { ...e, status, updatedAt: new Date().toISOString() } : e))

  const myBookings = useMemo(() => {
    if (session?.type !== 'user') return []
    return bookings.filter((b) => b.userId === session.userId || b.email?.toLowerCase() === session.email?.toLowerCase())
  }, [bookings, session])

  const value = { users, bookings, enquiries, session, register, login, adminLogin, logout, createBooking, updateBookingStatus, createEnquiry, updateEnquiryStatus, myBookings }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)

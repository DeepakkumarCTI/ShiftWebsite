import { createContext, useContext, useMemo, useState } from 'react'
import {
  getData,
  KEYS,
  makeId,
  seedData,
  setData,
} from '../utils/storage'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  seedData()

  const [users, setUsers] = useState(() => getData(KEYS.users))
  const [bookings, setBookings] = useState(() => getData(KEYS.bookings))
  const [enquiries, setEnquiries] = useState(() => getData(KEYS.enquiries))
  const [session, setSession] = useState(() => getData(KEYS.session, null))

  // --------------------------------------------------
  // SAVE HELPERS
  // --------------------------------------------------

  const saveUsers = (next) => {
    setUsers(next)
    setData(KEYS.users, next)
  }

  const saveBookings = (next) => {
    setBookings(next)
    setData(KEYS.bookings, next)
  }

  const saveEnquiries = (next) => {
    setEnquiries(next)
    setData(KEYS.enquiries, next)
  }

  // --------------------------------------------------
  // CUSTOMER REGISTER
  // --------------------------------------------------

  const register = (payload) => {
    const emailExists = users.some(
      (u) =>
        u.email?.toLowerCase() === payload.email?.toLowerCase()
    )

    if (emailExists) {
      return {
        ok: false,
        message: 'An account with this email already exists.',
      }
    }

    const user = {
      id: makeId('USR'),
      ...payload,
      createdAt: new Date().toISOString(),
    }

    saveUsers([...users, user])

    const next = {
      type: 'user',
      userId: user.id,
      name: user.name,
      email: user.email,
    }

    setSession(next)
    setData(KEYS.session, next)

    return {
      ok: true,
    }
  }

  // --------------------------------------------------
  // CUSTOMER LOGIN
  // --------------------------------------------------

  const login = (email, password) => {
    const user = users.find(
      (u) =>
        u.email?.toLowerCase() === email?.trim().toLowerCase() &&
        u.password === password
    )

    if (!user) {
      return {
        ok: false,
        message: 'Invalid email or password.',
      }
    }

    const next = {
      type: 'user',
      userId: user.id,
      name: user.name,
      email: user.email,
    }

    setSession(next)
    setData(KEYS.session, next)

    return {
      ok: true,
    }
  }

  // --------------------------------------------------
  // ADMIN LOGIN
  // --------------------------------------------------

  const adminLogin = (email, password) => {
    const admin = getData(KEYS.admin, null)

    if (!admin) {
      return {
        ok: false,
        message:
          'Admin account is not configured. Please create an admin account first.',
      }
    }

    const enteredEmail = email?.trim().toLowerCase()
    const storedEmail = admin.email?.trim().toLowerCase()

    if (
      enteredEmail !== storedEmail ||
      password !== admin.password
    ) {
      return {
        ok: false,
        message: 'Invalid admin credentials.',
      }
    }

    const next = {
      type: 'admin',
      name: admin.name || 'SHIFT Admin',
      email: admin.email,
    }

    setSession(next)
    setData(KEYS.session, next)

    return {
      ok: true,
    }
  }

  // --------------------------------------------------
  // ADMIN ACCOUNT SETUP
  // --------------------------------------------------

  const createAdmin = (payload) => {
    const existingAdmin = getData(KEYS.admin, null)

    if (existingAdmin) {
      return {
        ok: false,
        message: 'An admin account already exists.',
      }
    }

    if (!payload.email || !payload.password) {
      return {
        ok: false,
        message: 'Email and password are required.',
      }
    }

    const admin = {
      id: makeId('ADM'),
      name: payload.name || 'SHIFT Admin',
      email: payload.email.trim(),
      password: payload.password,
      createdAt: new Date().toISOString(),
    }

    setData(KEYS.admin, admin)

    return {
      ok: true,
      admin,
    }
  }

  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------

  const logout = () => {
    setSession(null)
    localStorage.removeItem(KEYS.session)
  }

  // --------------------------------------------------
  // CREATE BOOKING
  // --------------------------------------------------

  const createBooking = (payload) => {
    const booking = {
      id: makeId('SFT'),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      ...payload,
    }

    saveBookings([booking, ...bookings])

    return booking
  }

  // --------------------------------------------------
  // UPDATE BOOKING STATUS
  // --------------------------------------------------

  const updateBookingStatus = (id, status) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? {
            ...booking,
            status,
            updatedAt: new Date().toISOString(),
          }
        : booking
    )

    saveBookings(updatedBookings)
  }

  // --------------------------------------------------
  // CREATE ENQUIRY
  // --------------------------------------------------

  const createEnquiry = (payload) => {
    const enquiry = {
      id: makeId('ENQ'),
      status: 'Pending',
      createdAt: new Date().toISOString(),
      ...payload,
    }

    saveEnquiries([enquiry, ...enquiries])

    return enquiry
  }

  // --------------------------------------------------
  // UPDATE ENQUIRY STATUS
  // --------------------------------------------------

  const updateEnquiryStatus = (id, status) => {
    const updatedEnquiries = enquiries.map((enquiry) =>
      enquiry.id === id
        ? {
            ...enquiry,
            status,
            updatedAt: new Date().toISOString(),
          }
        : enquiry
    )

    saveEnquiries(updatedEnquiries)
  }

  // --------------------------------------------------
  // CUSTOMER BOOKINGS
  // --------------------------------------------------

  const myBookings = useMemo(() => {
    if (session?.type !== 'user') {
      return []
    }

    return bookings.filter(
      (booking) =>
        booking.userId === session.userId ||
        booking.email?.toLowerCase() ===
          session.email?.toLowerCase()
    )
  }, [bookings, session])

  // --------------------------------------------------
  // CONTEXT VALUE
  // --------------------------------------------------

  const value = {
    users,
    bookings,
    enquiries,
    session,

    register,
    login,

    adminLogin,
    createAdmin,

    logout,

    createBooking,
    updateBookingStatus,

    createEnquiry,
    updateEnquiryStatus,

    myBookings,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
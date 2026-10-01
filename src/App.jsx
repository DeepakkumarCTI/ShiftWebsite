import { Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLogin from './pages/AdminLogin'
import NotFound from './pages/NotFound'

import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminBookings from './pages/admin/AdminBookings'
import AdminEnquiries from './pages/admin/AdminEnquiries'
import AdminUsers from './pages/admin/AdminUsers'


function AppContent() {
  const location = useLocation()

  /*
    Pages that should NOT display the main Navbar/Footer
  */
  const hideNavbarFooter =
    location.pathname === '/login' ||
    location.pathname === '/admin-login' ||
    location.pathname === '/admin' ||
    location.pathname.startsWith('/admin/')

  return (
    <div className="min-h-screen bg-[#f7f8ff] text-slate-800">

      {/* Navbar hidden on Login and Admin pages */}
      {!hideNavbarFooter && <Navbar />}

      <main>
        <Routes>

          {/* ================= CUSTOMER PAGES ================= */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          {/* ================= CUSTOMER LOGIN ================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />


          {/* ================= ADMIN LOGIN ================= */}

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />


          {/* ================= ADMIN PANEL ================= */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute admin>
                <AdminLayout />
              </ProtectedRoute>
            }
          >

            <Route
              index
              element={<AdminDashboard />}
            />

            <Route
              path="bookings"
              element={<AdminBookings />}
            />

            <Route
              path="enquiries"
              element={<AdminEnquiries />}
            />

            <Route
              path="users"
              element={<AdminUsers />}
            />

          </Route>


          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* Footer hidden on Login and Admin pages */}
      {!hideNavbarFooter && <Footer />}

    </div>
  )
}


export default function App() {
  return (
    <AppProvider>

      <ScrollToTop />

      <AppContent />

    </AppProvider>
  )
}
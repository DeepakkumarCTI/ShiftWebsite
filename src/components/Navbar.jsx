import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useApp } from '../context/AppContext'

const links = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/contact', 'Contact'],
  ['/booking', 'Booking'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const { session, logout } = useApp()
  const navigate = useNavigate()

  const navClass = ({ isActive }) =>
    `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive
      ? 'bg-white/15 text-white shadow-inner shadow-white/5'
      : 'text-slate-300 hover:bg-white/10 hover:text-white'
    }`

  const signOut = () => {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-[#08111f] via-[#101b32] to-[#172554] shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl">

      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}

      <div className="mx-auto flex min-h-[58px] w-full max-w-[1600px] items-center justify-between px-3 sm:min-h-[66px] sm:px-5 lg:min-h-[76px] lg:px-10 xl:px-14">

        {/* =========================================================
            LOGO
        ========================================================== */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 lg:gap-3"
        >

          {/* LOGO IMAGE */}

          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105 sm:h-12 sm:w-12 lg:h-16 lg:w-16">

            <img
              src="/images/logo.png"
              alt="SHIFT Packers and Movers"
              className="h-full w-full object-contain"
            />

          </div>


          {/* BRAND */}

          <div className="min-w-0">

            <div className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-[15px] font-black leading-none tracking-tight text-transparent sm:text-[17px] lg:text-[20px]">
              SHIFT
            </div>

            <div className="mt-0.5 text-[6px] font-bold uppercase tracking-[0.16em] text-slate-300 sm:mt-1 sm:text-[7px] sm:tracking-[0.2em] lg:text-[9px] lg:tracking-[0.25em]">
              Packers &amp; Movers
            </div>

          </div>

        </Link>


        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================== */}

        <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:flex">

          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={navClass}
            >
              {({ isActive }) => (
                <span className="relative block">

                  {label}

                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 shadow-[0_0_10px_rgba(251,146,60,0.7)]" />
                  )}

                </span>
              )}
            </NavLink>
          ))}

        </nav>


        {/* =========================================================
            DESKTOP ACTIONS
        ========================================================== */}

        <div className="hidden items-center gap-2.5 lg:flex">

          {/* ADMIN LOGGED IN */}

          {session?.type === 'admin' ? (
            <Link
              to="/admin"
              className="rounded-xl border border-orange-400/30 bg-orange-400/10 px-5 py-2.5 text-sm font-bold text-orange-300 transition-all duration-300 hover:border-orange-300/50 hover:bg-orange-400/20 hover:text-orange-200"
            >
              Admin Panel
            </Link>
          ) : session?.type === 'user' ? (

            /* CUSTOMER LOGGED IN */

            <>
              <Link
                to="/my-bookings"
                className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/30 hover:bg-orange-400/10 hover:text-orange-300"
              >
                My Bookings
              </Link>

              <button
                type="button"
                onClick={signOut}
                className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Logout
              </button>
            </>

          ) : (

            /* GUEST */

            <>
              <Link
                to="/login"
                className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Login
              </Link>


              {/* ADMIN LOGIN ICON */}

              <Link
                to="/admin-login"
                title="Admin Login"
                aria-label="Admin Login"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-300"
              >

                <span className="relative flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110">

                  <span className="absolute top-0 h-2.5 w-2.5 rounded-full border-2 border-current" />

                  <span className="absolute bottom-0 h-3 w-5 rounded-t-full border-2 border-current border-b-0" />

                </span>

              </Link>


              {/* BOOKING */}

              <Link
                to="/booking"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >

                <span className="relative z-10">
                  Book a Move
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />

              </Link>

            </>
          )}

        </div>


        {/* =========================================================
            MOBILE ACTIONS
        ========================================================== */}

        <div className="flex items-center gap-1.5 lg:hidden">

          {/* MOBILE BOOK BUTTON */}

          {!session && (
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="hidden rounded-md bg-gradient-to-r from-orange-500 to-amber-300 px-2.5 py-1.5 text-[10px] font-bold text-slate-950 shadow-md shadow-orange-500/20 sm:block"
            >
              Book
            </Link>
          )}


          {/* =======================================================
              MOBILE ADMIN ICON
          ======================================================== */}

          {!session && (
            <Link
              to="/admin-login"
              onClick={() => setOpen(false)}
              title="Admin Login"
              aria-label="Admin Login"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] text-slate-300 shadow-sm transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-400/10 hover:text-orange-300 sm:h-10 sm:w-10 sm:rounded-xl"
            >

              <span className="relative flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5">

                {/* HEAD */}

                <span className="absolute top-0 h-2 w-2 rounded-full border-[1.5px] border-current" />

                {/* BODY */}

                <span className="absolute bottom-0 h-2.5 w-4 rounded-t-full border-[1.5px] border-current border-b-0" />

              </span>

            </Link>
          )}


          {/* =======================================================
              MOBILE MENU BUTTON
          ======================================================== */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] shadow-sm transition-all duration-300 hover:border-orange-400/30 hover:bg-white/10 sm:h-10 sm:w-10 sm:rounded-xl"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >

            <span className="flex flex-col gap-1.5">

              <span
                className={`block h-0.5 w-4 rounded-full bg-white transition-all duration-300 sm:w-5 ${open ? 'translate-y-2 rotate-45' : ''
                  }`}
              />

              <span
                className={`block h-0.5 w-4 rounded-full bg-white transition-all duration-300 sm:w-5 ${open ? 'opacity-0' : ''
                  }`}
              />

              <span
                className={`block h-0.5 w-4 rounded-full bg-white transition-all duration-300 sm:w-5 ${open ? '-translate-y-2 -rotate-45' : ''
                  }`}
              />

            </span>

          </button>

        </div>

      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      {open && (
        <div className="border-t border-white/10 bg-gradient-to-b from-[#101b32] via-[#111c35] to-[#172554] px-3 pb-4 pt-3 shadow-[0_20px_40px_rgba(2,6,23,0.35)] sm:px-4 sm:pb-5 sm:pt-4 lg:hidden">

          {/* MOBILE BRAND */}

          <div className="mb-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] p-2.5 sm:mb-4 sm:gap-3 sm:rounded-2xl sm:p-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-10 sm:w-10 sm:rounded-xl">

              <img
                src="/images/logo.png"
                alt="SHIFT Packers and Movers"
                className="h-full w-full object-contain"
              />

            </div>

            <div>

              <div className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-base font-black leading-none text-transparent sm:text-lg">
                SHIFT
              </div>

              <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:mt-1 sm:text-[8px] sm:tracking-[0.2em]">
                Packers &amp; Movers
              </div>

            </div>

          </div>


          {/* MOBILE NAV LINKS */}

          <nav className="flex flex-col gap-1">

            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm ${isActive
                    ? 'border-orange-400/20 bg-gradient-to-r from-orange-500/15 to-amber-300/10 text-orange-300 shadow-sm'
                    : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}


            {/* =======================================================
                MOBILE ACCOUNT ACTIONS
            ======================================================== */}

            <div className="mt-1.5 border-t border-white/10 pt-3 sm:mt-2 sm:pt-4">

              {session?.type === 'user' ? (

                <div className="flex flex-col gap-1">

                  <Link
                    to="/my-bookings"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:border-orange-400/20 hover:bg-orange-400/10 hover:text-orange-300 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    My Bookings
                  </Link>

                  <button
                    type="button"
                    onClick={signOut}
                    className="rounded-lg px-3 py-2.5 text-left text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Logout
                  </button>

                </div>

              ) : session?.type === 'admin' ? (

                <Link
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-gradient-to-r from-orange-500 to-amber-300 px-3 py-2.5 text-center text-xs font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                >
                  Admin Panel
                </Link>

              ) : (

                <div className="flex flex-col gap-1.5 sm:gap-2">

                  {/* ADMIN LOGIN */}

                  <Link
                    to="/admin-login"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg border border-orange-400/20 bg-orange-400/10 px-3 py-2.5 text-center text-xs font-bold text-orange-300 transition-all hover:border-orange-400/40 hover:bg-orange-400/15 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >

                    <span className="relative flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">

                      <span className="absolute top-0 h-1.5 w-1.5 rounded-full border-[1.5px] border-current sm:h-2 sm:w-2" />

                      <span className="absolute bottom-0 h-2 w-3.5 rounded-t-full border-[1.5px] border-current border-b-0 sm:h-2.5 sm:w-4" />

                    </span>

                    Admin Login

                  </Link>


                  {/* CUSTOMER LOGIN */}

                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-center text-xs font-bold text-slate-200 transition-all hover:border-orange-400/30 hover:bg-orange-400/10 hover:text-orange-300 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Customer Login
                  </Link>


                  {/* BOOKING */}

                  <Link
                    to="/booking"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-3 py-2.5 text-center text-xs font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Book a Move
                  </Link>

                </div>

              )}

            </div>

          </nav>

        </div>
      )}

    </header>
  )
}
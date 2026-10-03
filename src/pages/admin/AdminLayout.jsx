import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../../context/AppContext'

export default function AdminLayout() {
    const { logout } = useApp()
    const navigate = useNavigate()
    const location = useLocation()

    const links = [
        {
            to: '/admin',
            label: 'Dashboard',
        },
        {
            to: '/admin/bookings',
            label: 'Bookings',
        },
        {
            to: '/admin/enquiries',
            label: 'Enquiries',
        },
        {
            to: '/admin/users',
            label: 'Customers',
        },
    ]

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-gradient-to-br from-[#F7F8FF] via-white to-violet-50/40">

            {/* =====================================
                ADMIN TOP HEADER
            ====================================== */}
            <header className="sticky left-0 right-0 top-0 z-40 w-full border-b border-white/10 bg-gradient-to-r from-[#07111F] via-[#101B32] to-[#172554] shadow-[0_8px_30px_rgba(15,23,42,0.15)]">

                <div className="mx-auto flex min-h-[72px] w-full min-w-0 items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">

                    {/* BRAND */}
                    <motion.button
                        type="button"
                        onClick={() => navigate('/admin')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex min-w-0 flex-1 items-center gap-3 text-left"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 p-1.5 shadow-lg backdrop-blur-md sm:h-12 sm:w-12">
                            <img
                                src="/images/logo.png"
                                alt="SHIFT"
                                className="h-full w-full object-contain"
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none'
                                }}
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-orange-400 sm:text-[10px]">
                                SHIFT
                            </p>

                            <p className="truncate text-sm font-black text-white sm:text-base">
                                Admin Control Center
                            </p>
                        </div>
                    </motion.button>

                    {/* DESKTOP ACTIONS */}
                    <div className="hidden shrink-0 items-center gap-3 sm:flex">

                       

                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                            Back to Website
                        </button>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/30"
                        >
                            Logout
                        </button>
                    </div>

                    {/* MOBILE LOGOUT */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="shrink-0 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-extrabold text-white transition-all duration-300 hover:bg-white/15 sm:hidden"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* =====================================
                MOBILE NAVIGATION
            ====================================== */}
            <div className="sticky left-0 right-0 top-[72px] z-30 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl lg:hidden">

                <div className="w-full overflow-x-auto px-3 py-2.5 sm:px-5">
                    <nav className="flex w-max min-w-full gap-2">
                        {links.map((link, index) => (
                            <MobileNavItem
                                key={link.to}
                                {...link}
                                index={index}
                            />
                        ))}
                    </nav>
                </div>
            </div>

            {/* =====================================
                MAIN AREA
            ====================================== */}
            <main className="mx-auto w-full min-w-0 max-w-[1600px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">

                {/* PAGE TITLE AREA */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="mb-5 hidden items-center justify-between lg:flex"
                >
                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-500">
                            SHIFT ADMINISTRATION
                        </p>

                        <h1 className="mt-1 text-xl font-black text-slate-900">
                            Manage your relocation platform
                        </h1>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                    >
                        View Website
                    </button>
                </motion.div>

                {/* DESKTOP LAYOUT */}
                <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[245px_minmax(0,1fr)]">

                    {/* SIDEBAR */}
                    <aside className="hidden h-fit min-w-0 lg:block">
                        <div className="sticky top-[96px] space-y-4">

                            {/* NAVIGATION */}
                            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-soft">

                                <div className="mb-3 px-3 pt-2">
                                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                                        Navigation
                                    </p>
                                </div>

                                <nav className="grid gap-1.5">
                                    {links.map((link, index) => (
                                        <DesktopNavItem
                                            key={link.to}
                                            {...link}
                                            index={index}
                                        />
                                    ))}
                                </nav>
                            </div>

                            {/* ADMIN PROFILE CARD */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.2,
                                }}
                                className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#4C1D95] p-5 text-white shadow-[0_15px_40px_rgba(76,29,149,0.16)]"
                            >
                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-black backdrop-blur-md">
                                        A
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-extrabold">
                                            Administrator
                                        </p>

                                        <p className="truncate text-[10px] text-white/45">
                                            SHIFT Control Center
                                        </p>
                                    </div>
                                </div>

                                

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="mt-3 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 text-[10px] font-extrabold text-white transition-all duration-300 hover:bg-white/15"
                                >
                                    Sign Out
                                </button>
                            </motion.div>
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <section className="min-w-0 w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -8,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                                className="w-full min-w-0"
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </section>
                </div>
            </main>

            {/* =====================================
                MOBILE BACK TO WEBSITE
            ====================================== */}
            <div className="w-full border-t border-slate-100 bg-white px-3 py-4 sm:px-4 lg:hidden">
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-600 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                >
                    ← Back to Website
                </button>
            </div>
        </div>
    )
}

/* =========================================
   DESKTOP NAV ITEM
========================================= */

function DesktopNavItem({
    to,
    label,
    index,
}) {
    return (
        <NavLink
            to={to}
            end={to === '/admin'}
            className={({ isActive }) =>
                `group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-violet-600'
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: index * 0.05,
                        }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[10px] font-black transition-all duration-300 ${isActive
                                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                                : 'bg-slate-100 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600'
                            }`}
                    >
                        {index + 1}
                    </motion.div>

                    <span className="flex-1">
                        {label}
                    </span>

                    {isActive && (
                        <motion.span
                            layoutId="admin-active-indicator"
                            className="absolute right-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-l-full bg-gradient-to-b from-violet-500 to-fuchsia-500"
                        />
                    )}
                </>
            )}
        </NavLink>
    )
}

/* =========================================
   MOBILE NAV ITEM
========================================= */

function MobileNavItem({
    to,
    label,
}) {
    return (
        <NavLink
            to={to}
            end={to === '/admin'}
            className={({ isActive }) =>
                `relative shrink-0 rounded-xl px-4 py-2.5 text-[11px] font-extrabold whitespace-nowrap transition-all duration-300 ${isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20'
                    : 'bg-slate-100 text-slate-500'
                }`
            }
        >
            {label}
        </NavLink>
    )
}
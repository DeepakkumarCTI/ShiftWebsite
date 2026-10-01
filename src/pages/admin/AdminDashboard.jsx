import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

export default function AdminDashboard() {
    const navigate = useNavigate()
    const { users, bookings, enquiries } = useApp()

    const confirmed = bookings.filter(
        (item) => item.status === 'Confirmed'
    ).length

    const pending = bookings.filter(
        (item) => item.status === 'Pending'
    ).length

    const rejected = bookings.filter(
        (item) => item.status === 'Rejected'
    ).length

    const completed = bookings.filter(
        (item) => item.status === 'Completed'
    ).length

    const dashboardCards = [
        {
            title: 'Customers',
            value: users.length,
            description: 'Registered accounts',
            route: '/admin/users',
            label: 'View Customers',
            accent: 'violet',
        },
        {
            title: 'Bookings',
            value: bookings.length,
            description: 'Total requests',
            route: '/admin/bookings',
            label: 'Manage Bookings',
            accent: 'blue',
        },
        {
            title: 'Pending',
            value: pending,
            description: 'Awaiting review',
            route: '/admin/bookings',
            label: 'Review Requests',
            accent: 'orange',
        },
        {
            title: 'Confirmed',
            value: confirmed,
            description: 'Approved requests',
            route: '/admin/bookings',
            label: 'View Confirmed',
            accent: 'green',
        },
    ]

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* =========================
          DASHBOARD HERO
      ========================== */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#4C1D95] p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:p-7 lg:p-8"
            >
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
                            SHIFT ADMIN
                        </p>

                        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                            Dashboard Overview
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                            Monitor customers, relocation bookings and enquiries from
                            one organized dashboard.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="grid grid-cols-2 gap-2 sm:gap-3"
                    >
                        <MiniStat
                            label="Enquiries"
                            value={enquiries.length}
                        />

                        <MiniStat
                            label="Completed"
                            value={completed}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* =========================
          MAIN STAT CARDS
      ========================== */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                {dashboardCards.map((card, index) => (
                    <DashboardCard
                        key={card.title}
                        {...card}
                        index={index}
                        onClick={() => navigate(card.route)}
                    />
                ))}
            </div>

            {/* =========================
          QUICK STATUS
      ========================== */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
                <QuickStatus
                    label="Pending"
                    value={pending}
                    color="orange"
                    onClick={() => navigate('/admin/bookings')}
                />

                <QuickStatus
                    label="Confirmed"
                    value={confirmed}
                    color="green"
                    onClick={() => navigate('/admin/bookings')}
                />

                <QuickStatus
                    label="Rejected"
                    value={rejected}
                    color="red"
                    onClick={() => navigate('/admin/bookings')}
                />

                <QuickStatus
                    label="Completed"
                    value={completed}
                    color="blue"
                    onClick={() => navigate('/admin/bookings')}
                />
            </motion.div>

            {/* =========================
          RECENT DATA
      ========================== */}
            <div className="grid gap-5 xl:grid-cols-2">

                {/* RECENT BOOKINGS */}
                <Panel
                    title="Recent Bookings"
                    subtitle="Latest customer relocation requests"
                    count={bookings.length}
                    actionLabel="View All"
                    onAction={() => navigate('/admin/bookings')}
                >
                    {bookings.length === 0 ? (
                        <EmptyState message="No booking requests yet." />
                    ) : (
                        <div className="space-y-1">
                            {bookings.slice(0, 6).map((booking, index) => (
                                <DataRow
                                    key={booking.id}
                                    index={index}
                                    id={booking.id}
                                    main={booking.service || 'Relocation Service'}
                                    sub={`${booking.pickup || 'Pickup'} → ${booking.destination || 'Destination'
                                        }`}
                                    status={booking.status}
                                    onClick={() => navigate('/admin/bookings')}
                                />
                            ))}
                        </div>
                    )}
                </Panel>

                {/* RECENT ENQUIRIES */}
                <Panel
                    title="Recent Enquiries"
                    subtitle="Latest customer enquiries"
                    count={enquiries.length}
                    actionLabel="View All"
                    onAction={() => navigate('/admin/enquiries')}
                >
                    {enquiries.length === 0 ? (
                        <EmptyState message="No enquiries yet." />
                    ) : (
                        <div className="space-y-1">
                            {enquiries.slice(0, 6).map((enquiry, index) => (
                                <DataRow
                                    key={enquiry.id}
                                    index={index}
                                    id={enquiry.id}
                                    main={enquiry.subject || 'General Enquiry'}
                                    sub={`${enquiry.name || 'Customer'}${enquiry.email
                                            ? ` · ${enquiry.email}`
                                            : ''
                                        }`}
                                    status={enquiry.status || 'Pending'}
                                    onClick={() => navigate('/admin/enquiries')}
                                />
                            ))}
                        </div>
                    )}
                </Panel>
            </div>

            {/* =========================
          QUICK ACTIONS
      ========================== */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 p-5 sm:p-6"
            >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-500">
                            QUICK ACTIONS
                        </p>

                        <h2 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                            Manage SHIFT operations
                        </h2>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                            Access customer accounts, bookings and enquiries quickly.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                        <QuickAction
                            label="Customers"
                            onClick={() => navigate('/admin/users')}
                        />

                        <QuickAction
                            label="Bookings"
                            onClick={() => navigate('/admin/bookings')}
                        />

                        <QuickAction
                            label="Enquiries"
                            onClick={() => navigate('/admin/enquiries')}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

/* =========================================
   DASHBOARD CARD
========================================= */

function DashboardCard({
    title,
    value,
    description,
    label,
    accent,
    index,
    onClick,
}) {
    const accentStyles = {
        violet: {
            bg: 'from-violet-50 to-white',
            text: 'text-violet-600',
            border: 'border-violet-100',
            line: 'bg-violet-500',
        },
        blue: {
            bg: 'from-blue-50 to-white',
            text: 'text-blue-600',
            border: 'border-blue-100',
            line: 'bg-blue-500',
        },
        orange: {
            bg: 'from-orange-50 to-white',
            text: 'text-orange-600',
            border: 'border-orange-100',
            line: 'bg-orange-500',
        },
        green: {
            bg: 'from-emerald-50 to-white',
            text: 'text-emerald-600',
            border: 'border-emerald-100',
            line: 'bg-emerald-500',
        },
    }

    const style = accentStyles[accent]

    return (
        <motion.button
            type="button"
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -5,
                scale: 1.015,
            }}
            whileTap={{
                scale: 0.98,
            }}
            className={`group relative overflow-hidden rounded-3xl border ${style.border} bg-gradient-to-br ${style.bg} p-4 text-left shadow-soft transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(76,29,149,0.10)] sm:p-5 lg:p-6`}
        >
            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                        {title}
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.2 }}
                        className={`mt-2 text-3xl font-black ${style.text} sm:text-4xl`}
                    >
                        {value}
                    </motion.p>
                </div>

                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.bg} border ${style.border} ${style.text} text-xs font-black transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-11 sm:w-11`}
                >
                    {title.charAt(0)}
                </div>
            </div>

            <p className="mt-2 text-[11px] leading-4 text-slate-400 sm:text-xs">
                {description}
            </p>

            <div className="mt-4 flex items-center justify-between gap-2">
                <span
                    className={`text-[10px] font-extrabold ${style.text} sm:text-xs`}
                >
                    {label}
                </span>

                <span
                    className={`text-sm ${style.text} transition-transform duration-300 group-hover:translate-x-1`}
                >
                    →
                </span>
            </div>

            <div
                className={`absolute bottom-0 left-0 h-1 w-0 ${style.line} transition-all duration-500 group-hover:w-full`}
            />
        </motion.button>
    )
}

/* =========================================
   MINI STAT
========================================= */

function MiniStat({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
            <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/45">
                {label}
            </p>

            <p className="mt-1 text-xl font-black text-white sm:text-2xl">
                {value}
            </p>
        </div>
    )
}

/* =========================================
   QUICK STATUS
========================================= */

function QuickStatus({
    label,
    value,
    color,
    onClick,
}) {
    const colors = {
        orange:
            'border-orange-100 bg-orange-50 text-orange-600',
        green:
            'border-emerald-100 bg-emerald-50 text-emerald-600',
        red:
            'border-red-100 bg-red-50 text-red-600',
        blue:
            'border-blue-100 bg-blue-50 text-blue-600',
    }

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-lg ${colors[color]}`}
        >
            <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] opacity-60">
                {label}
            </p>

            <p className="mt-1 text-2xl font-black sm:text-3xl">
                {value}
            </p>
        </motion.button>
    )
}

/* =========================================
   PANEL
========================================= */

function Panel({
    title,
    subtitle,
    count,
    actionLabel,
    onAction,
    children,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-white p-4 shadow-soft sm:p-6"
        >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-slate-100 pb-4 sm:mb-5">

                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                            {title}
                        </h2>

                        <span className="rounded-full bg-violet-50 px-2 py-1 text-[9px] font-extrabold text-violet-600">
                            {count}
                        </span>
                    </div>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                        {subtitle}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onAction}
                    className="shrink-0 rounded-lg bg-slate-50 px-2.5 py-2 text-[10px] font-bold text-violet-600 transition hover:bg-violet-50 sm:px-3"
                >
                    {actionLabel}
                </button>
            </div>

            {children}
        </motion.div>
    )
}

/* =========================================
   DATA ROW
========================================= */

function DataRow({
    id,
    main,
    sub,
    status,
    index,
    onClick,
}) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: index * 0.06,
                duration: 0.3,
            }}
            whileHover={{
                x: 4,
            }}
            className="group flex w-full items-center gap-3 rounded-2xl border border-transparent px-2 py-3 text-left transition-all duration-300 hover:border-violet-100 hover:bg-violet-50/50 sm:px-3"
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-orange-50 text-[10px] font-black text-violet-600 transition-transform duration-300 group-hover:scale-110">
                S
            </div>

            <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-extrabold text-slate-800 sm:text-sm">
                    {main}
                </p>

                <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-xs">
                    {id} · {sub}
                </p>
            </div>

            <StatusBadge status={status} />

            <span className="hidden text-sm text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500 sm:block">
                →
            </span>
        </motion.button>
    )
}

/* =========================================
   STATUS BADGE
========================================= */

function StatusBadge({ status }) {
    const styles = {
        Pending:
            'bg-orange-50 text-orange-600 border-orange-100',
        Confirmed:
            'bg-emerald-50 text-emerald-600 border-emerald-100',
        Rejected:
            'bg-red-50 text-red-600 border-red-100',
        Completed:
            'bg-blue-50 text-blue-600 border-blue-100',
    }

    return (
        <span
            className={`shrink-0 rounded-lg border px-2 py-1 text-[9px] font-extrabold ${styles[status] ||
                'border-slate-100 bg-slate-50 text-slate-500'
                }`}
        >
            {status || 'Pending'}
        </span>
    )
}

/* =========================================
   EMPTY STATE
========================================= */

function EmptyState({ message }) {
    return (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-600">
                S
            </div>

            <p className="mt-3 text-xs font-semibold text-slate-500">
                {message}
            </p>
        </div>
    )
}

/* =========================================
   QUICK ACTION
========================================= */

function QuickAction({ label, onClick }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-violet-100 bg-white px-4 py-2.5 text-xs font-extrabold text-violet-600 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50"
        >
            {label}
        </motion.button>
    )
}
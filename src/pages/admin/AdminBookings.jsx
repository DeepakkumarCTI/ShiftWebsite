import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'

export default function AdminBookings() {
    const { bookings, updateBookingStatus } = useApp()

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

    const stats = useMemo(() => {
        return {
            total: bookings.length,
            pending: bookings.filter((b) => b.status === 'Pending').length,
            confirmed: bookings.filter((b) => b.status === 'Confirmed').length,
            rejected: bookings.filter((b) => b.status === 'Rejected').length,
            completed: bookings.filter((b) => b.status === 'Completed').length,
        }
    }, [bookings])

    const filteredBookings = useMemo(() => {
        const query = search.trim().toLowerCase()

        return bookings.filter((booking) => {
            const matchesStatus =
                filter === 'All' || booking.status === filter

            const matchesSearch =
                !query ||
                booking.id?.toLowerCase().includes(query) ||
                booking.name?.toLowerCase().includes(query) ||
                booking.email?.toLowerCase().includes(query) ||
                booking.phone?.toLowerCase().includes(query) ||
                booking.service?.toLowerCase().includes(query) ||
                booking.pickup?.toLowerCase().includes(query) ||
                booking.destination?.toLowerCase().includes(query)

            return matchesStatus && matchesSearch
        })
    }, [bookings, search, filter])

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* PAGE HEADER */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#4C1D95] p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:p-7 lg:p-8">
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
                            SHIFT ADMIN
                        </p>

                        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                            Booking Management
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                            Review customer booking requests, manage their status and
                            keep relocation operations organized.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                            Total Bookings
                        </p>
                        <p className="mt-1 text-3xl font-black text-white">
                            {stats.total}
                        </p>
                    </div>
                </div>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <StatCard
                    label="Total"
                    value={stats.total}
                    active={filter === 'All'}
                    onClick={() => setFilter('All')}
                />

                <StatCard
                    label="Pending"
                    value={stats.pending}
                    active={filter === 'Pending'}
                    onClick={() => setFilter('Pending')}
                    accent="orange"
                />

                <StatCard
                    label="Confirmed"
                    value={stats.confirmed}
                    active={filter === 'Confirmed'}
                    onClick={() => setFilter('Confirmed')}
                    accent="green"
                />

                <StatCard
                    label="Rejected"
                    value={stats.rejected}
                    active={filter === 'Rejected'}
                    onClick={() => setFilter('Rejected')}
                    accent="red"
                />

                <StatCard
                    label="Completed"
                    value={stats.completed}
                    active={filter === 'Completed'}
                    onClick={() => setFilter('Completed')}
                    accent="blue"
                />
            </div>

            {/* SEARCH + FILTER */}
            <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-soft sm:p-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search by booking ID, customer, email, phone or service..."
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {['All', 'Pending', 'Confirmed', 'Rejected', 'Completed'].map(
                            (status) => (
                                <button
                                    key={status}
                                    type="button"
                                    onClick={() => setFilter(status)}
                                    className={`rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-300 sm:px-4 ${filter === status
                                            ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                                            : 'bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-600'
                                        }`}
                                >
                                    {status}
                                </button>
                            )
                        )}
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <p className="text-xs font-medium text-slate-400">
                        Showing{' '}
                        <span className="font-bold text-slate-700">
                            {filteredBookings.length}
                        </span>{' '}
                        booking{filteredBookings.length !== 1 ? 's' : ''}
                    </p>

                    {(search || filter !== 'All') && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch('')
                                setFilter('All')
                            }}
                            className="text-xs font-bold text-violet-600 transition hover:text-violet-800"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* BOOKINGS */}
            <Panel title="Customer Bookings">
                {filteredBookings.length === 0 ? (
                    <Empty search={search} filter={filter} />
                ) : (
                    <div className="space-y-4">
                        {filteredBookings.map((booking, index) => (
                            <BookingCard
                                key={booking.id}
                                booking={booking}
                                index={index}
                                updateBookingStatus={updateBookingStatus}
                            />
                        ))}
                    </div>
                )}
            </Panel>
        </div>
    )
}

/* --------------------------------
   STAT CARD
--------------------------------- */

function StatCard({
    label,
    value,
    active,
    onClick,
    accent = 'violet',
}) {
    const accentClasses = {
        violet: 'text-violet-600 bg-violet-50 border-violet-100',
        orange: 'text-orange-600 bg-orange-50 border-orange-100',
        green: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        red: 'text-red-600 bg-red-50 border-red-100',
        blue: 'text-blue-600 bg-blue-50 border-blue-100',
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${active
                    ? accentClasses[accent]
                    : 'border-slate-100 bg-white text-slate-600 shadow-soft'
                }`}
        >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-60">
                {label}
            </p>

            <p className="mt-2 text-2xl font-black sm:text-3xl">
                {value}
            </p>

            <div
                className={`mt-3 h-1 w-10 rounded-full ${active ? 'bg-current' : 'bg-slate-200'
                    }`}
            />
        </button>
    )
}

/* --------------------------------
   BOOKING CARD
--------------------------------- */

function BookingCard({
    booking,
    index,
    updateBookingStatus,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.35,
                delay: index * 0.04,
            }}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-violet-200 hover:shadow-[0_14px_40px_rgba(76,29,149,0.08)]"
        >
            {/* TOP */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-violet-50/40 p-4 sm:p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg bg-violet-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-violet-600">
                                {booking.id}
                            </span>

                            <StatusBadge status={booking.status} />
                        </div>

                        <h3 className="mt-3 text-lg font-extrabold text-slate-900 sm:text-xl">
                            {booking.service || 'Relocation Service'}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                            Booking request submitted by customer
                        </p>
                    </div>

                    <div className="shrink-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Booking Date
                        </p>

                        <p className="mt-1 text-sm font-extrabold text-slate-700">
                            {booking.date || 'Not provided'}
                        </p>
                    </div>
                </div>
            </div>

            {/* BODY */}
            <div className="p-4 sm:p-5">

                {/* CUSTOMER */}
                <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-500">
                        Customer Information
                    </p>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        <InfoItem
                            label="Customer"
                            value={booking.name || 'Not provided'}
                        />

                        <InfoItem
                            label="Email"
                            value={booking.email || 'Not provided'}
                        />

                        <InfoItem
                            label="Phone"
                            value={booking.phone || 'Not provided'}
                        />
                    </div>
                </div>

                {/* ROUTE */}
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <LocationCard
                        label="Pickup Location"
                        value={booking.pickup || 'Not provided'}
                    />

                    <LocationCard
                        label="Destination"
                        value={booking.destination || 'Not provided'}
                    />
                </div>

                {/* ACTIONS */}
                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Update Booking Status
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Select a status to update this request.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[
                            'Pending',
                            'Confirmed',
                            'Rejected',
                            'Completed',
                        ].map((status) => (
                            <button
                                key={status}
                                type="button"
                                onClick={() =>
                                    updateBookingStatus(booking.id, status)
                                }
                                className={`rounded-xl px-3 py-2 text-[11px] font-extrabold transition-all duration-300 sm:px-4 sm:py-2.5 ${booking.status === status
                                        ? getActiveStatusClass(status)
                                        : 'bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-600'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

/* --------------------------------
   INFO ITEM
--------------------------------- */

function InfoItem({ label, value }) {
    return (
        <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {label}
            </p>

            <p className="mt-1 truncate text-xs font-bold text-slate-700 sm:text-sm">
                {value}
            </p>
        </div>
    )
}

/* --------------------------------
   LOCATION CARD
--------------------------------- */

function LocationCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xs font-black text-violet-600">
                    {label === 'Pickup Location' ? 'P' : 'D'}
                </div>

                <div className="min-w-0">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        {label}
                    </p>

                    <p className="mt-1 break-words text-sm font-bold leading-5 text-slate-700">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}

/* --------------------------------
   STATUS BADGE
--------------------------------- */

function StatusBadge({ status }) {
    const classes = {
        Pending: 'bg-orange-50 text-orange-600 border-orange-100',
        Confirmed: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        Rejected: 'bg-red-50 text-red-600 border-red-100',
        Completed: 'bg-blue-50 text-blue-600 border-blue-100',
    }

    return (
        <span
            className={`rounded-lg border px-2.5 py-1 text-[10px] font-extrabold ${classes[status] ||
                'border-slate-100 bg-slate-50 text-slate-500'
                }`}
        >
            {status || 'Unknown'}
        </span>
    )
}

/* --------------------------------
   ACTIVE STATUS BUTTON
--------------------------------- */

function getActiveStatusClass(status) {
    const classes = {
        Pending:
            'bg-orange-500 text-white shadow-lg shadow-orange-500/20',
        Confirmed:
            'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20',
        Rejected:
            'bg-red-500 text-white shadow-lg shadow-red-500/20',
        Completed:
            'bg-blue-500 text-white shadow-lg shadow-blue-500/20',
    }

    return classes[status] || 'bg-violet-600 text-white'
}

/* --------------------------------
   PANEL
--------------------------------- */

function Panel({ title, children }) {
    return (
        <div className="rounded-3xl bg-white p-4 shadow-soft sm:p-6">
            <div className="mb-5 flex flex-col gap-1 border-b border-slate-100 pb-4 sm:mb-6">
                <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {title}
                </h2>

                <p className="text-xs text-slate-400">
                    Manage and monitor all customer relocation booking requests.
                </p>
            </div>

            {children}
        </div>
    )
}

/* --------------------------------
   EMPTY STATE
--------------------------------- */

function Empty({ search, filter }) {
    const isFiltered = search || filter !== 'All'

    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-5 py-14 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-xl font-black text-violet-600">
                S
            </div>

            <h3 className="mt-5 text-base font-extrabold text-slate-800">
                {isFiltered
                    ? 'No matching bookings'
                    : 'No booking requests yet'}
            </h3>

            <p className="mt-2 max-w-md text-xs leading-5 text-slate-400 sm:text-sm">
                {isFiltered
                    ? 'Try changing the search text or selecting a different booking status.'
                    : 'Customer booking requests will appear here once they submit a relocation request.'}
            </p>
        </div>
    )
}
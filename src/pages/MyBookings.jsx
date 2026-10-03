import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

export default function MyBookings() {
    const { myBookings } = useApp()
    const [q, setQ] = useState('')

    const list = useMemo(() => {
        return myBookings.filter((booking) =>
            `${booking.id} ${booking.service} ${booking.pickup} ${booking.destination}`
                .toLowerCase()
                .includes(q.toLowerCase())
        )
    }, [myBookings, q])

    const total = myBookings.length

    const pending = myBookings.filter(
        (booking) => booking.status === 'Pending'
    ).length

    const confirmed = myBookings.filter(
        (booking) => booking.status === 'Confirmed'
    ).length

    const rejected = myBookings.filter(
        (booking) => booking.status === 'Rejected'
    ).length

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-orange-50">

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#312E81]">

                <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-10 lg:py-11">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-2 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
                            <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-orange-400 sm:text-[9px]">
                                Customer Area
                            </span>
                        </div>

                        <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Track your
                            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent">
                                relocation requests.
                            </span>
                        </h1>

                        <p className="mt-2 max-w-2xl text-[11px] leading-5 text-white/65 sm:text-xs sm:leading-5 lg:text-sm">
                            View your submitted booking requests, check their
                            current status and keep track of your relocation
                            details in one place.
                        </p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 70 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400"
                        />
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}
            <main className="px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
                <div className="mx-auto max-w-7xl">

                    {/* =================================================
                        SUMMARY CARDS
                    ================================================= */}
                    <section className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">

                        <SummaryCard
                            number="01"
                            title="Total Requests"
                            value={total}
                            text="All bookings"
                            gradient="from-violet-600 to-fuchsia-600"
                        />

                        <SummaryCard
                            number="02"
                            title="Pending"
                            value={pending}
                            text="Awaiting review"
                            gradient="from-amber-500 to-orange-500"
                        />

                        <SummaryCard
                            number="03"
                            title="Confirmed"
                            value={confirmed}
                            text="Approved requests"
                            gradient="from-emerald-500 to-teal-500"
                        />

                        <SummaryCard
                            number="04"
                            title="Rejected"
                            value={rejected}
                            text="Not approved"
                            gradient="from-rose-500 to-pink-500"
                        />

                    </section>

                    {/* =================================================
                        CONTENT HEADER / SEARCH
                    ================================================= */}
                    <section className="mt-4 overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_8px_28px_rgba(76,29,149,0.06)] sm:mt-5 sm:rounded-3xl">

                        <div className="border-b border-slate-100 bg-gradient-to-r from-white via-violet-50/40 to-orange-50/40 p-3 sm:p-4 lg:p-5">

                            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                                <div>
                                    <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-violet-500 sm:text-[9px]">
                                        Booking Management
                                    </p>

                                    <h2 className="mt-0.5 text-lg font-black text-slate-900 sm:text-xl">
                                        My relocation requests
                                    </h2>

                                    <p className="mt-0.5 text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                                        Search your booking ID, service or
                                        location to quickly find a request.
                                    </p>
                                </div>

                                <Link
                                    to="/booking"
                                    className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 px-4 py-2 text-[10px] font-bold text-white shadow-md shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-4 sm:py-2.5 sm:text-xs"
                                >
                                    Create New Booking
                                </Link>
                            </div>

                            {/* SEARCH */}
                            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">

                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        className="field w-full pl-4"
                                        placeholder="Search booking ID, service or location..."
                                        value={q}
                                        onChange={(event) =>
                                            setQ(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex shrink-0 items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 sm:px-3.5">
                                    <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                                        Showing
                                    </span>

                                    <span className="ml-2 text-[10px] font-black text-violet-600">
                                        {list.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            BOOKINGS LIST
                        ================================================= */}
                        <div className="p-2.5 sm:p-4 lg:p-5">
    {list.length === 0 ? (
        <EmptyState search={q} />
    ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((booking, index) => (
                <BookingCard
                    key={booking.id}
                    booking={booking}
                    index={index}
                />
            ))}
        </div>
    )}
</div>
                    </section>

                    {/* =================================================
                        BOTTOM INFORMATION
                    ================================================= */}
                    <section className="mt-4 grid gap-3 sm:mt-5 lg:grid-cols-3">

                        <InfoCard
                            number="01"
                            title="Pending Review"
                            text="Your request has been submitted and is waiting for the admin team to review."
                            accent="violet"
                        />

                        <InfoCard
                            number="02"
                            title="Confirmed"
                            text="The admin has reviewed your request and confirmed the booking."
                            accent="emerald"
                        />

                        <InfoCard
                            number="03"
                            title="Need Help?"
                            text="If you have questions about your relocation request, contact the SHIFT team."
                            accent="orange"
                        />

                    </section>

                    {/* =================================================
                        FINAL CTA
                    ================================================= */}
                    <section className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07111F] via-[#172554] to-violet-800 p-4 shadow-lg sm:mt-5 sm:rounded-3xl sm:p-5">

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-orange-400 sm:text-[9px]">
                                    Ready for another move?
                                </p>

                                <h2 className="mt-0.5 text-base font-black text-white sm:text-xl">
                                    Start a new relocation request.
                                </h2>

                                <p className="mt-0.5 text-[9px] leading-4 text-white/55 sm:text-[10px]">
                                    Submit your requirements and let SHIFT
                                    organize your request.
                                </p>
                            </div>

                            <Link
                                to="/booking"
                                className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2.5 text-[10px] font-bold text-white shadow-md shadow-orange-950/20 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:text-xs"
                            >
                                Book a Move
                            </Link>

                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
    number,
    title,
    value,
    text,
    gradient,
}) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-2.5 text-white shadow-md sm:rounded-2xl sm:p-3.5`}
        >
            <div className="absolute -right-7 -top-7 h-16 w-16 rounded-full bg-white/10 blur-xl" />

            <div className="relative">

                <div className="flex items-center justify-between">
                    <span className="text-[7px] font-black tracking-wider text-white/50 sm:text-[8px]">
                        {number}
                    </span>

                    <span className="text-xl font-black sm:text-2xl">
                        {value}
                    </span>
                </div>

                <h3 className="mt-1.5 text-[9px] font-black sm:text-xs">
                    {title}
                </h3>

                <p className="mt-0.5 text-[7px] text-white/65 sm:text-[9px]">
                    {text}
                </p>

            </div>
        </motion.div>
    )
}

/* =========================================================
   BOOKING CARD
========================================================= */

function BookingCard({ booking, index }) {
    const status = booking.status

    const statusStyles =
        status === 'Confirmed'
            ? {
                badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
                dot: 'bg-emerald-500',
                line: 'from-emerald-400 to-teal-400',
            }
            : status === 'Rejected'
                ? {
                    badge: 'bg-rose-100 text-rose-700 border-rose-200',
                    dot: 'bg-rose-500',
                    line: 'from-rose-400 to-pink-400',
                }
                : {
                    badge: 'bg-amber-100 text-amber-700 border-amber-200',
                    dot: 'bg-amber-500',
                    line: 'from-amber-400 to-orange-400',
                }

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.25),
            }}
            whileHover={{ y: -2 }}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(76,29,149,0.08)] sm:rounded-2xl"
        >

            {/* TOP STATUS LINE */}
            <div
                className={`h-0.5 w-full bg-gradient-to-r ${statusStyles.line}`}
            />

            <div className="p-3 sm:p-4 lg:p-5">

                {/* TOP ROW */}
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-1.5">

                            <p className="text-[8px] font-black uppercase tracking-[0.16em] text-violet-500 sm:text-[9px]">
                                {booking.id}
                            </p>

                            <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />

                            <span className="text-[8px] text-slate-400 sm:text-[9px]">
                                Booking Request
                            </span>

                        </div>

                        <h3 className="mt-0.5 text-sm font-black text-slate-900 sm:text-lg">
                            {booking.service}
                        </h3>

                    </div>

                    {/* STATUS */}
                    <span
                        className={`inline-flex w-fit items-center gap-1 rounded-full border px-2 py-1 text-[8px] font-bold sm:px-2.5 sm:text-[9px] ${statusStyles.badge}`}
                    >
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                        />

                        {status}
                    </span>

                </div>

                {/* ROUTE */}
                <div className="mt-3 rounded-lg border border-slate-100 bg-slate-50/80 p-2.5 sm:mt-3.5 sm:rounded-xl sm:p-3">

                    <p className="mb-1.5 text-[7px] font-extrabold uppercase tracking-[0.18em] text-slate-400 sm:text-[8px]">
                        Relocation Route
                    </p>

                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">

                        <LocationBox
                            label="Pickup"
                            value={booking.pickup}
                        />

                        <div className="hidden h-px flex-1 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-orange-200 sm:block" />

                        <div className="flex h-5 w-5 shrink-0 items-center justify-center self-center rounded-full bg-violet-100 text-[8px] font-black text-violet-600 sm:h-6 sm:w-6">
                            →
                        </div>

                        <div className="hidden h-px flex-1 bg-gradient-to-r from-orange-200 via-fuchsia-200 to-violet-200 sm:block" />

                        <LocationBox
                            label="Destination"
                            value={booking.destination}
                            right
                        />

                    </div>
                </div>

                {/* DETAILS */}
                <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-3">

                    <DetailBox
                        label="Preferred Date"
                        value={booking.date || 'Not specified'}
                    />

                    <DetailBox
                        label="Phone"
                        value={booking.phone || 'Not specified'}
                    />

                    <DetailBox
                        label="Submitted"
                        value={
                            booking.createdAt
                                ? new Date(
                                    booking.createdAt
                                ).toLocaleDateString()
                                : 'Not available'
                        }
                    />

                </div>

                {/* EXTRA INFO */}
                <div className="mt-2 flex flex-col gap-1.5 border-t border-slate-100 pt-2 sm:mt-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <span className="text-[7px] font-bold uppercase tracking-wider text-slate-400 sm:text-[8px]">
                            Current Status
                        </span>

                        <p className="mt-0.5 text-[9px] font-semibold text-slate-700 sm:text-[10px]">
                            {status === 'Confirmed'
                                ? 'Your relocation request has been confirmed.'
                                : status === 'Rejected'
                                    ? 'This request was not approved.'
                                    : 'Your request is waiting for admin review.'}
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="text-[9px] font-bold text-violet-600 transition-colors hover:text-orange-500 sm:text-[10px]"
                    >
                        Need help?
                    </Link>

                </div>

            </div>
        </motion.article>
    )
}

/* =========================================================
   LOCATION BOX
========================================================= */

function LocationBox({ label, value, right = false }) {
    return (
        <div
            className={`min-w-0 flex-1 ${right ? 'sm:text-right' : ''
                }`}
        >
            <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400 sm:text-[8px]">
                {label}
            </p>

            <p className="mt-0.5 break-words text-[9px] font-bold leading-3.5 text-slate-800 sm:text-[10px]">
                {value || 'Not specified'}
            </p>
        </div>
    )
}

/* =========================================================
   DETAIL BOX
========================================================= */

function DetailBox({ label, value }) {
    return (
        <div className="rounded-lg border border-slate-100 bg-white p-2 sm:p-2.5">
            <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400 sm:text-[8px]">
                {label}
            </p>

            <p className="mt-0.5 break-words text-[9px] font-bold leading-3.5 text-slate-800 sm:text-[10px]">
                {value}
            </p>
        </div>
    )
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({ search }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-dashed border-violet-200 bg-gradient-to-br from-violet-50/70 via-white to-orange-50/70 px-4 py-8 text-center sm:rounded-2xl sm:px-6 sm:py-10"
        >

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-lg font-black text-violet-600 sm:h-14 sm:w-14">
                {search ? '?' : '0'}
            </div>

            <h2 className="mt-3 text-base font-black text-slate-900 sm:text-lg">
                {search
                    ? 'No bookings found'
                    : 'No bookings yet'}
            </h2>

            <p className="mx-auto mt-1.5 max-w-md text-[10px] leading-4 text-slate-500 sm:text-xs">
                {search
                    ? 'Try searching with another booking ID, service name or location.'
                    : 'Start your first relocation request and track its status from this page.'}
            </p>

            <Link
                to="/booking"
                className="mt-4 inline-flex rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-[10px] font-bold text-white shadow-md shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 sm:text-xs"
            >
                Create Booking
            </Link>

        </motion.div>
    )
}

/* =========================================================
   INFORMATION CARD
========================================================= */

function InfoCard({
    number,
    title,
    text,
    accent,
}) {
    const styles = {
        violet: {
            border: 'border-violet-100',
            number: 'bg-violet-100 text-violet-600',
            title: 'text-violet-700',
        },
        emerald: {
            border: 'border-emerald-100',
            number: 'bg-emerald-100 text-emerald-600',
            title: 'text-emerald-700',
        },
        orange: {
            border: 'border-orange-100',
            number: 'bg-orange-100 text-orange-600',
            title: 'text-orange-700',
        },
    }

    const theme = styles[accent]

    return (
        <motion.div
            whileHover={{ y: -2 }}
            className={`rounded-xl border bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4 ${theme.border}`}
        >

            <div className="flex items-center gap-2.5">

                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[8px] font-black sm:h-8 sm:w-8 ${theme.number}`}
                >
                    {number}
                </span>

                <h3
                    className={`text-[10px] font-black sm:text-xs ${theme.title}`}
                >
                    {title}
                </h3>

            </div>

            <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                {text}
            </p>

        </motion.div>
    )
}
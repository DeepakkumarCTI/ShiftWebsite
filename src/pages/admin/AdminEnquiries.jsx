import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'

export default function AdminEnquiries() {
    const { enquiries, updateEnquiryStatus } = useApp()

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

    const stats = useMemo(() => {
        return {
            total: enquiries.length,
            pending: enquiries.filter(
                (item) => item.status === 'Pending'
            ).length,
            confirmed: enquiries.filter(
                (item) => item.status === 'Confirmed'
            ).length,
            rejected: enquiries.filter(
                (item) => item.status === 'Rejected'
            ).length,
            completed: enquiries.filter(
                (item) => item.status === 'Completed'
            ).length,
        }
    }, [enquiries])

    const filteredEnquiries = useMemo(() => {
        const query = search.trim().toLowerCase()

        return enquiries.filter((enquiry) => {
            const matchesStatus =
                filter === 'All' || enquiry.status === filter

            const matchesSearch =
                !query ||
                enquiry.id?.toLowerCase().includes(query) ||
                enquiry.name?.toLowerCase().includes(query) ||
                enquiry.email?.toLowerCase().includes(query) ||
                enquiry.phone?.toLowerCase().includes(query) ||
                enquiry.subject?.toLowerCase().includes(query) ||
                enquiry.message?.toLowerCase().includes(query)

            return matchesStatus && matchesSearch
        })
    }, [enquiries, search, filter])

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* =========================
          PAGE HEADER
      ========================== */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#86198F] p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] sm:p-7 lg:p-8"
            >
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-fuchsia-300 sm:text-xs">
                            SHIFT ADMIN
                        </p>

                        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                            Enquiry Management
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                            Review customer enquiries, respond to requests and keep
                            customer communication organized.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                            Total Enquiries
                        </p>

                        <p className="mt-1 text-3xl font-black text-white">
                            {stats.total}
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* =========================
          STAT CARDS
      ========================== */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <StatCard
                    label="Total"
                    value={stats.total}
                    active={filter === 'All'}
                    onClick={() => setFilter('All')}
                    accent="fuchsia"
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

            {/* =========================
          SEARCH + FILTER
      ========================== */}
            <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-soft sm:p-5">

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex-1">
                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search by ID, name, email, phone, subject or message..."
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-fuchsia-400 focus:bg-white focus:ring-4 focus:ring-fuchsia-500/10"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[
                            'All',
                            'Pending',
                            'Confirmed',
                            'Rejected',
                            'Completed',
                        ].map((status) => (
                            <button
                                key={status}
                                type="button"
                                onClick={() => setFilter(status)}
                                className={`rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-300 sm:px-4 ${filter === status
                                        ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20'
                                        : 'bg-slate-100 text-slate-500 hover:bg-fuchsia-50 hover:text-fuchsia-600'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">

                    <p className="text-xs font-medium text-slate-400">
                        Showing{' '}
                        <span className="font-bold text-slate-700">
                            {filteredEnquiries.length}
                        </span>{' '}
                        enquiry
                        {filteredEnquiries.length !== 1 ? 'ies' : ''}
                    </p>

                    {(search || filter !== 'All') && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch('')
                                setFilter('All')
                            }}
                            className="text-xs font-bold text-fuchsia-600 transition hover:text-fuchsia-800"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* =========================
          ENQUIRIES
      ========================== */}
            <Panel
                title="Customer Enquiries"
                subtitle="Review and update customer enquiry requests."
                count={filteredEnquiries.length}
            >
                {filteredEnquiries.length === 0 ? (
                    <Empty
                        search={search}
                        filter={filter}
                    />
                ) : (
                    <div className="space-y-4">
                        {filteredEnquiries.map((enquiry, index) => (
                            <EnquiryCard
                                key={enquiry.id}
                                enquiry={enquiry}
                                index={index}
                                updateEnquiryStatus={updateEnquiryStatus}
                            />
                        ))}
                    </div>
                )}
            </Panel>
        </div>
    )
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
    label,
    value,
    active,
    onClick,
    accent,
}) {
    const accentClasses = {
        fuchsia:
            'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
        orange:
            'text-orange-600 bg-orange-50 border-orange-100',
        green:
            'text-emerald-600 bg-emerald-50 border-emerald-100',
        red:
            'text-red-600 bg-red-50 border-red-100',
        blue:
            'text-blue-600 bg-blue-50 border-blue-100',
    }

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-lg sm:p-5 ${active
                    ? accentClasses[accent]
                    : 'border-slate-100 bg-white text-slate-600 shadow-soft'
                }`}
        >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-60">
                {label}
            </p>

            <motion.p
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 text-2xl font-black sm:text-3xl"
            >
                {value}
            </motion.p>

            <div
                className={`mt-3 h-1 w-10 rounded-full ${active ? 'bg-current' : 'bg-slate-200'
                    }`}
            />
        </motion.button>
    )
}

/* =========================================
   ENQUIRY CARD
========================================= */

function EnquiryCard({
    enquiry,
    index,
    updateEnquiryStatus,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
            whileHover={{ y: -2 }}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-fuchsia-200 hover:shadow-[0_14px_40px_rgba(192,38,211,0.08)]"
        >

            {/* TOP */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-fuchsia-50/40 p-4 sm:p-5">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                    <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-2">

                            <span className="rounded-lg bg-fuchsia-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-fuchsia-600">
                                {enquiry.id}
                            </span>

                            <StatusBadge status={enquiry.status} />
                        </div>

                        <h3 className="mt-3 text-lg font-extrabold text-slate-900 sm:text-xl">
                            {enquiry.subject || 'General Enquiry'}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                            Customer enquiry request
                        </p>
                    </div>

                    <div className="shrink-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Enquiry ID
                        </p>

                        <p className="mt-1 text-xs font-extrabold text-slate-700">
                            {enquiry.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* BODY */}
            <div className="p-4 sm:p-5">

                {/* CUSTOMER INFORMATION */}
                <div className="rounded-2xl bg-slate-50 p-4">

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-fuchsia-500">
                        Customer Information
                    </p>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        <InfoItem
                            label="Customer"
                            value={enquiry.name || 'Not provided'}
                        />

                        <InfoItem
                            label="Email"
                            value={enquiry.email || 'Not provided'}
                        />

                        <InfoItem
                            label="Phone"
                            value={enquiry.phone || 'Not provided'}
                        />
                    </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                        Customer Message
                    </p>

                    <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
                        {enquiry.message || 'No message provided.'}
                    </p>
                </div>

                {/* ACTION AREA */}
                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Update Enquiry Status
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Select a status to update this enquiry.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">

                        {[
                            'Pending',
                            'Confirmed',
                            'Rejected',
                            'Completed',
                        ].map((status) => (
                            <motion.button
                                key={status}
                                type="button"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() =>
                                    updateEnquiryStatus(
                                        enquiry.id,
                                        status
                                    )
                                }
                                className={`rounded-xl px-3 py-2 text-[11px] font-extrabold transition-all duration-300 sm:px-4 sm:py-2.5 ${enquiry.status === status
                                        ? getActiveStatusClass(status)
                                        : 'bg-slate-100 text-slate-500 hover:bg-fuchsia-50 hover:text-fuchsia-600'
                                    }`}
                            >
                                {status}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

/* =========================================
   INFO ITEM
========================================= */

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

/* =========================================
   STATUS BADGE
========================================= */

function StatusBadge({ status }) {
    const classes = {
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
            className={`rounded-lg border px-2.5 py-1 text-[10px] font-extrabold ${classes[status] ||
                'border-slate-100 bg-slate-50 text-slate-500'
                }`}
        >
            {status || 'Pending'}
        </span>
    )
}

/* =========================================
   ACTIVE STATUS BUTTON
========================================= */

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

    return (
        classes[status] ||
        'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20'
    )
}

/* =========================================
   PANEL
========================================= */

function Panel({
    title,
    subtitle,
    count,
    children,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-white p-4 shadow-soft sm:p-6"
        >
            <div className="mb-5 flex items-start justify-between gap-3 border-b border-slate-100 pb-4">

                <div>
                    <div className="flex items-center gap-2">

                        <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                            {title}
                        </h2>

                        <span className="rounded-full bg-fuchsia-50 px-2 py-1 text-[9px] font-extrabold text-fuchsia-600">
                            {count}
                        </span>
                    </div>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                        {subtitle}
                    </p>
                </div>
            </div>

            {children}
        </motion.div>
    )
}

/* =========================================
   EMPTY STATE
========================================= */

function Empty({ search, filter }) {
    const isFiltered =
        search || filter !== 'All'

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-5 py-14 text-center"
        >
            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-100 text-xl font-black text-fuchsia-600"
            >
                S
            </motion.div>

            <h3 className="mt-5 text-base font-extrabold text-slate-800">
                {isFiltered
                    ? 'No matching enquiries'
                    : 'No enquiries yet'}
            </h3>

            <p className="mt-2 max-w-md text-xs leading-5 text-slate-400 sm:text-sm">
                {isFiltered
                    ? 'Try changing the search text or selecting a different enquiry status.'
                    : 'Customer enquiries will appear here once customers submit their questions or requirements.'}
            </p>
        </motion.div>
    )
}
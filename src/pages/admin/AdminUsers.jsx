import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'

export default function AdminUsers() {
    const { users } = useApp()

    const [search, setSearch] = useState('')

    const filteredUsers = useMemo(() => {
        const query = search.trim().toLowerCase()

        if (!query) {
            return users
        }

        return users.filter((user) => {
            return (
                user.id?.toLowerCase().includes(query) ||
                user.name?.toLowerCase().includes(query) ||
                user.email?.toLowerCase().includes(query) ||
                user.phone?.toLowerCase().includes(query)
            )
        })
    }, [users, search])

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* =====================================
          PAGE HEADER
      ====================================== */}
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
                            Customer Accounts
                        </h1>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                            View and manage customer accounts registered through the
                            SHIFT relocation platform.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                            Total Customers
                        </p>

                        <motion.p
                            key={users.length}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-1 text-3xl font-black text-white"
                        >
                            {users.length}
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* =====================================
          STAT CARDS
      ====================================== */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                <StatCard
                    label="Total Customers"
                    value={users.length}
                    accent="violet"
                />

                <StatCard
                    label="Showing"
                    value={filteredUsers.length}
                    accent="blue"
                />

                <StatCard
                    label="New Accounts"
                    value={getRecentUsers(users)}
                    accent="green"
                />
            </div>

            {/* =====================================
          SEARCH + CONTENT
      ====================================== */}
            <div className="rounded-3xl bg-white p-4 shadow-soft sm:p-6">

                {/* SECTION HEADER */}
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                                Registered Customers
                            </h2>

                            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[9px] font-extrabold text-violet-600">
                                {filteredUsers.length}
                            </span>
                        </div>

                        <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                            Customer accounts created through the website.
                        </p>
                    </div>

                    {/* SEARCH */}
                    <div className="w-full lg:max-w-md">
                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search name, email, phone or customer ID..."
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                        />
                    </div>
                </div>

                {/* RESULT COUNT */}
                <div className="flex items-center justify-between border-b border-slate-100 py-3">
                    <p className="text-xs text-slate-400">
                        Showing{' '}
                        <span className="font-bold text-slate-700">
                            {filteredUsers.length}
                        </span>{' '}
                        customer
                        {filteredUsers.length !== 1 ? 's' : ''}
                    </p>

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch('')}
                            className="text-xs font-bold text-violet-600 transition hover:text-violet-800"
                        >
                            Clear Search
                        </button>
                    )}
                </div>

                {/* =====================================
            EMPTY STATE
        ====================================== */}
                {filteredUsers.length === 0 ? (
                    <EmptyState
                        hasSearch={Boolean(search)}
                    />
                ) : (
                    <>
                        {/* =================================
                DESKTOP TABLE
            ================================== */}
                        <div className="mt-4 hidden overflow-hidden rounded-2xl border border-slate-100 md:block">

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[760px] text-left">

                                    <thead>
                                        <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                                            <th className="px-5 py-4">
                                                Customer
                                            </th>

                                            <th className="px-5 py-4">
                                                Email
                                            </th>

                                            <th className="px-5 py-4">
                                                Phone
                                            </th>

                                            <th className="px-5 py-4">
                                                Customer ID
                                            </th>

                                            <th className="px-5 py-4">
                                                Joined
                                            </th>

                                            <th className="px-5 py-4">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredUsers.map((user, index) => (
                                            <DesktopUserRow
                                                key={user.id}
                                                user={user}
                                                index={index}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =================================
                MOBILE CARDS
            ================================== */}
                        <div className="mt-4 space-y-3 md:hidden">
                            {filteredUsers.map((user, index) => (
                                <MobileUserCard
                                    key={user.id}
                                    user={user}
                                    index={index}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
    label,
    value,
    accent,
}) {
    const styles = {
        violet:
            'border-violet-100 bg-violet-50 text-violet-600',

        blue:
            'border-blue-100 bg-blue-50 text-blue-600',

        green:
            'border-emerald-100 bg-emerald-50 text-emerald-600',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            className={`rounded-2xl border p-4 transition-all duration-300 hover:shadow-lg sm:p-5 ${styles[accent]}`}
        >
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] opacity-60 sm:text-[10px]">
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

            <div className="mt-3 h-1 w-10 rounded-full bg-current opacity-60" />
        </motion.div>
    )
}

/* =========================================
   DESKTOP USER ROW
========================================= */

function DesktopUserRow({
    user,
    index,
}) {
    return (
        <motion.tr
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: index * 0.04,
            }}
            className="group border-t border-slate-100 transition-colors duration-300 hover:bg-violet-50/40"
        >
            {/* CUSTOMER */}
            <td className="px-5 py-4">
                <div className="flex items-center gap-3">

                    <UserAvatar name={user.name} />

                    <div className="min-w-0">
                        <p className="truncate text-sm font-extrabold text-slate-800">
                            {user.name || 'Unknown Customer'}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                            Registered customer
                        </p>
                    </div>
                </div>
            </td>

            {/* EMAIL */}
            <td className="px-5 py-4">
                <p className="max-w-[220px] truncate text-xs font-medium text-slate-600">
                    {user.email || 'Not provided'}
                </p>
            </td>

            {/* PHONE */}
            <td className="px-5 py-4">
                <p className="text-xs font-medium text-slate-600">
                    {user.phone || 'Not provided'}
                </p>
            </td>

            {/* ID */}
            <td className="px-5 py-4">
                <span className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-[10px] font-bold text-violet-600">
                    {user.id || 'N/A'}
                </span>
            </td>

            {/* JOINED */}
            <td className="px-5 py-4">
                <p className="text-xs font-medium text-slate-500">
                    {formatDate(user.createdAt)}
                </p>
            </td>

            {/* STATUS */}
            <td className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-extrabold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                </span>
            </td>
        </motion.tr>
    )
}

/* =========================================
   MOBILE USER CARD
========================================= */

function MobileUserCard({
    user,
    index,
}) {
    return (
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
                duration: 0.35,
                delay: index * 0.05,
            }}
            whileTap={{ scale: 0.99 }}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md"
        >

            {/* TOP */}
            <div className="flex items-start justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                    <UserAvatar name={user.name} />

                    <div className="min-w-0">
                        <p className="truncate text-sm font-extrabold text-slate-800">
                            {user.name || 'Unknown Customer'}
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-slate-400">
                            {user.email || 'No email'}
                        </p>
                    </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1 text-[9px] font-extrabold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                </span>
            </div>

            {/* DETAILS */}
            <div className="mt-4 grid grid-cols-2 gap-2">

                <DetailItem
                    label="Phone"
                    value={user.phone || 'Not provided'}
                />

                <DetailItem
                    label="Joined"
                    value={formatDate(user.createdAt)}
                />

                <div className="col-span-2">
                    <DetailItem
                        label="Customer ID"
                        value={user.id || 'N/A'}
                    />
                </div>
            </div>
        </motion.div>
    )
}

/* =========================================
   USER AVATAR
========================================= */

function UserAvatar({ name }) {
    const initials = getInitials(name)

    return (
        <motion.div
            whileHover={{
                scale: 1.08,
                rotate: 3,
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xs font-black text-white shadow-md shadow-violet-500/15"
        >
            {initials}
        </motion.div>
    )
}

/* =========================================
   DETAIL ITEM
========================================= */

function DetailItem({
    label,
    value,
}) {
    return (
        <div className="rounded-xl bg-slate-50 px-3 py-2.5">
            <p className="text-[8px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                {label}
            </p>

            <p className="mt-1 truncate text-xs font-bold text-slate-700">
                {value}
            </p>
        </div>
    )
}

/* =========================================
   EMPTY STATE
========================================= */

function EmptyState({
    hasSearch,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.97,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-5 py-14 text-center"
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
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-xl font-black text-violet-600"
            >
                S
            </motion.div>

            <h3 className="mt-5 text-base font-extrabold text-slate-800">
                {hasSearch
                    ? 'No matching customers'
                    : 'No registered customers yet'}
            </h3>

            <p className="mt-2 max-w-md text-xs leading-5 text-slate-400 sm:text-sm">
                {hasSearch
                    ? 'Try searching with a different name, email, phone number or customer ID.'
                    : 'Customer accounts will appear here after users register on the SHIFT website.'}
            </p>
        </motion.div>
    )
}

/* =========================================
   HELPERS
========================================= */

function getInitials(name) {
    if (!name) {
        return 'S'
    }

    const parts = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase()
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function formatDate(date) {
    if (!date) {
        return 'Not available'
    }

    const parsed = new Date(date)

    if (Number.isNaN(parsed.getTime())) {
        return 'Not available'
    }

    return parsed.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

function getRecentUsers(users) {
    if (!users.length) {
        return 0
    }

    const now = new Date()

    return users.filter((user) => {
        if (!user.createdAt) {
            return false
        }

        const created = new Date(user.createdAt)

        if (Number.isNaN(created.getTime())) {
            return false
        }

        const difference =
            now.getTime() - created.getTime()

        const sevenDays =
            7 * 24 * 60 * 60 * 1000

        return difference >= 0 && difference <= sevenDays
    }).length
}
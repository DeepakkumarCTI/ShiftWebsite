import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

export default function Booking() {
    const { session, createBooking } = useApp()
    const navigate = useNavigate()

    const [done, setDone] = useState(null)

    const [form, setForm] = useState({
        name: session?.name || '',
        email: session?.email || '',
        phone: '',
        service: 'House Shifting',
        pickup: '',
        destination: '',
        date: '',
        items: '',
        notes: '',
    })

    const set = (key, value) => {
        setForm((previous) => ({
            ...previous,
            [key]: value,
        }))
    }

    const submit = (event) => {
        event.preventDefault()

        const booking = createBooking({
            ...form,
            userId: session?.userId || null,
        })

        setDone(booking)

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (done) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-orange-50 px-3 py-8 sm:px-6 sm:py-12">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:rounded-[2rem]"
                    >
                        {/* SUCCESS HEADER */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-5 py-8 text-center sm:px-8 sm:py-10">
                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                            <div className="relative">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/30 bg-white/15 text-2xl font-black text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-3xl">
                                    ✓
                                </div>

                                <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/75 sm:text-[10px]">
                                    Request Received
                                </p>

                                <h1 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                                    Your booking is pending review.
                                </h1>

                                <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                                    Your relocation request has been submitted
                                    successfully. The SHIFT admin team can now
                                    review your request.
                                </p>
                            </div>
                        </div>

                        {/* BOOKING DETAILS */}
                        <div className="p-4 sm:p-7">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                <div className="mb-4 flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                        Booking ID
                                    </span>

                                    <strong className="break-all text-sm font-black text-violet-600 sm:text-base">
                                        {done.id}
                                    </strong>
                                </div>

                                <div className="space-y-0">
                                    <Row
                                        a="Service"
                                        b={done.service}
                                    />

                                    <Row
                                        a="Pickup"
                                        b={done.pickup}
                                    />

                                    <Row
                                        a="Destination"
                                        b={done.destination}
                                    />

                                    <Row
                                        a="Date"
                                        b={done.date}
                                    />

                                    <Row
                                        a="Status"
                                        b={done.status}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <Link
                                    to="/my-bookings"
                                    className="flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 sm:text-sm"
                                >
                                    View My Bookings
                                </Link>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 transition-all duration-300 hover:border-violet-300 hover:text-violet-600 sm:text-sm"
                                >
                                    Back Home
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        )
    }

    return (
        <div className="bg-white">
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative isolate overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero-poster.svg"
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                >
                    <source
                        src="/videos/about-video.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111F]/95 via-[#101B32]/90 to-violet-900/75" />

                <div className="absolute -left-20 top-10 -z-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl sm:h-64 sm:w-64" />

                <div className="absolute -right-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl sm:h-72 sm:w-72" />

                <div className="mx-auto flex min-h-[340px] max-w-7xl items-center px-4 py-12 sm:min-h-[390px] sm:px-6 sm:py-16 lg:min-h-[450px] lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:px-4 sm:py-2">
                            <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-orange-400 sm:text-[10px]">
                                Book a Move
                            </span>
                        </div>

                        <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Share your
                            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent">
                                moving requirements.
                            </span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-xs leading-5 text-white/70 sm:text-sm sm:leading-6 lg:text-base">
                            Tell us where you're moving, what you need to
                            relocate and your preferred date. Our team can
                            review your request and update the booking status.
                        </p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 90 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-5 h-1 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400"
                        />
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
                QUICK INFO
            ========================================================= */}
            <section className="border-b border-slate-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-3 py-5 sm:px-6 sm:py-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <QuickInfo
                            number="01"
                            title="Submit"
                            text="Share your requirements"
                        />

                        <QuickInfo
                            number="02"
                            title="Review"
                            text="Admin checks your request"
                        />

                        <QuickInfo
                            number="03"
                            title="Confirm"
                            text="Track your booking status"
                        />
                    </div>
                </div>
            </section>

            {/* =========================================================
                BOOKING AREA
            ========================================================= */}
            <section className="bg-white px-3 py-7 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-8">

                        {/* LEFT INFORMATION */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#07111F] via-[#111C34] to-[#312E81] p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.15)] sm:rounded-[1.8rem] sm:p-7"
                        >
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-orange-400 sm:text-[10px]">
                                SHIFT Relocation
                            </p>

                            <h2 className="mt-2 text-xl font-black leading-tight sm:text-2xl lg:text-3xl">
                                Everything you need to plan your move.
                            </h2>

                            <p className="mt-3 text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
                                Provide accurate information so the admin team
                                can review your relocation request properly.
                            </p>

                            {/* SERVICE TYPES */}
                            <div className="mt-6 space-y-2.5">
                                <ServiceMini
                                    title="House Shifting"
                                    text="Move household items safely."
                                    active={form.service === 'House Shifting'}
                                    onClick={() =>
                                        set('service', 'House Shifting')
                                    }
                                />

                                <ServiceMini
                                    title="Office Relocation"
                                    text="Organize your office move."
                                    active={
                                        form.service === 'Office Relocation'
                                    }
                                    onClick={() =>
                                        set('service', 'Office Relocation')
                                    }
                                />

                                <ServiceMini
                                    title="Furniture Moving"
                                    text="Move furniture to a new place."
                                    active={
                                        form.service === 'Furniture Moving'
                                    }
                                    onClick={() =>
                                        set('service', 'Furniture Moving')
                                    }
                                />

                                <ServiceMini
                                    title="Delivery Service"
                                    text="Request item pickup and delivery."
                                    active={
                                        form.service === 'Delivery Service'
                                    }
                                    onClick={() =>
                                        set('service', 'Delivery Service')
                                    }
                                />
                            </div>

                            {/* NOTE */}
                            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-orange-400">
                                    Before submitting
                                </p>

                                <p className="mt-1.5 text-[11px] leading-5 text-white/55 sm:text-xs">
                                    Check your pickup location, destination,
                                    phone number and preferred date before
                                    sending the request.
                                </p>
                            </div>
                        </motion.div>

                        {/* FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-[1.4rem] border border-violet-100 bg-white p-4 shadow-[0_15px_45px_rgba(76,29,149,0.08)] sm:rounded-[1.8rem] sm:p-6 lg:p-8"
                        >
                            {/* TOP DECORATION */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" />

                            <div className="mb-5 sm:mb-6">
                                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-violet-500">
                                    Booking Details
                                </p>

                                <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                                    Tell us about your move
                                </h2>

                                <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:text-xs">
                                    Fields marked with an asterisk are required.
                                </p>
                            </div>

                            <form onSubmit={submit}>
                                <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                                    <Field
                                        label="Name"
                                        value={form.name}
                                        onChange={(value) =>
                                            set('name', value)
                                        }
                                    />

                                    <Field
                                        label="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={(value) =>
                                            set('email', value)
                                        }
                                    />

                                    <Field
                                        label="Phone"
                                        value={form.phone}
                                        onChange={(value) =>
                                            set('phone', value)
                                        }
                                    />

                                    <label className="text-xs font-bold text-slate-700 sm:text-sm">
                                        Service
                                        <select
                                            className="field mt-1.5"
                                            value={form.service}
                                            onChange={(event) =>
                                                set(
                                                    'service',
                                                    event.target.value
                                                )
                                            }
                                        >
                                            {[
                                                'House Shifting',
                                                'Office Relocation',
                                                'Furniture Moving',
                                                'Delivery Service',
                                            ].map((service) => (
                                                <option
                                                    key={service}
                                                    value={service}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <Field
                                        label="Pickup Location"
                                        value={form.pickup}
                                        onChange={(value) =>
                                            set('pickup', value)
                                        }
                                    />

                                    <Field
                                        label="Destination"
                                        value={form.destination}
                                        onChange={(value) =>
                                            set('destination', value)
                                        }
                                    />

                                    <Field
                                        label="Preferred Date"
                                        type="date"
                                        value={form.date}
                                        onChange={(value) =>
                                            set('date', value)
                                        }
                                    />

                                    <Field
                                        label="Approx. Items / Rooms"
                                        value={form.items}
                                        onChange={(value) =>
                                            set('items', value)
                                        }
                                    />
                                </div>

                                <label className="mt-4 block text-xs font-bold text-slate-700 sm:text-sm">
                                    Additional Requirements
                                    <textarea
                                        rows="4"
                                        value={form.notes}
                                        onChange={(event) =>
                                            set(
                                                'notes',
                                                event.target.value
                                            )
                                        }
                                        className="field mt-1.5 min-h-[100px] resize-none"
                                        placeholder="Packing needs, floor details, special items, timing..."
                                    />
                                </label>

                                <div className="mt-4 rounded-xl border border-violet-100 bg-violet-50/60 p-3">
                                    <p className="text-[10px] leading-4 text-violet-700 sm:text-xs">
                                        Your request will initially be marked
                                        as <strong>Pending</strong>. The admin
                                        can review and update the status.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-7 sm:text-sm"
                                >
                                    Submit Booking Request
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BOOKING PROCESS
            ========================================================= */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 px-3 py-8 sm:px-6 sm:py-12 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-violet-500 sm:text-[10px]">
                            Simple Process
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                            What happens after you book?
                        </h2>

                        <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                            Your request moves through a simple review process
                            so you can track what happens next.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                        <ProcessCard
                            number="01"
                            title="Request Submitted"
                            text="Your moving details are saved and your booking receives a pending status."
                        />

                        <ProcessCard
                            number="02"
                            title="Admin Review"
                            text="The admin checks your enquiry and relocation requirements."
                        />

                        <ProcessCard
                            number="03"
                            title="Status Updated"
                            text="You can return to My Bookings to view the latest booking status."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

/* =========================================================
   QUICK INFO
========================================================= */

function QuickInfo({ number, title, text }) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="rounded-xl border border-violet-100 bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
        >
            <span className="text-[9px] font-black text-violet-500 sm:text-[10px]">
                {number}
            </span>

            <h3 className="mt-1 text-[11px] font-black text-slate-900 sm:text-sm">
                {title}
            </h3>

            <p className="mt-1 text-[9px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                {text}
            </p>
        </motion.div>
    )
}

/* =========================================================
   SERVICE MINI CARD
========================================================= */

function ServiceMini({ title, text, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group w-full rounded-xl border p-3 text-left transition-all duration-300 ${active
                    ? 'border-violet-400 bg-violet-500/15 shadow-lg shadow-violet-950/10'
                    : 'border-white/10 bg-white/[0.05] hover:border-violet-300/40 hover:bg-white/[0.08]'
                }`}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <h3
                        className={`text-xs font-bold sm:text-sm ${active
                                ? 'text-white'
                                : 'text-white/80'
                            }`}
                    >
                        {title}
                    </h3>

                    <p className="mt-0.5 text-[9px] leading-4 text-white/45 sm:text-[10px]">
                        {text}
                    </p>
                </div>

                <span
                    className={`h-2 w-2 shrink-0 rounded-full transition-all ${active
                            ? 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]'
                            : 'bg-white/20'
                        }`}
                />
            </div>
        </button>
    )
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({ number, title, text }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
        >
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-[10px] font-black text-white sm:h-10 sm:w-10 sm:text-xs">
                    {number}
                </div>

                <h3 className="text-xs font-black text-slate-900 sm:text-sm">
                    {title}
                </h3>
            </div>

            <p className="mt-3 text-[10px] leading-5 text-slate-500 sm:text-xs">
                {text}
            </p>
        </motion.div>
    )
}

/* =========================================================
   FORM FIELD
========================================================= */

function Field({
    label,
    value,
    onChange,
    type = 'text',
}) {
    return (
        <label className="text-xs font-bold text-slate-700 sm:text-sm">
            {label}

            <input
                required
                type={type}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className="field mt-1.5"
            />
        </label>
    )
}

/* =========================================================
   SUCCESS ROW
========================================================= */

function Row({ a, b }) {
    return (
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 py-2.5 last:border-0">
            <span className="shrink-0 text-[10px] text-slate-500 sm:text-xs">
                {a}
            </span>

            <strong className="max-w-[65%] break-words text-right text-[10px] text-slate-800 sm:text-xs">
                {b}
            </strong>
        </div>
    )
}
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { useApp } from '../context/AppContext'

export default function Contact() {
    const { createEnquiry, session } = useApp()

    const [sent, setSent] = useState(false)

    const [form, setForm] = useState({
        name: session?.name || '',
        email: session?.email || '',
        phone: '',
        subject: 'Relocation enquiry',
        message: '',
    })

    const submit = (e) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.message) return

        createEnquiry(form)

        setSent(true)

        setForm({
            ...form,
            phone: '',
            message: '',
        })
    }

    return (
        <>
            {/* PAGE HEADER */}
            <section className="relative isolate overflow-hidden">
                {/* BACKGROUND VIDEO */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    poster="/images/hero-poster.svg"
                >
                    <source src="/videos/contacthero.mp4" type="video/mp4" />
                </video>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111F]/95 via-[#101B32]/85 to-[#4C1D95]/75" />

                {/* EXTRA COLOR GLOW */}
                <div className="absolute -left-20 top-10 -z-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

                {/* CONTENT */}
                <div className="mx-auto flex min-h-[380px] w-full max-w-7xl items-center px-4 py-16 sm:min-h-[430px] sm:px-6 sm:py-20 lg:min-h-[500px] lg:px-10 lg:py-24 xl:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        {/* EYEBROW */}
                        <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
                                Contact SHIFT
                            </span>
                        </div>

                        {/* TITLE */}
                        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Let's make your next move
                            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent">
                                easier.
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 lg:text-lg">
                            Have a question, need help planning a relocation, or want to
                            understand our services? Send us your requirement and our team
                            can review it.
                        </p>

                        {/* ANIMATED LINE */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 100, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 h-1 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400"
                        />
                    </motion.div>
                </div>
            </section>

            {/* QUICK CONTACT CARDS */}
            <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mx-auto max-w-7xl">

                    {/* SECTION HEADING */}
                    <div className="mb-8 text-center sm:mb-10">
                        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-violet-500">
                            Contact & Support
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
                            We're here to help you move
                            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                                {' '}with confidence.
                            </span>
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Reach out to SHIFT through any of the options below.
                            Our team is ready to help with your relocation questions
                            and enquiries.
                        </p>

                        {/* Animated underline */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 100, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400"
                        />
                    </div>

                    {/* CONTACT CARDS - 4 COLUMNS ON MOBILE */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-5">

                        <ContactInfoCard
                            number="01"
                            title="Call Us"
                            text="+91 98765 43210"
                            subText="Speak with our support team"
                            image="/images/phone.jpg"
                            color="violet"
                        />

                        <ContactInfoCard
                            number="02"
                            title="Email Us"
                            text="support@shift.com"
                            subText="Send us your questions"
                            image="/images/email.jpg"
                            color="fuchsia"
                        />

                        <ContactInfoCard
                            number="03"
                            title="Working Hours"
                            text="9:00 AM – 7:00 PM"
                            subText="Monday to Saturday"
                            image="/images/working.jpg"
                            color="orange"
                        />

                      

                    </div>
                </div>
            </section>

            {/* MAIN CONTACT AREA */}
            <section className="relative overflow-hidden bg-white px-3 py-8 sm:px-5 sm:py-12 lg:px-10 lg:py-20">

                {/* Background decorations */}
                <motion.div
                    className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl sm:-left-32 sm:top-20 sm:h-80 sm:w-80"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 20, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-orange-200/30 blur-3xl sm:-right-32 sm:h-80 sm:w-80"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <div className="relative mx-auto grid max-w-7xl gap-5 sm:gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">

                    {/* =========================================================
            LEFT INFORMATION
        ========================================================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-5"
                    >

                        {/* Main contact card */}
                        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 p-4 text-white shadow-xl shadow-violet-200 sm:rounded-[2rem] sm:p-7 lg:p-8">

                            <motion.div
                                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl sm:-right-12 sm:-top-12 sm:h-40 sm:w-40"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                            />

                            <div className="relative">

                                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/65 sm:text-xs sm:tracking-[0.22em]">
                                    Get in touch
                                </p>

                                <h2 className="mt-2 text-2xl font-black leading-tight sm:mt-3 sm:text-4xl">
                                    Questions before
                                    <span className="block text-orange-300">
                                        you book?
                                    </span>
                                </h2>

                                <p className="mt-3 text-xs leading-5 text-white/80 sm:mt-5 sm:text-base sm:leading-7">
                                    Whether you are moving your home, relocating an
                                    office, moving furniture, or need a delivery
                                    service, tell us what you need.
                                </p>

                                <div className="mt-5 h-px w-full bg-white/15 sm:mt-7" />

                                <div className="mt-5 space-y-3 sm:mt-7 sm:space-y-5">

                                    <ContactDetail
                                        image="/images/phone.jpg"
                                        label="Phone"
                                        value="+91 98765 43210"
                                    />

                                    <ContactDetail
                                        image="/images/email.jpg"
                                        label="Email"
                                        value="support@shift.com"
                                    />

                                    <ContactDetail
                                        image="/images/working.jpg"
                                        label="Availability"
                                        value="Mon – Sat · 9:00 AM – 7:00 PM"
                                    />

                                </div>
                            </div>
                        </div>


                        {/* Office information */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="rounded-[1.5rem] border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-4 shadow-[0_10px_30px_rgba(76,29,149,0.07)] sm:rounded-[2rem] sm:p-7"
                        >
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-500 sm:text-xs sm:tracking-[0.2em]">
                                Our Office
                            </p>

                            <h3 className="mt-1.5 text-lg font-black text-slate-900 sm:mt-2 sm:text-xl">
                                SHIFT Relocation Services
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                                Our digital platform helps customers submit relocation
                                requirements and track the status of their requests
                                through a simple process.
                            </p>

                            <div className="mt-4 rounded-xl border border-violet-100 bg-white p-3 sm:mt-5 sm:rounded-2xl sm:p-4">
                                <p className="text-xs font-bold text-slate-800 sm:text-sm">
                                    Service Coverage
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                                    House shifting · Office relocation · Furniture
                                    moving · Delivery services
                                </p>
                            </div>
                        </motion.div>


                        {/* Help card */}
                        <div className="rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-violet-50 p-4 sm:rounded-[2rem] sm:p-7">

                            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-500 sm:text-xs sm:tracking-[0.2em]">
                                Before you submit
                            </p>

                            <h3 className="mt-1.5 text-lg font-black text-slate-900 sm:mt-2 sm:text-xl">
                                What information can you share?
                            </h3>

                            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">

                                <HelpPoint text="Type of relocation service you need" />

                                <HelpPoint text="Pickup and destination details" />

                                <HelpPoint text="Preferred moving date" />

                                <HelpPoint text="Approximate items or requirements" />

                            </div>
                        </div>

                    </motion.div>


                    {/* =========================================================
            RIGHT FORM
        ========================================================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                    >

                        <form
                            onSubmit={submit}
                            className="relative overflow-hidden rounded-[1.5rem] border border-violet-100 bg-white p-4 shadow-[0_15px_45px_rgba(76,29,149,0.09)] sm:rounded-[2rem] sm:p-7 lg:p-10"
                        >

                            {/* Animated border */}
                            <motion.div
                                className="pointer-events-none absolute inset-0 rounded-[1.5rem] border-2 border-transparent sm:rounded-[2rem]"
                                animate={{
                                    borderColor: [
                                        'rgba(139,92,246,0.12)',
                                        'rgba(139,92,246,0.35)',
                                        'rgba(217,70,239,0.3)',
                                        'rgba(249,115,22,0.25)',
                                        'rgba(139,92,246,0.12)',
                                    ],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            <div className="relative">

                                {/* FORM HEADER */}
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                                    <div>
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-500 sm:text-xs sm:tracking-[0.2em]">
                                            Send an enquiry
                                        </p>

                                        <h2 className="mt-1.5 text-xl font-black text-slate-900 sm:mt-2 sm:text-3xl">
                                            Tell us what you need
                                        </h2>
                                    </div>

                                    <span className="w-fit rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-600 sm:px-3 sm:py-1.5 sm:text-[10px]">
                                        Admin Review
                                    </span>

                                </div>


                                {/* DESCRIPTION */}
                                <p className="mt-2 text-xs leading-5 text-slate-500 sm:mt-3 sm:max-w-2xl sm:text-sm sm:leading-6">
                                    Fill in the details below. Your enquiry will be stored
                                    locally and appear in the admin dashboard for review.
                                </p>


                                {/* SUCCESS MESSAGE */}
                                {sent && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 sm:mt-6 sm:rounded-2xl sm:p-4"
                                    >
                                        <p className="text-xs font-bold text-emerald-700 sm:text-sm">
                                            Enquiry submitted successfully.
                                        </p>

                                        <p className="mt-1 text-[10px] leading-4 text-emerald-600 sm:text-xs sm:leading-5">
                                            Your request is now pending admin review.
                                            You can track the status from your account.
                                        </p>
                                    </motion.div>
                                )}


                                {/* FORM FIELDS */}
                                <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5">

                                    <Field
                                        label="Name"
                                        value={form.name}
                                        onChange={(v) =>
                                            setForm({
                                                ...form,
                                                name: v,
                                            })
                                        }
                                    />

                                    <Field
                                        label="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={(v) =>
                                            setForm({
                                                ...form,
                                                email: v,
                                            })
                                        }
                                    />

                                    <Field
                                        label="Phone"
                                        value={form.phone}
                                        onChange={(v) =>
                                            setForm({
                                                ...form,
                                                phone: v,
                                            })
                                        }
                                    />

                                    <Field
                                        label="Subject"
                                        value={form.subject}
                                        onChange={(v) =>
                                            setForm({
                                                ...form,
                                                subject: v,
                                            })
                                        }
                                    />

                                </div>


                                {/* SERVICE SELECTION */}
                                <div className="mt-4 sm:mt-5">

                                    <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
                                        Service Required

                                        <select
                                            className="field mt-1.5 w-full sm:mt-2"
                                            value={form.subject}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    subject: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="Relocation enquiry">
                                                General Relocation Enquiry
                                            </option>

                                            <option value="House shifting">
                                                House Shifting
                                            </option>

                                            <option value="Office relocation">
                                                Office Relocation
                                            </option>

                                            <option value="Furniture moving">
                                                Furniture Moving
                                            </option>

                                            <option value="Delivery service">
                                                Delivery Service
                                            </option>
                                        </select>
                                    </label>

                                </div>


                                {/* MESSAGE */}
                                <label className="mt-4 block text-xs font-semibold text-slate-700 sm:mt-5 sm:text-sm">

                                    Message

                                    <textarea
                                        required
                                        rows="5"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message: e.target.value,
                                            })
                                        }
                                        className="field mt-1.5 min-h-[120px] w-full resize-none sm:mt-2"
                                        placeholder="Tell us about your relocation requirement, pickup location, destination, preferred date, or any other details..."
                                    />

                                </label>


                                {/* BOTTOM INFO */}
                                <div className="mt-4 rounded-xl border border-violet-100 bg-violet-50/60 p-3 sm:mt-5 sm:rounded-2xl sm:p-4">

                                    <p className="text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">

                                        <span className="font-bold text-violet-600">
                                            Note:
                                        </span>{' '}

                                        Providing more details helps the admin team
                                        understand your requirement and process your
                                        enquiry efficiently.

                                    </p>

                                </div>


                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    className="btn-primary mt-4 w-full sm:mt-6 sm:w-auto"
                                >
                                    Submit Enquiry
                                </button>

                            </div>

                        </form>

                    </motion.div>

                </div>

            </section>

            {/* HOW WE CAN HELP */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-violet-300">
                            How we can help
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                            One platform for your
                            <span className="text-orange-300">
                                {' '}moving needs.
                            </span>
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                            Submit your requirement, receive clear status
                            updates, and keep your relocation enquiry
                            organized in one place.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

                        <HelpCard
                            number="01"
                            title="House Shifting"
                            text="Plan and submit requirements for moving household items to a new location."
                        />

                        <HelpCard
                            number="02"
                            title="Office Relocation"
                            text="Organize office relocation requirements and communicate your moving needs."
                        />

                        <HelpCard
                            number="03"
                            title="Furniture Moving"
                            text="Share details about furniture that needs to be collected and moved."
                        />

                        <HelpCard
                            number="04"
                            title="Delivery Services"
                            text="Submit delivery requirements and keep your request organized."
                        />

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-orange-50 px-3 py-9 sm:px-6 sm:py-14 lg:px-10 lg:py-20">

                {/* Background decorations */}
                <motion.div
                    className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl sm:-left-28 sm:h-72 sm:w-72"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 15, 0],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    className="pointer-events-none absolute -right-20 bottom-5 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl sm:-right-28 sm:h-72 sm:w-72"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -15, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <div className="relative mx-auto max-w-5xl">

                    {/* SECTION HEADING */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="text-center"
                    >

                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-500 sm:text-xs sm:tracking-[0.22em]">
                            Frequently asked
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-slate-900 sm:mt-3 sm:text-4xl">
                            Common questions
                        </h2>

                        <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                            Find quick answers to common questions about SHIFT
                            relocation enquiries, bookings, and request tracking.
                        </p>

                        {/* Animated underline */}
                        <motion.div
                            initial={{
                                width: 0,
                                opacity: 0,
                            }}
                            whileInView={{
                                width: 80,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 sm:mt-5"
                        />

                    </motion.div>


                    {/* FAQ GRID */}
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">

                        <FAQ
                            question="How do I submit a relocation request?"
                            answer="Fill out the enquiry form on this page with your contact details and relocation requirement. The request is then available for admin review."
                        />

                        <FAQ
                            question="Can I contact SHIFT before booking?"
                            answer="Yes. You can use the enquiry form to ask questions or describe your requirement before submitting a booking."
                        />

                        <FAQ
                            question="How will I know my enquiry status?"
                            answer="Once your enquiry is reviewed, the status can be updated by the admin. Logged-in customers can view their request information through the platform."
                        />

                        <FAQ
                            question="What details should I provide?"
                            answer="Include your service requirement, locations, preferred date, approximate items, and any special instructions that may help explain your move."
                        />

                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">

                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 p-6 text-center shadow-xl shadow-violet-200 sm:p-10">

                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/65">
                        Ready to move?
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
                        Start your relocation enquiry today.
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                        Tell SHIFT what you need and keep your relocation
                        request organized from enquiry to review.
                    </p>

                </div>
            </section>
        </>
    )
}

/* -------------------------------------------------------------------------- */
/* CONTACT INFO CARD                                                          */
/* -------------------------------------------------------------------------- */

function ContactInfoCard({
    number,
    title,
    text,
    subText,
    image,
    color = 'violet',
}) {
    const colors = {
        violet: {
            border: 'border-violet-100',
            number: 'text-violet-500',
            title: 'text-violet-600',
            glow: 'bg-violet-400/15',
            gradient: 'from-violet-500 to-fuchsia-500',
        },

        fuchsia: {
            border: 'border-fuchsia-100',
            number: 'text-fuchsia-500',
            title: 'text-fuchsia-600',
            glow: 'bg-fuchsia-400/15',
            gradient: 'from-fuchsia-500 to-violet-500',
        },

        orange: {
            border: 'border-orange-100',
            number: 'text-orange-500',
            title: 'text-orange-600',
            glow: 'bg-orange-400/15',
            gradient: 'from-orange-400 to-fuchsia-500',
        },
    }

    const theme = colors[color]

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.55,
            }}
            whileHover={{
                y: -7,
            }}
            className={`group relative overflow-hidden rounded-2xl border bg-white p-3 shadow-[0_8px_25px_rgba(76,29,149,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(76,29,149,0.12)] sm:rounded-3xl sm:p-5 ${theme.border}`}
        >

            {/* Animated border */}
            <motion.div
                className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent sm:rounded-3xl`}
                animate={{
                    borderColor: [
                        'rgba(139,92,246,0.08)',
                        'rgba(139,92,246,0.3)',
                        'rgba(217,70,239,0.25)',
                        'rgba(249,115,22,0.2)',
                        'rgba(139,92,246,0.08)',
                    ],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Moving top line */}
            <motion.div
                className={`pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${theme.gradient}`}
                initial={{
                    x: '-100%',
                }}
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Background glow */}
            <motion.div
                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${theme.glow}`}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Top row */}
            <div className="relative flex items-start justify-between">

                <p
                    className={`text-[9px] font-black tracking-[0.15em] sm:text-[10px] ${theme.number}`}
                >
                    {number}
                </p>

                <motion.div
                    animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${theme.gradient}`}
                />

            </div>

            {/* PNG Image */}
            <motion.div
                className="relative mx-auto mt-2 flex h-16 w-16 items-center justify-center sm:mt-1 sm:h-20 sm:w-20"
                whileHover={{
                    scale: 1.08,
                    rotate: 2,
                }}
                transition={{
                    duration: 0.3,
                }}
            >

                {/* Image glow */}
                <motion.div
                    className={`absolute inset-2 rounded-full blur-xl ${theme.glow}`}
                    animate={{
                        scale: [0.9, 1.15, 0.9],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <img
                    src={image}
                    alt={title}
                    className="relative z-10 h-12 w-12 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                />

            </motion.div>

            {/* Content */}
            <div className="relative text-center">

                <h3 className="mt-2 text-xs font-black text-slate-900 sm:text-sm">
                    {title}
                </h3>

                <p
                    className={`mt-1 text-[10px] font-bold sm:text-xs ${theme.title}`}
                >
                    {text}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                    {subText}
                </p>

            </div>

            {/* Animated bottom line */}
            <div className="relative mt-3 h-0.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                    className={`h-full w-1/3 rounded-full bg-gradient-to-r ${theme.gradient}`}
                    animate={{
                        x: ['0%', '200%'],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

        </motion.div>
    )
}

/* -------------------------------------------------------------------------- */
/* CONTACT DETAIL                                                             */
/* -------------------------------------------------------------------------- */

function ContactDetail({ label, value }) {
    return (
        <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                {value}
            </p>
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/* FORM FIELD                                                                 */
/* -------------------------------------------------------------------------- */

function Field({
    label,
    value,
    onChange,
    type = 'text',
}) {
    return (
        <label className="block text-sm font-semibold text-slate-700">
            {label}

            <input
                required
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="field mt-2"
            />
        </label>
    )
}

/* -------------------------------------------------------------------------- */
/* HELP POINT                                                                 */
/* -------------------------------------------------------------------------- */

function HelpPoint({ text }) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-orange-400" />

            <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                {text}
            </p>
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/* HELP CARD                                                                  */
/* -------------------------------------------------------------------------- */

function HelpCard({
    number,
    title,
    text,
}) {
    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
        >
            <motion.div
                className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400"
                initial={{
                    scaleX: 0.25,
                    transformOrigin: 'left',
                }}
                whileHover={{
                    scaleX: 1,
                }}
                transition={{
                    duration: 0.4,
                }}
            />

            <p className="text-[10px] font-black tracking-[0.18em] text-violet-300">
                {number}
            </p>

            <h3 className="mt-3 text-sm font-black text-white sm:text-lg">
                {title}
            </h3>

            <p className="mt-2 text-[10px] leading-5 text-white/50 sm:text-xs sm:leading-6">
                {text}
            </p>

            <div className="mt-4 h-px w-full bg-white/10">
                <motion.div
                    className="h-full w-1/3 bg-gradient-to-r from-violet-400 to-orange-400"
                    animate={{
                        x: ['0%', '200%'],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>
        </motion.div>
    )
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

function FAQ({
    question,
    answer,
}) {
    return (
        <motion.div
            whileHover={{
                y: -3,
            }}
            className="rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_8px_25px_rgba(76,29,149,0.05)] sm:rounded-3xl sm:p-6"
        >
            <div className="flex items-start gap-3">

                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-orange-400" />

                <div>
                    <h3 className="text-sm font-black text-slate-900 sm:text-base">
                        {question}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                        {answer}
                    </p>
                </div>

            </div>
        </motion.div>
    )
}
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null)

    const closeModal = () => {
        setActiveModal(null)
    }

    return (
        <>
            <footer className="mt-8 w-full border-t border-white/10 bg-gradient-to-br from-[#07111F] via-[#0D1930] to-[#182650]">

                {/* =====================================================
                    MAIN FOOTER
                ====================================================== */}
                <div className="w-full px-5 py-7 sm:px-7 sm:py-8 lg:px-10 lg:py-8 xl:px-14">

                    <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">

                        {/* =================================================
                            COMPANY
                        ================================================== */}
                        <div className="col-span-2 lg:col-span-1">

                            <Link
                                to="/"
                                className="group mb-3 inline-flex items-center gap-3"
                            >

                                {/* =================================================
                                    LOGO
                                    No background / no card / no border
                                ================================================== */}

                                <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-105 sm:h-[72px] sm:w-[72px] lg:h-[76px] lg:w-[76px]">

                                    <img
                                        src="/images/logo.png"
                                        alt="SHIFT Packers and Movers"
                                        className="h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                                    />

                                </div>


                                {/* BRAND TEXT */}

                                <div className="min-w-0">

                                    <div className="text-xl font-black tracking-tight text-white sm:text-2xl">
                                        SHIFT
                                        <span className="text-orange-400">
                                            .
                                        </span>
                                    </div>

                                    <div className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-white/55 sm:text-[8px]">
                                        Relocation Made Simple
                                    </div>

                                </div>

                            </Link>


                            {/* DESCRIPTION */}

                            <p className="max-w-xs text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                                A convenient relocation platform for house shifting,
                                office moves, furniture transport and delivery requests.
                            </p>


                            {/* =================================================
                                SOCIAL
                            ================================================== */}

                            {/* =================================================
    SOCIAL
================================================= */}

                            <div className="mt-5">

                                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                                    Follow Us
                                </p>

                                <div className="flex items-center gap-4 sm:gap-5">

                                    <SocialLink
                                        href="https://www.instagram.com/"
                                        label="Instagram"
                                        image="/images/instagram.png"
                                    />

                                    <SocialLink
                                        href="https://www.facebook.com/"
                                        label="Facebook"
                                        image="/images/facebook.png"
                                    />

                                    <SocialLink
                                        href="https://www.youtube.com/"
                                        label="YouTube"
                                        image="/images/youtube.png"
                                    />

                                    <SocialLink
                                        href="https://whatsapp.com/"
                                        label="WhatsApp"
                                        image="/images/whatsapp.png"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            NAVIGATION
                        ================================================== */}

                        <div>

                            <h3 className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                                Navigation
                            </h3>

                            <div className="grid gap-1.5 text-xs sm:text-sm">

                                <FooterLink
                                    to="/"
                                    label="Home"
                                />

                                <FooterLink
                                    to="/about"
                                    label="About Us"
                                />

                                <FooterLink
                                    to="/services"
                                    label="Services"
                                />

                                <FooterLink
                                    to="/booking"
                                    label="Book a Move"
                                />

                                <FooterLink
                                    to="/contact"
                                    label="Contact"
                                />

                                <FooterLink
                                    to="/login"
                                    label="Login"
                                />

                            </div>

                        </div>


                        {/* =================================================
                            SERVICES
                        ================================================== */}

                        <div>

                            <h3 className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                                Services
                            </h3>

                            <div className="grid gap-1.5 text-xs sm:text-sm">

                                <Link
                                    to="/services"
                                    className="text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
                                >
                                    House Shifting
                                </Link>

                                <Link
                                    to="/services"
                                    className="text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
                                >
                                    Office Relocation
                                </Link>

                                <Link
                                    to="/services"
                                    className="text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
                                >
                                    Furniture Moving
                                </Link>

                                <Link
                                    to="/services"
                                    className="text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
                                >
                                    Delivery Services
                                </Link>

                                <Link
                                    to="/booking"
                                    className="font-semibold text-orange-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-300"
                                >
                                    Start a Booking →
                                </Link>

                            </div>

                        </div>


                        {/* =================================================
                            CONTACT
                        ================================================== */}

                        <div className="col-span-2 lg:col-span-1">

                            <h3 className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                                Contact Us
                            </h3>

                            <div className="grid gap-2">

                                {/* ADDRESS */}

                                <div>

                                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-wider text-orange-400">
                                        Address
                                    </p>

                                    <p className="text-xs leading-[1.35rem] text-white/65 sm:text-sm">
                                        SHIFT Relocation Services,
                                        <br />
                                        25 Anna Salai, Chennai,
                                        <br />
                                        Tamil Nadu, India - 600002
                                    </p>

                                </div>


                                {/* PHONE */}

                                <div>

                                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-wider text-orange-400">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+919876543210"
                                        className="text-xs font-semibold text-white/75 transition-colors hover:text-orange-400 sm:text-sm"
                                    >
                                        +91 98765 43210
                                    </a>

                                </div>


                                {/* EMAIL */}

                                <div>

                                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-wider text-orange-400">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:support@shift.com"
                                        className="break-all text-xs font-semibold text-white/75 transition-colors hover:text-orange-400 sm:text-sm"
                                    >
                                        support@shift.com
                                    </a>

                                </div>


                                {/* SERVICE AREAS */}

                                <div>

                                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-wider text-orange-400">
                                        Service Areas
                                    </p>

                                    <p className="text-xs leading-5 text-white/65 sm:text-sm">
                                        Chennai · Coimbatore · Bengaluru
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    CTA STRIP
                ====================================================== */}

                <div className="border-y border-white/10 bg-[#050D19]/45 px-5 py-3.5 backdrop-blur-sm sm:px-7 lg:px-10 xl:px-14">

                    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <h3 className="text-sm font-extrabold text-white sm:text-base">
                                Ready to make your move?
                            </h3>

                            <p className="mt-0.5 text-[11px] text-white/55 sm:text-xs">
                                Submit your moving request and let SHIFT handle the journey.
                            </p>

                        </div>

                        <Link
                            to="/booking"
                            className="inline-flex w-fit items-center rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-950/40 sm:text-sm"
                        >
                            Book a Move

                            <span className="ml-1.5">
                                →
                            </span>

                        </Link>

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM BAR
                ====================================================== */}

                <div className="w-full bg-[#050D19]/55 px-5 py-3 backdrop-blur-sm sm:px-7 lg:px-10 xl:px-14">

                    <div className="flex flex-col gap-2.5 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">

                        <p className="text-white/40">
                            © {new Date().getFullYear()} SHIFT Relocation Platform.
                            All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5">

                            <button
                                type="button"
                                onClick={() => setActiveModal('privacy')}
                                className="font-medium text-white/50 transition-colors hover:text-orange-400"
                            >
                                Privacy Policy
                            </button>

                            <span className="h-1 w-1 rounded-full bg-white/25" />

                            <button
                                type="button"
                                onClick={() => setActiveModal('terms')}
                                className="font-medium text-white/50 transition-colors hover:text-orange-400"
                            >
                                Terms & Conditions
                            </button>

                            <span className="h-1 w-1 rounded-full bg-white/25" />

                            <Link
                                to="/contact"
                                className="font-medium text-white/50 transition-colors hover:text-orange-400"
                            >
                                Support
                            </Link>

                        </div>

                    </div>


                    <div className="mt-2.5 border-t border-white/10 pt-2.5 text-center text-[9px] text-white/35">
                        Demo project using React, Tailwind CSS and Local Storage.
                    </div>

                </div>

            </footer>


            {/* =========================================================
                PRIVACY POLICY MODAL
            ========================================================== */}

            {activeModal === 'privacy' && (
                <LegalModal
                    title="Privacy Policy"
                    onClose={closeModal}
                >

                    <p>
                        SHIFT respects your privacy and is committed to protecting the
                        information provided through this demo relocation platform.
                    </p>

                    <h3>Information We Collect</h3>

                    <p>
                        Information such as your name, email address, phone number,
                        pickup location, destination and booking details may be entered
                        when creating an account or submitting a relocation request.
                    </p>

                    <h3>How Information Is Used</h3>

                    <p>
                        The information is used within the application to manage
                        customer accounts, bookings, enquiries and relocation requests.
                    </p>

                    <h3>Local Storage</h3>

                    <p>
                        This project uses browser Local Storage for demonstration
                        purposes. Data is stored locally in the user's browser and is
                        not connected to a production database.
                    </p>

                    <h3>Third-Party Services</h3>

                    <p>
                        This demo does not require a third-party backend service for
                        storing customer or booking information.
                    </p>

                    <h3>Contact</h3>

                    <p>
                        If you have questions regarding this policy, please contact
                        SHIFT through the contact information provided on this website.
                    </p>

                </LegalModal>
            )}


            {/* =========================================================
                TERMS MODAL
            ========================================================== */}

            {activeModal === 'terms' && (
                <LegalModal
                    title="Terms & Conditions"
                    onClose={closeModal}
                >

                    <p>
                        By using this SHIFT demo platform, you acknowledge and agree to
                        the following terms and conditions.
                    </p>

                    <h3>Use of the Platform</h3>

                    <p>
                        The platform is designed to demonstrate the process of requesting
                        relocation, moving and delivery services.
                    </p>

                    <h3>Customer Information</h3>

                    <p>
                        Customers are responsible for providing accurate information
                        when registering an account and submitting a booking or enquiry.
                    </p>

                    <h3>Booking Requests</h3>

                    <p>
                        Submitting a booking request does not represent a confirmed
                        relocation service until the request has been reviewed and
                        confirmed through the application.
                    </p>

                    <h3>Request Status</h3>

                    <p>
                        Booking and enquiry statuses may be updated by the administrator
                        through the admin section of the platform.
                    </p>

                    <h3>Demo Application</h3>

                    <p>
                        SHIFT is currently represented as a frontend demonstration
                        project using browser Local Storage. It should not be treated as
                        a live commercial relocation booking service.
                    </p>

                    <h3>Changes</h3>

                    <p>
                        These terms may be updated as the platform develops and new
                        features are introduced.
                    </p>

                </LegalModal>
            )}

        </>
    )
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ to, label }) {
    return (
        <Link
            to={to}
            className="group flex items-center text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
        >

            <span>
                {label}
            </span>

            <span className="ml-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
            </span>

        </Link>
    )
}


/* =========================================================
   SOCIAL IMAGE LINK
========================================================= */

/* =========================================================
   SOCIAL IMAGE LINK
========================================================= */

function SocialLink({ href, label, image }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="group flex h-12 w-12 items-center justify-center transition-all duration-300 hover:-translate-y-1 sm:h-14 sm:w-14"
        >

            <img
                src={image}
                alt={label}
                className="h-10 w-10 object-contain transition-all duration-300 group-hover:scale-125 sm:h-12 sm:w-12"
                onError={(event) => {
                    event.currentTarget.style.display = 'none'
                }}
            />

        </a>
    )
}


/* =========================================================
   LEGAL MODAL
========================================================= */

function LegalModal({ title, onClose, children }) {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
            onClick={onClose}
        >

            <div
                className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-black/30"
                onClick={(event) => event.stopPropagation()}
            >

                {/* MODAL HEADER */}

                <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-[#07111F] via-[#0D1930] to-[#182650] px-5 py-4 sm:px-7">

                    <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                            SHIFT
                        </p>

                        <h2 className="mt-0.5 text-lg font-extrabold text-white sm:text-xl">
                            {title}
                        </h2>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-lg font-semibold text-white/70 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/15 hover:text-orange-400"
                    >
                        ×
                    </button>

                </div>


                {/* MODAL CONTENT */}

                <div className="max-h-[calc(90vh-75px)] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">

                    <div className="space-y-4 text-sm leading-6 text-slate-600">

                        {children}

                    </div>

                </div>

            </div>

        </div>
    )
}
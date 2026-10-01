import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'

export default function About() {
    const features = [
        {
            title: 'Customer First',
            text: 'A simple experience that keeps customer requirements clear and organized.',
        },
        {
            title: 'Simple Workflow',
            text: 'From registration to enquiry tracking, every step is easy to understand.',
        },
        {
            title: 'Status Visibility',
            text: 'Customers can follow the progress of their submitted moving requests.',
        },
        {
            title: 'Admin Control',
            text: 'Administrators can manage customers, bookings and enquiries from one place.',
        },
    ]

    return (
        <>
            {/* ========================================================= */}
            {/* HERO SECTION - BACKGROUND VIDEO                          */}
            {/* ========================================================= */}

            <section className="relative min-h-[500px] w-full overflow-hidden sm:min-h-[570px] lg:min-h-[650px]">

                {/* ========================================================= */}
                {/* BACKGROUND VIDEO                                           */}
                {/* ========================================================= */}

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/videos/about-video.mp4" type="video/mp4" />
                </video>


                {/* ========================================================= */}
                {/* DARK OVERLAY                                                */}
                {/* ========================================================= */}

                <div className="absolute inset-0 bg-slate-950/55" />


                {/* ========================================================= */}
                {/* VIOLET GRADIENT OVERLAY                                     */}
                {/* ========================================================= */}

                <div className="absolute inset-0 bg-gradient-to-r from-violet-950/90 via-violet-900/60 to-slate-950/45" />


                {/* ========================================================= */}
                {/* BOTTOM DARK GRADIENT                                       */}
                {/* ========================================================= */}

                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />


                {/* ========================================================= */}
                {/* RIGHT SIDE ORANGE OVERLAY                                  */}
                {/* ========================================================= */}

                <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-orange-950/20 via-transparent to-transparent" />


                {/* ========================================================= */}
                {/* ANIMATED VIOLET GLOW                                      */}
                {/* ========================================================= */}

                <motion.div
                    className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
                    animate={{
                        scale: [1, 1.18, 1],
                        x: [0, 25, 0],
                        y: [0, 18, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                {/* ========================================================= */}
                {/* ANIMATED ORANGE GLOW                                      */}
                {/* ========================================================= */}

                <motion.div
                    className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-orange-400/15 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -25, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                {/* ========================================================= */}
                {/* SOFT CENTER LIGHT                                         */}
                {/* ========================================================= */}

                <motion.div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-3xl"
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                {/* ========================================================= */}
                {/* HERO CONTENT                                               */}
                {/* ========================================================= */}

                <div className="relative z-10 flex min-h-[500px] items-center px-5 py-16 sm:min-h-[570px] sm:px-8 sm:py-20 lg:min-h-[650px] lg:px-12 lg:py-24 xl:px-20">

                    <div className="mx-auto w-full max-w-7xl">

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.85,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-3xl"
                        >

                            {/* Small Heading */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15,
                                }}
                                className="text-xs font-extrabold uppercase tracking-[0.28em] text-violet-300 sm:text-sm"
                            >
                                About SHIFT
                            </motion.p>


                            {/* Main Heading */}

                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.25,
                                }}
                                className="mt-4 text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                Moving made

                                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent">
                                    simpler and clearer.
                                </span>
                            </motion.h1>


                            {/* Description */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.4,
                                }}
                                className="mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
                            >
                                SHIFT is a web-based relocation platform designed to
                                make moving enquiries easier to submit, organize and
                                track through one simple digital experience.
                            </motion.p>


                            {/* Animated Line */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    width: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    width: 110,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.6,
                                }}
                                className="mt-7 h-1 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400"
                            />


                            {/* Small Supporting Text */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.7,
                                }}
                                className="mt-5 text-xs font-medium tracking-wide text-white/55 sm:text-sm"
                            >
                                Simple process • Clear communication • Organized relocation
                            </motion.p>

                        </motion.div>

                    </div>

                </div>


                {/* ========================================================= */}
                {/* BOTTOM FADE INTO NEXT SECTION                              */}
                {/* ========================================================= */}

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent" />

            </section>
            

            <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-white to-orange-50 px-3 py-6 sm:px-4 sm:py-8 lg:px-8 lg:py-10 xl:px-12">

                {/* ========================================================= */}
                {/* BACKGROUND DECORATIONS                                    */}
                {/* ========================================================= */}

                <motion.div
                    className="pointer-events-none absolute -left-28 top-10 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 15, 0],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="pointer-events-none absolute -right-28 bottom-5 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -15, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                <div className="relative mx-auto w-full max-w-6xl">

                    {/* ========================================================= */}
                    {/* SECTION HEADING                                           */}
                    {/* ========================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.55,
                        }}
                        className="mx-auto mb-5 max-w-xl text-center sm:mb-7"
                    >

                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-violet-600 sm:text-xs">
                            What drives SHIFT
                        </p>

                        <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                            Mission & Vision
                        </h2>

                        <p className="mx-auto mt-1.5 max-w-lg text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                            The ideas that shape how SHIFT creates a simpler and more
                            organized relocation experience.
                        </p>

                    </motion.div>


                    {/* ========================================================= */}
                    {/* MISSION + VISION                                         */}
                    {/* IMPORTANT: grid-cols-2 keeps TWO COLUMNS ON MOBILE       */}
                    {/* ========================================================= */}

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6">


                        {/* ===================================================== */}
                        {/* VISION CARD                                            */}
                        {/* ===================================================== */}

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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.55,
                            }}
                            whileHover={{
                                y: -4,
                                scale: 1.01,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-orange-200/70 bg-white shadow-[0_8px_25px_rgba(249,115,22,0.08)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(249,115,22,0.14)] sm:rounded-3xl"
                        >

                            {/* ================================================= */}
                            {/* ANIMATED BORDER                                   */}
                            {/* ================================================= */}

                            <motion.div
                                className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-[1.5px] border-transparent sm:rounded-3xl"
                                animate={{
                                    borderColor: [
                                        "rgba(251,146,60,0.15)",
                                        "rgba(249,115,22,0.75)",
                                        "rgba(217,70,239,0.55)",
                                        "rgba(251,146,60,0.15)",
                                    ],
                                    boxShadow: [
                                        "0 0 0 rgba(249,115,22,0)",
                                        "0 0 18px rgba(249,115,22,0.18)",
                                        "0 0 12px rgba(217,70,239,0.12)",
                                        "0 0 0 rgba(249,115,22,0)",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />


                            {/* ================================================= */}
                            {/* MOVING TOP BORDER                                 */}
                            {/* ================================================= */}

                            <motion.div
                                className="absolute left-0 top-0 z-30 h-0.5 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />


                            {/* ================================================= */}
                            {/* IMAGE                                              */}
                            {/* ================================================= */}

                            <div className="relative h-[105px] overflow-hidden sm:h-[155px] lg:h-[175px]">

                                <motion.img
                                    src="/images/vision.jpg"
                                    alt="SHIFT vision"
                                    className="h-full w-full object-cover"
                                    initial={{
                                        scale: 1.08,
                                    }}
                                    whileInView={{
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                />

                                {/* Image Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />


                                {/* Label */}

                                <motion.div
                                    className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3"
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.25,
                                    }}
                                >

                                    <span className="rounded-full border border-white/30 bg-white/15 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[9px]">
                                        Future Ready
                                    </span>

                                </motion.div>

                            </div>


                            {/* ================================================= */}
                            {/* CONTENT                                            */}
                            {/* ================================================= */}

                            <div className="relative p-3 sm:p-4 lg:p-5">

                                <div className="flex items-start justify-between gap-1.5">

                                    <div>

                                        <p className="text-[7px] font-extrabold uppercase tracking-[0.18em] text-orange-500 sm:text-[9px]">
                                            Our
                                        </p>

                                        <h3 className="mt-0.5 text-xl font-black leading-none text-slate-900 sm:text-2xl lg:text-3xl">
                                            Vision
                                        </h3>

                                    </div>


                                    {/* Number */}

                                    <motion.span
                                        className="text-3xl font-black leading-none text-orange-100 sm:text-4xl lg:text-5xl"
                                        animate={{
                                            y: [0, -3, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        01
                                    </motion.span>

                                </div>


                                {/* Accent */}

                                <motion.div
                                    className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-fuchsia-500 sm:mt-2.5 sm:h-1"
                                    initial={{
                                        width: 25,
                                    }}
                                    whileInView={{
                                        width: 55,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                />


                                <h4 className="mt-2.5 text-[10px] font-extrabold leading-tight text-slate-900 sm:mt-3 sm:text-sm lg:text-base">
                                    Building a more connected relocation experience.
                                </h4>

                                <p className="mt-1.5 text-[8px] leading-3.5 text-slate-500 sm:mt-2 sm:text-[11px] sm:leading-4 lg:text-xs lg:leading-5">
                                    Our vision is to create a modern relocation platform
                                    that makes moving services easier to discover, request
                                    and monitor through a single digital experience.
                                </p>

                                <p className="mt-1.5 hidden text-[8px] leading-3.5 text-slate-500 sm:mt-2 sm:block sm:text-[11px] sm:leading-4 lg:text-xs lg:leading-5">
                                    We aim to continuously improve the way customers and
                                    administrators interact with relocation information,
                                    creating a platform that is simple, organized and scalable.
                                </p>

                            </div>

                        </motion.div>


                        {/* ===================================================== */}
                        {/* MISSION CARD                                           */}
                        {/* ===================================================== */}

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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.1,
                            }}
                            whileHover={{
                                y: -4,
                                scale: 1.01,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-violet-200/70 bg-white shadow-[0_8px_25px_rgba(124,58,237,0.08)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(124,58,237,0.14)] sm:rounded-3xl"
                        >

                            {/* ================================================= */}
                            {/* ANIMATED BORDER                                   */}
                            {/* ================================================= */}

                            <motion.div
                                className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-[1.5px] border-transparent sm:rounded-3xl"
                                animate={{
                                    borderColor: [
                                        "rgba(139,92,246,0.15)",
                                        "rgba(124,58,237,0.75)",
                                        "rgba(217,70,239,0.55)",
                                        "rgba(139,92,246,0.15)",
                                    ],
                                    boxShadow: [
                                        "0 0 0 rgba(124,58,237,0)",
                                        "0 0 18px rgba(124,58,237,0.18)",
                                        "0 0 12px rgba(217,70,239,0.12)",
                                        "0 0 0 rgba(124,58,237,0)",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: 0.7,
                                    ease: "easeInOut",
                                }}
                            />


                            {/* ================================================= */}
                            {/* MOVING TOP BORDER                                 */}
                            {/* ================================================= */}

                            <motion.div
                                className="absolute left-0 top-0 z-30 h-0.5 w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0.7,
                                }}
                            />


                            {/* ================================================= */}
                            {/* IMAGE                                              */}
                            {/* ================================================= */}

                            <div className="relative h-[105px] overflow-hidden sm:h-[155px] lg:h-[175px]">

                                <motion.img
                                    src="/images/mission.jpg"
                                    alt="SHIFT mission"
                                    className="h-full w-full object-cover"
                                    initial={{
                                        scale: 1.08,
                                    }}
                                    whileInView={{
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                />

                                {/* Image Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />


                                {/* Label */}

                                <motion.div
                                    className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3"
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.35,
                                    }}
                                >

                                    <span className="rounded-full border border-white/30 bg-white/15 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[9px]">
                                        Customer Focus
                                    </span>

                                </motion.div>

                            </div>


                            {/* ================================================= */}
                            {/* CONTENT                                            */}
                            {/* ================================================= */}

                            <div className="relative p-3 sm:p-4 lg:p-5">

                                <div className="flex items-start justify-between gap-1.5">

                                    <div>

                                        <p className="text-[7px] font-extrabold uppercase tracking-[0.18em] text-violet-600 sm:text-[9px]">
                                            Our
                                        </p>

                                        <h3 className="mt-0.5 text-xl font-black leading-none text-slate-900 sm:text-2xl lg:text-3xl">
                                            Mission
                                        </h3>

                                    </div>


                                    {/* Number */}

                                    <motion.span
                                        className="text-3xl font-black leading-none text-violet-100 sm:text-4xl lg:text-5xl"
                                        animate={{
                                            y: [0, -3, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5,
                                        }}
                                    >
                                        02
                                    </motion.span>

                                </div>


                                {/* Accent */}

                                <motion.div
                                    className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 sm:mt-2.5 sm:h-1"
                                    initial={{
                                        width: 25,
                                    }}
                                    whileInView={{
                                        width: 55,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                />


                                <h4 className="mt-2.5 text-[10px] font-extrabold leading-tight text-slate-900 sm:mt-3 sm:text-sm lg:text-base">
                                    Making relocation easier to understand and manage.
                                </h4>

                                <p className="mt-1.5 text-[8px] leading-3.5 text-slate-500 sm:mt-2 sm:text-[11px] sm:leading-4 lg:text-xs lg:leading-5">
                                    Our mission is to provide a clear digital platform
                                    where customers can communicate their relocation
                                    requirements without unnecessary complexity.
                                </p>

                                <p className="mt-1.5 hidden text-[8px] leading-3.5 text-slate-500 sm:mt-2 sm:block sm:text-[11px] sm:leading-4 lg:text-xs lg:leading-5">
                                    SHIFT brings service information, customer requests
                                    and status updates into one organized experience,
                                    helping customers and administrators stay connected
                                    throughout the relocation process.
                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>
            {/* ========================================================= */}
            {/* OUR APPROACH                                              */}
            {/* ========================================================= */}

            <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-16">

                {/* =========================================================
        BACKGROUND DECORATIONS
    ========================================================== */}

                <motion.div
                    className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-violet-300/15 blur-3xl"
                    animate={{
                        scale: [1, 1.12, 1],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-orange-300/10 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <div className="relative mx-auto w-full max-w-7xl">

                    <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">

                        {/* =====================================================
                VIDEO
            ====================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -50,
                                scale: 0.96,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="relative"
                        >

                            <div className="relative overflow-hidden rounded-[1.5rem] border border-violet-200 bg-violet-50 p-1.5 shadow-[0_15px_40px_rgba(124,58,237,0.10)] sm:p-2">

                                {/* =================================================
                        RELOCATION VIDEO
                    ================================================== */}

                                <motion.video
                                    src="/videos/approach-video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="h-[250px] w-full rounded-[1.15rem] object-cover sm:h-[300px] lg:h-[350px]"
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                />

                                {/* Dark gradient overlay */}

                                <div className="pointer-events-none absolute inset-1.5 rounded-[1.15rem] bg-gradient-to-t from-violet-950/35 via-transparent to-transparent sm:inset-2" />

                                {/* Subtle violet/orange overlay */}

                                <div className="pointer-events-none absolute inset-1.5 rounded-[1.15rem] bg-gradient-to-br from-violet-600/10 via-transparent to-orange-500/10 sm:inset-2" />

                                {/* Animated border */}

                                <motion.div
                                    className="pointer-events-none absolute inset-0 rounded-[1.5rem] border-2 border-transparent"
                                    animate={{
                                        borderColor: [
                                            'rgba(124,58,237,0.15)',
                                            'rgba(139,92,246,0.55)',
                                            'rgba(249,115,22,0.30)',
                                            'rgba(124,58,237,0.15)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                {/* Video label */}

                                <div className="pointer-events-none absolute bottom-5 left-5 sm:bottom-6 sm:left-6">

                                    <div className="rounded-xl border border-white/20 bg-slate-950/45 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5">

                                        <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-orange-300 sm:text-[9px]">
                                            SHIFT
                                        </p>

                                        <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">
                                            Moving made simpler
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>


                        {/* =====================================================
                CONTENT
            ====================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                        >

                            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600 sm:text-sm">
                                Our Approach
                            </p>

                            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                                Making every move simpler and more organized.
                            </h2>

                            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                SHIFT brings relocation services into one simple platform,
                                helping customers understand available services, submit
                                their requirements, and connect their moving needs with a
                                clear and convenient process.
                            </p>

                            {/* =================================================
                    FEATURES
                ================================================== */}

                            <div className="mt-5 grid grid-cols-2 gap-3">

                                {features.map((feature, index) => (

                                    <motion.div
                                        key={feature.title}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.08,
                                        }}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.01,
                                        }}
                                        className="relative overflow-hidden rounded-xl border border-violet-100 bg-violet-50/70 p-3 transition-all duration-300 hover:border-violet-300 hover:bg-white hover:shadow-md sm:p-3.5"
                                    >

                                        {/* Animated top gradient */}

                                        <motion.div
                                            className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400"
                                            animate={{
                                                x: ['-100%', '100%'],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'linear',
                                                delay: index * 0.2,
                                            }}
                                        />

                                        <h3 className="text-xs font-extrabold text-slate-900 sm:text-sm">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                                            {feature.text}
                                        </p>

                                    </motion.div>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* ========================================================= */}
            {/* WHY CHOOSE SHIFT                                          */}
            {/* ========================================================= */}

            <section className="relative w-full overflow-hidden bg-slate-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-16">

                {/* Background Glow */}

                <motion.div
                    className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="relative mx-auto w-full max-w-7xl">

                    {/* Heading */}

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
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="mx-auto mb-7 max-w-2xl text-center sm:mb-9"
                    >

                        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-violet-300 sm:text-sm">
                            Why Choose SHIFT
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Built around a better moving experience.
                        </h2>

                        <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
                            SHIFT keeps the relocation process simple, organized and
                            easy to follow from the first enquiry to the final update.
                        </p>

                    </motion.div>


                    {/* Feature Cards */}

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">

                        {[
                            {
                                number: "01",
                                title: "Easy Booking",
                                text: "Submit your relocation requirements through a simple and clear booking process.",
                                accent: "from-violet-500 to-fuchsia-500",
                                numberColor: "text-violet-400",
                            },
                            {
                                number: "02",
                                title: "Clear Updates",
                                text: "Track your enquiry status and stay informed as your request moves forward.",
                                accent: "from-blue-500 to-violet-500",
                                numberColor: "text-blue-400",
                            },
                            {
                                number: "03",
                                title: "Organized Requests",
                                text: "Keep customer details, service requirements and enquiries organized in one place.",
                                accent: "from-orange-400 to-pink-500",
                                numberColor: "text-orange-400",
                            },
                            {
                                number: "04",
                                title: "Reliable Service",
                                text: "A structured platform designed to make communication around relocation easier.",
                                accent: "from-emerald-400 to-cyan-500",
                                numberColor: "text-emerald-400",
                            },
                        ].map((item, index) => (

                            <motion.div
                                key={item.number}
                                initial={{
                                    opacity: 0,
                                    y: 30,
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
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09] sm:p-5"
                            >

                                {/* Animated Top Border */}

                                <motion.div
                                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.accent}`}
                                    animate={{
                                        opacity: [0.55, 1, 0.55],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        delay: index * 0.3,
                                    }}
                                />

                                {/* Number */}

                                <div className="flex items-start justify-between">

                                    <span
                                        className={`text-3xl font-black leading-none ${item.numberColor} opacity-80 sm:text-4xl`}
                                    >
                                        {item.number}
                                    </span>

                                    <motion.div
                                        className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.accent}`}
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.6, 1, 0.6],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                        }}
                                    />

                                </div>


                                {/* Content */}

                                <h3 className="mt-5 text-sm font-extrabold text-white sm:text-base">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-[10px] leading-4 text-white/55 sm:text-xs sm:leading-5">
                                    {item.text}
                                </p>


                                {/* Bottom Accent */}

                                <div className="mt-4 overflow-hidden rounded-full bg-white/10">
                                    <motion.div
                                        className={`h-0.5 bg-gradient-to-r ${item.accent}`}
                                        initial={{
                                            width: "20%",
                                        }}
                                        whileInView={{
                                            width: "100%",
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: index * 0.15,
                                        }}
                                    />
                                </div>

                            </motion.div>

                        ))}

                    </div>


                    {/* Bottom Statement */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4,
                        }}
                        className="mt-6 text-center sm:mt-8"
                    >

                        <p className="text-xs font-medium text-white/50 sm:text-sm">
                            One platform. Clear communication. A simpler way to move.
                        </p>

                    </motion.div>

                </div>

            </section>

            
        </>
    )
}
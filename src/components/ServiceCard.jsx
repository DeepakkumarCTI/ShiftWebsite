import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index }) {
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
                amount: 0.15,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -7,
                scale: 1.015,
            }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(76,29,149,0.08)] sm:rounded-3xl"
        >

            {/* ===================================================== */}
            {/* ANIMATED OUTER BORDER                                 */}
            {/* ===================================================== */}

            <motion.div
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-2 border-transparent sm:rounded-3xl"
                animate={{
                    borderColor: [
                        'rgba(139,92,246,0.18)',
                        'rgba(124,58,237,0.65)',
                        'rgba(217,70,239,0.55)',
                        'rgba(249,115,22,0.45)',
                        'rgba(139,92,246,0.18)',
                    ],
                    boxShadow: [
                        '0 0 0 rgba(124,58,237,0)',
                        '0 0 18px rgba(124,58,237,0.16)',
                        '0 0 20px rgba(217,70,239,0.14)',
                        '0 0 16px rgba(249,115,22,0.12)',
                        '0 0 0 rgba(124,58,237,0)',
                    ],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.25,
                }}
            />


            {/* ===================================================== */}
            {/* MOVING TOP BORDER                                     */}
            {/* ===================================================== */}

            <motion.div
                className="pointer-events-none absolute left-0 top-0 z-30 h-1 w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3,
                }}
            />


            {/* ===================================================== */}
            {/* MOVING BOTTOM BORDER                                  */}
            {/* ===================================================== */}

            <motion.div
                className="pointer-events-none absolute bottom-0 left-0 z-30 h-1 w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                animate={{
                    x: ['100%', '-100%'],
                }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.35,
                }}
            />


            {/* ===================================================== */}
            {/* IMAGE                                                  */}
            {/* ===================================================== */}

            <div className="relative h-[125px] overflow-hidden bg-gradient-to-br from-violet-100 to-orange-50 sm:h-44 lg:h-48">

                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    initial={{
                        scale: 1.06,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    whileHover={{
                        scale: 1.08,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeOut',
                    }}
                />


                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />


                {/* Floating Service Label */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.45,
                        delay: index * 0.08 + 0.2,
                    }}
                    className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3"
                >

                    <span className="rounded-full border border-white/30 bg-white/15 px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:px-3 sm:text-[9px]">
                        SHIFT SERVICE
                    </span>

                </motion.div>

            </div>


            {/* ===================================================== */}
            {/* CONTENT                                                */}
            {/* ===================================================== */}

            <div className="relative p-3 sm:p-5 lg:p-6">

                {/* Small Label */}

                <div className="mb-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-violet-500 sm:mb-2 sm:text-[10px] sm:tracking-[0.18em]">
                    Professional Service
                </div>


                {/* Service Title */}

                <motion.h3
                    className="text-sm font-black leading-tight text-slate-900 sm:text-lg lg:text-xl"
                    whileHover={{
                        x: 2,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    {service.title}
                </motion.h3>


                {/* Description */}

                <p className="mt-1.5 text-[9px] leading-3.5 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                    {service.text}
                </p>


                {/* ================================================= */}
                {/* ANIMATED ACCENT LINE                               */}
                {/* ================================================= */}

                <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-violet-100 sm:mt-4">

                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400"
                        initial={{
                            width: '20%',
                        }}
                        whileInView={{
                            width: '100%',
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                        }}
                    />

                </div>


                {/* ================================================= */}
                {/* LINK                                                 */}
                {/* ================================================= */}

                <Link
                    to="/booking"
                    className="group/link mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-violet-600 transition-colors duration-300 hover:text-fuchsia-500 sm:mt-4 sm:text-xs lg:text-sm"
                >

                    <span>
                        Request this service
                    </span>

                    <motion.span
                        className="inline-block"
                        initial={{
                            x: 0,
                        }}
                        whileHover={{
                            x: 4,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        →
                    </motion.span>

                </Link>

            </div>


            {/* ===================================================== */}
            {/* HOVER GLOW                                             */}
            {/* ===================================================== */}

            <motion.div
                className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                }}
            />

        </motion.div>
    )
}
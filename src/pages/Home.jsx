import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const reviewCards = [
  { name: 'Arun Kumar', location: 'Chennai', image: '/images/arun-kumar.jpg', category: 'House Shifting', categoryClass: 'bg-violet-50 text-violet-700', borderClass: 'from-violet-500 to-fuchsia-500', text: '“SHIFT made our house move much easier. The enquiry process was simple and the communication was clear.”' },
  { name: 'Meera S', location: 'Coimbatore', image: '/images/meera-s.jpeg', category: 'Office Relocation', categoryClass: 'bg-fuchsia-50 text-fuchsia-700', borderClass: 'from-fuchsia-500 to-violet-500', text: '“We needed to relocate our office without unnecessary delays. SHIFT helped us organize everything clearly.”' },
  { name: 'Rahul Menon', location: 'Kochi', image: '/images/rahul-menon.jpg', category: 'Furniture Moving', categoryClass: 'bg-orange-50 text-orange-700', borderClass: 'from-orange-500 to-fuchsia-500', text: '“The booking process was very convenient. I could submit my moving requirement and track it easily.”' },
]

function ReviewCard({ review }) {
  return (
    <motion.article initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, transition: { duration: 0.25 } }} className="group flex h-full min-h-[270px] flex-col rounded-3xl border border-white/90 bg-white/90 p-5 shadow-[0_15px_40px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(76,29,149,0.15)] sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${review.borderClass} p-[2px] shadow-md sm:h-14 sm:w-14`}>
          <div className="h-full w-full overflow-hidden rounded-[14px] bg-slate-100">
            <img src={review.image} alt={review.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(event) => { event.currentTarget.style.display = 'none' }} />
          </div>
        </div>
        <div className="min-w-0"><h3 className="truncate text-sm font-black text-slate-900 sm:text-base">{review.name}</h3><p className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">{review.location}</p></div>
      </div>
      <div className="my-5 h-px w-full bg-gradient-to-r from-violet-100 via-slate-100 to-orange-100" />
      <div className="flex flex-1 flex-col"><p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-7">{review.text}</p><div className="mt-auto pt-6"><span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-extrabold sm:text-[11px] ${review.categoryClass}`}>{review.category}</span></div></div>
    </motion.article>
  )
}

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const heroItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  rotate: [-2, 2, -2],
}

export default function Home() {
  const [reviewPage, setReviewPage] = useState(0)
  const [reviewDirection, setReviewDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewDirection(1)
      setReviewPage((previous) => (previous + 1) % reviewCards.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="w-full overflow-hidden">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative isolate min-h-[460px] w-full overflow-hidden bg-[#050816] sm:min-h-[520px] lg:min-h-[580px]">

        {/* =========================================================
      BACKGROUND VIDEO
  ========================================================= */}

        <motion.video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.svg"
          initial={{
            scale: 1.04,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            ease: 'easeOut',
          }}
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </motion.video>


        {/* =========================================================
      BASE OVERLAY
  ========================================================= */}

        <div className="absolute inset-0 bg-[#020617]/35" />


        {/* =========================================================
      LEFT TEXT READABILITY OVERLAY
  ========================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-r
      from-[#020617]/95
      via-[#020617]/85
      via-45%
      via-[#020617]/55
      to-transparent
    "
        />


        {/* =========================================================
      MOBILE READABILITY OVERLAY
  ========================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-[#020617]/30
      via-transparent
      to-[#020617]/70
      lg:hidden
    "
        />


        {/* =========================================================
      BOTTOM OVERLAY
  ========================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-32
      bg-gradient-to-t
      from-[#020617]/85
      via-[#020617]/30
      to-transparent
    "
        />


        {/* =========================================================
      VIOLET / ORANGE GLOW
  ========================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      bg-[radial-gradient(circle_at_8%_40%,rgba(124,58,237,0.20),transparent_30%),radial-gradient(circle_at_90%_65%,rgba(249,115,22,0.12),transparent_28%)]
    "
        />


        {/* =========================================================
      ANIMATED GRID
  ========================================================= */}

        <motion.div
          className="absolute inset-0 fade-grid opacity-10 sm:opacity-15"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />


        {/* =========================================================
      LEFT DECORATIVE GLOW
  ========================================================= */}

        <motion.div
          className="
      pointer-events-none
      absolute
      -left-24
      top-10
      h-52
      w-52
      rounded-full
      bg-violet-500/15
      blur-3xl
      sm:h-60
      sm:w-60
    "
          animate={floatingAnimation}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =========================================================
      RIGHT DECORATIVE GLOW
  ========================================================= */}

        <motion.div
          className="
      pointer-events-none
      absolute
      -right-24
      bottom-5
      h-56
      w-56
      rounded-full
      bg-orange-500/15
      blur-3xl
      sm:h-64
      sm:w-64
    "
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =========================================================
      HERO CONTENT
  ========================================================= */}

        <div
          className="
      relative
      flex
      min-h-[460px]
      w-full
      items-center
      px-4
      py-7
      sm:min-h-[520px]
      sm:px-6
      sm:py-9
      md:py-10
      lg:min-h-[580px]
      lg:px-10
      lg:py-12
      xl:px-14
    "
        >

          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-7xl"
          >

            {/* =====================================================
          CONTENT WRAPPER
      ===================================================== */}

            <div className="max-w-4xl">


              {/* ===================================================
            BADGE
        =================================================== */}

              <motion.div
                variants={heroItem}
                className="
            mb-3
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-[#020617]/80
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-violet-100
            shadow-[0_6px_20px_rgba(0,0,0,0.45)]
            backdrop-blur-md
            sm:mb-4
            sm:px-4
            sm:py-2
            sm:text-[10px]
            lg:text-xs
          "
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
              >

                <motion.span
                  className="
              h-1.5
              w-1.5
              rounded-full
              bg-gradient-to-r
              from-violet-400
              to-orange-400
              shadow-[0_0_10px_rgba(167,139,250,0.9)]
            "
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />

                Moving made simple

              </motion.div>


              {/* ===================================================
            MAIN HEADING
        =================================================== */}

              <motion.h1
                variants={heroItem}
                className="
            max-w-5xl
            text-3xl
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-white
            drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
              >

                Move with less stress.

                <br />

                <motion.span
                  className="
              gradient-text
              inline-block
              drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]
            "
                  animate={{
                    backgroundPosition: [
                      '0% 50%',
                      '100% 50%',
                      '0% 50%',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  SHIFT handles the journey.
                </motion.span>

              </motion.h1>


              {/* ===================================================
            DESCRIPTION
        =================================================== */}

              <motion.p
                variants={heroItem}
                className="
            mt-3
            max-w-xl
            text-xs
            font-medium
            leading-5
            text-white
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]
            sm:mt-4
            sm:text-sm
            sm:leading-6
            md:text-base
            lg:text-lg
          "
              >
                Book house shifting, office relocation, furniture moving and
                delivery services through one organized platform.
              </motion.p>


              {/* ===================================================
            BUTTONS
        =================================================== */}

              <motion.div
                variants={heroItem}
                className="
            mt-4
            flex
            flex-wrap
            gap-2.5
            sm:mt-5
            sm:gap-3
          "
              >

                {/* PRIMARY BUTTON */}

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >

                  <Link
                    to="/booking"
                    className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-gradient-to-r
                from-violet-600
                via-violet-500
                to-indigo-500
                px-3.5
                py-2
                text-xs
                font-bold
                text-white
                shadow-[0_8px_22px_rgba(124,58,237,0.45)]
                transition-all
                duration-300
                hover:from-violet-500
                hover:to-indigo-400
                sm:rounded-xl
                sm:px-4
                sm:py-2.5
                sm:text-sm
              "
                  >

                    Start a Booking

                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>

                  </Link>

                </motion.div>


                {/* SECONDARY BUTTON */}

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >

                  <Link
                    to="/services"
                    className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/30
                bg-[#020617]/80
                px-3.5
                py-2
                text-xs
                font-bold
                text-white
                shadow-[0_7px_20px_rgba(0,0,0,0.4)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/50
                hover:bg-[#020617]/95
                sm:rounded-xl
                sm:px-4
                sm:py-2.5
                sm:text-sm
              "
                  >

                    Explore Services

                    <span>↗</span>

                  </Link>

                </motion.div>

              </motion.div>


              {/* ===================================================
            STATS
            ALWAYS 3 COLUMNS ON MOBILE
        =================================================== */}

              <motion.div
                variants={heroItem}
                className="
    mt-5
    grid
    w-full
    max-w-3xl
    grid-cols-3
    gap-1.5
    sm:mt-7
    sm:gap-3
  "
              >
                {/* STAT 1 */}
                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
      rounded-xl
      border
      border-white/20
      bg-[#020617]/75
      px-2
      py-2.5
      text-center
      shadow-[0_8px_25px_rgba(0,0,0,0.4)]
      backdrop-blur-md
      sm:rounded-2xl
      sm:px-4
      sm:py-3
    "
                >
                  <div className="text-lg font-extrabold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-2xl">
                    4
                  </div>

                  <div className="mt-1 text-[9px] font-semibold leading-tight text-white/90 sm:text-xs">
                    Core services
                  </div>
                </motion.div>


                {/* STAT 2 */}
                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
      rounded-xl
      border
      border-white/20
      bg-[#020617]/75
      px-2
      py-2.5
      text-center
      shadow-[0_8px_25px_rgba(0,0,0,0.4)]
      backdrop-blur-md
      sm:rounded-2xl
      sm:px-4
      sm:py-3
    "
                >
                  <div className="text-lg font-extrabold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-2xl">
                    24/7
                  </div>

                  <div className="mt-1 text-[9px] font-semibold leading-tight text-white/90 sm:text-xs">
                    Request access
                  </div>
                </motion.div>


                {/* STAT 3 */}
                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
      rounded-xl
      border
      border-white/20
      bg-[#020617]/75
      px-2
      py-2.5
      text-center
      shadow-[0_8px_25px_rgba(0,0,0,0.4)]
      backdrop-blur-md
      sm:rounded-2xl
      sm:px-4
      sm:py-3
    "
                >
                  <div className="text-lg font-extrabold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-2xl">
                    100%
                  </div>

                  <div className="mt-1 text-[9px] font-semibold leading-tight text-white/90 sm:text-xs">
                    Local demo
                  </div>
                </motion.div>

              </motion.div>

            </div>

          </motion.div>

        </div>


        {/* =========================================================
      SCROLL INDICATOR
  ========================================================= */}

       

      </section>


      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f3f0ff] via-[#eef2ff] to-[#e0e7ff] px-3 py-10 sm:px-5 sm:py-20 lg:px-10 xl:px-10">

        {/* ================= BACKGROUND DECORATION ================= */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <motion.div
          className="pointer-events-none absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 w-full">

          {/* ================= SECTION HEADING ================= */}

          <motion.div
            className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end"
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div>

              <motion.div
                className="mb-2 flex items-center gap-2"
                initial={{
                  opacity: 0,
                  x: -20,
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
                }}
              >

                <span className="h-2 w-2 rounded-full bg-violet-600 shadow-[0_0_12px_rgba(124,58,237,0.7)]" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-600 sm:text-sm">
                  Our Services
                </p>

              </motion.div>

              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Everything your move needs.
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Reliable relocation and moving solutions designed to make every
                step of your journey simple, safe and organized.
              </p>

            </div>

            <motion.div
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-xs font-extrabold text-violet-600 transition-colors duration-300 hover:text-indigo-600 sm:text-sm"
              >

                View all services

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-base"
                >
                  →
                </motion.span>

              </Link>

            </motion.div>

          </motion.div>


          {/* ================= SERVICES GRID ================= */}

          <motion.div
            className="grid w-full grid-cols-4 gap-2 sm:gap-2 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.14,
                },
              },
            }}
          >

            {services.map((service, i) => {

              /* ================= FALLBACK DESCRIPTIONS ================= */

              const serviceDescription =
                service.description ||
                (
                  service.title === "House Shifting"
                    ? "Safe and organized home relocation with careful handling of your belongings."
                    : service.title === "Office Relocation"
                      ? "Smooth office relocation with reliable handling of furniture and workplace equipment."
                      : service.title === "Furniture Moving"
                        ? "Careful furniture transportation designed to protect your valuable items during the move."
                        : service.title === "Delivery Service"
                          ? "Fast and dependable pickup and delivery for your important items and packages."
                          : "Reliable moving and relocation support designed around your needs."
                )

              return (

                <motion.div
                  key={service.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 55,
                      scale: 0.92,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,

                      transition: {
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="group relative min-w-0"
                >

                  {/* ================= CARD ================= */}

                  <div
                    className="
                relative
                z-10
                h-full
                min-h-[290px]
                overflow-hidden
                rounded-2xl
                border
                border-white/80
                bg-white/80
                shadow-[0_12px_35px_rgba(79,70,229,0.10)]
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:border-violet-300/80
                group-hover:bg-white/95
                group-hover:shadow-[0_22px_50px_rgba(79,70,229,0.20)]
                sm:min-h-[330px]
                sm:rounded-3xl
              "
                  >

                    {/* ================= CARD GLOW ================= */}

                    <motion.div
                      className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-violet-400/15
                  blur-2xl
                "
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />


                    {/* ================= SERVICE IMAGE ================= */}

                    <div className="relative mx-1.5 mt-1.5 overflow-hidden rounded-xl sm:mx-2.5 sm:mt-2.5 sm:rounded-2xl">

                      <motion.div
                        className="relative h-[82px] w-full sm:h-[125px]"
                        whileHover={{
                          scale: 1.04,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >

                        <img
                          src={
                            service.image ||
                            service.img ||
                            service.icon
                          }
                          alt={service.title}
                          className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                        />

                        {/* IMAGE OVERLAY */}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/10 to-transparent" />

                        {/* SERVICE NUMBER */}

                        <div className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-[#111827]/75 text-[8px] font-extrabold text-white shadow-lg backdrop-blur-md sm:left-3 sm:top-3 sm:h-7 sm:w-7 sm:text-[10px]">
                          0{i + 1}
                        </div>

                      </motion.div>

                    </div>


                    {/* ================= CARD CONTENT ================= */}

                    <div className="relative z-10 px-2.5 pb-12 pt-2.5 sm:px-4 sm:pb-14 sm:pt-4">

                      {/* TITLE */}

                      <motion.h3
                        className="
                    text-[10px]
                    font-extrabold
                    leading-tight
                    text-slate-900
                    sm:text-base
                  "
                        whileHover={{
                          x: 2,
                        }}
                      >
                        {service.title}
                      </motion.h3>


                      {/* DESCRIPTION */}

                      <p
                        className="
                    mt-1.5
                    text-[8px]
                    font-medium
                    leading-[1.45]
                    text-slate-600
                    sm:mt-2.5
                    sm:text-xs
                    sm:leading-5
                  "
                      >
                        {serviceDescription}
                      </p>


                      {/* SMALL SERVICE LINE */}

                      <div className="mt-2.5 flex items-center gap-1.5 sm:mt-3">

                        <span className="h-1 w-1 rounded-full bg-violet-500 sm:h-1.5 sm:w-1.5" />

                        <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-violet-500 sm:text-[9px]">
                          Professional service
                        </span>

                      </div>

                    </div>


                    {/* ================================================= */}
                    {/* MOVING ROAD / TRUCK                               */}
                    {/* ================================================= */}

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">

                      <div
                        className="
                    relative
                    h-[38px]
                    border-t
                    border-slate-200/80
                    bg-gradient-to-t
                    from-slate-100/95
                    to-transparent
                    sm:h-[48px]
                  "
                      >

                        {/* ROAD GLOW */}

                        <motion.div
                          className="
                      absolute
                      bottom-2
                      left-0
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-transparent
                      via-violet-300
                      to-transparent
                    "
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />


                        {/* ROAD LINES */}

                        <motion.div
                          className="
                      absolute
                      bottom-1.5
                      left-0
                      flex
                      w-[200%]
                      gap-3
                      sm:gap-5
                    "
                          animate={{
                            x: ["0%", "-50%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >

                          {[...Array(12)].map((_, lineIndex) => (

                            <span
                              key={lineIndex}
                              className="
                          h-[2px]
                          w-4
                          shrink-0
                          rounded-full
                          bg-slate-300
                          sm:w-8
                        "
                            />

                          ))}

                        </motion.div>


                        {/* ================= MOVING TRUCK ================= */}

                        <motion.div
                          className="
                      absolute
                      bottom-[5px]
                      left-0
                      z-20
                    "
                          animate={{
                            x: [
                              "-30%",
                              "calc(100vw / 4)",
                            ],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 0.3,
                          }}
                        >

                          <motion.div
                            animate={{
                              y: [0, -1.5, 0],
                            }}
                            transition={{
                              duration: 0.35,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative"
                          >

                            {/* TRUCK BODY */}

                            <div className="relative flex items-end">

                              <div
                                className="
                            relative
                            h-4
                            w-8
                            rounded-[3px]
                            bg-gradient-to-r
                            from-violet-600
                            to-indigo-500
                            shadow-[0_3px_8px_rgba(79,70,229,0.35)]
                            sm:h-6
                            sm:w-12
                            sm:rounded-md
                          "
                              >

                                {/* CARGO */}

                                <div
                                  className="
                              absolute
                              left-0
                              top-0
                              h-3
                              w-5
                              rounded-tl-[3px]
                              rounded-br-[2px]
                              bg-gradient-to-br
                              from-violet-500
                              to-indigo-600
                              sm:h-5
                              sm:w-8
                            "
                                >

                                  <div className="absolute inset-x-1 top-1 h-[1px] bg-white/40" />

                                </div>


                                {/* CAB */}

                                <div
                                  className="
                              absolute
                              right-0
                              top-1
                              h-3
                              w-3
                              rounded-r-[3px]
                              bg-indigo-400
                              sm:h-5
                              sm:w-5
                            "
                                >

                                  <div
                                    className="
                                absolute
                                left-[2px]
                                top-[2px]
                                h-1.5
                                w-2
                                rounded-[1px]
                                bg-sky-100/90
                                sm:h-2.5
                                sm:w-3
                              "
                                  />

                                </div>


                                {/* WHEELS */}

                                <span
                                  className="
                              absolute
                              -bottom-1
                              left-1
                              h-2
                              w-2
                              rounded-full
                              border
                              border-slate-500
                              bg-slate-800
                              sm:left-1.5
                              sm:h-3
                              sm:w-3
                            "
                                />

                                <span
                                  className="
                              absolute
                              -bottom-1
                              right-1
                              h-2
                              w-2
                              rounded-full
                              border
                              border-slate-500
                              bg-slate-800
                              sm:right-1.5
                              sm:h-3
                              sm:w-3
                            "
                                />

                              </div>

                            </div>


                            {/* TRUCK LIGHT */}

                            <motion.span
                              className="
                          absolute
                          -right-1
                          top-2
                          h-1
                          w-1
                          rounded-full
                          bg-orange-400
                          shadow-[0_0_6px_rgba(251,146,60,0.8)]
                          sm:top-2.5
                          sm:h-1.5
                          sm:w-1.5
                        "
                              animate={{
                                opacity: [0.4, 1, 0.4],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                              }}
                            />

                          </motion.div>

                        </motion.div>

                      </div>

                    </div>


                    {/* ================================================= */}
                    {/* CONTINUOUS ANIMATED BORDER                       */}
                    {/* ================================================= */}

                    {/* OUTER GLOW / PULSE */}

                    <motion.div
                      className="
                  pointer-events-none
                  absolute
                  -inset-[1px]
                  z-30
                  rounded-2xl
                  border
                  border-violet-400/30
                  opacity-80
                  sm:rounded-3xl
                "
                      animate={{
                        borderColor: [
                          "rgba(124,58,237,0.20)",
                          "rgba(99,102,241,0.75)",
                          "rgba(168,85,247,0.55)",
                          "rgba(124,58,237,0.20)",
                        ],
                        boxShadow: [
                          "0 0 0 rgba(124,58,237,0)",
                          "0 0 18px rgba(124,58,237,0.28)",
                          "0 0 28px rgba(99,102,241,0.18)",
                          "0 0 0 rgba(124,58,237,0)",
                        ],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.35,
                      }}
                    />


                    {/* MOVING TOP BORDER */}

                    <motion.div
                      className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  z-40
                  h-[2px]
                  overflow-hidden
                  rounded-full
                "
                    >

                      <motion.div
                        className="
                    absolute
                    -left-[45%]
                    top-0
                    h-full
                    w-[45%]
                    bg-gradient-to-r
                    from-transparent
                    via-violet-500
                    to-transparent
                    blur-[0.5px]
                  "
                        animate={{
                          x: ["0%", "325%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.35,
                        }}
                      />

                    </motion.div>


                    {/* MOVING BOTTOM BORDER */}

                    <motion.div
                      className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  z-40
                  h-[2px]
                  overflow-hidden
                  rounded-full
                "
                    >

                      <motion.div
                        className="
                    absolute
                    -right-[45%]
                    bottom-0
                    h-full
                    w-[45%]
                    bg-gradient-to-r
                    from-transparent
                    via-indigo-500
                    to-transparent
                    blur-[0.5px]
                  "
                        animate={{
                          x: ["0%", "-325%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.35 + 1.5,
                        }}
                      />

                    </motion.div>


                    {/* HOVER INTENSITY BORDER */}

                    <motion.div
                      className="
                  pointer-events-none
                  absolute
                  -inset-[1px]
                  z-50
                  rounded-2xl
                  border
                  border-transparent
                  transition-all
                  duration-500
                  group-hover:border-violet-400/70
                  group-hover:shadow-[0_0_25px_rgba(124,58,237,0.28)]
                  sm:rounded-3xl
                "
                    />

                  </div>

                </motion.div>

              )

            })}

          </motion.div>


          {/* ================= BOTTOM MESSAGE ================= */}

          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-center sm:mt-10"
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
            }}
          >

            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.16em]">
              Simple booking • Safe handling • Reliable relocation
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

          </motion.div>

        </div>

      </section>

<section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-white to-orange-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl sm:h-96 sm:w-96" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl sm:h-96 sm:w-96" />
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-200/10 blur-3xl" />

  <div className="relative mx-auto w-full max-w-7xl">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-violet-200 bg-white/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-700 shadow-sm sm:px-5 sm:text-xs">Customer Reviews</span>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Trusted by customers<span className="mt-1 block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">for their next move.</span></h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">See what customers say about their experience with SHIFT relocation services.</p>
      <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" />
    </motion.div>

    <div className="relative mt-10 sm:mt-12">
      <div className="overflow-hidden px-1 py-2">
        <AnimatePresence mode="wait" custom={reviewDirection}>
          <motion.div key={reviewPage} custom={reviewDirection} variants={{ enter: (direction) => ({ opacity: 0, x: direction > 0 ? 90 : -90 }), center: { opacity: 1, x: 0 }, exit: (direction) => ({ opacity: 0, x: direction > 0 ? -90 : 90 }) }} initial="enter" animate="center" exit="exit" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.08} onDragEnd={(event, info) => { if (info.offset.x < -60) { setReviewDirection(1); setReviewPage((previous) => (previous + 1) % reviewCards.length) } else if (info.offset.x > 60) { setReviewDirection(-1); setReviewPage((previous) => (previous - 1 + reviewCards.length) % reviewCards.length) } }} className="cursor-grab active:cursor-grabbing">
            <div className="grid grid-cols-1 gap-5 sm:hidden"><ReviewCard review={reviewCards[reviewPage]} /></div>
            <div className="hidden grid-cols-2 gap-6 sm:grid lg:hidden"><ReviewCard review={reviewCards[reviewPage]} /><ReviewCard review={reviewCards[(reviewPage + 1) % reviewCards.length]} /></div>
            <div className="hidden grid-cols-3 gap-7 lg:grid">{reviewCards.map((review) => <ReviewCard key={review.name} review={review} />)}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button type="button" onClick={() => { setReviewDirection(-1); setReviewPage((previous) => (previous - 1 + reviewCards.length) % reviewCards.length) }} className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200 bg-white/95 text-xl font-bold text-violet-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-violet-50 lg:flex" aria-label="Previous review">‹</button>
      <button type="button" onClick={() => { setReviewDirection(1); setReviewPage((previous) => (previous + 1) % reviewCards.length) }} className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200 bg-white/95 text-xl font-bold text-violet-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-violet-50 lg:flex" aria-label="Next review">›</button>
    </div>

    <div className="mt-6 flex items-center justify-center gap-2">
      {reviewCards.map((review, index) => <button key={review.name} type="button" onClick={() => { setReviewDirection(index >= reviewPage ? 1 : -1); setReviewPage(index) }} aria-label={`Show review ${index + 1}`} className={`h-2.5 rounded-full transition-all duration-300 ${index === reviewPage ? 'w-8 bg-gradient-to-r from-violet-600 to-orange-500' : 'w-2.5 bg-slate-300 hover:bg-violet-300'}`} />)}
    </div>

    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#07111F] via-[#101B32] to-[#4C1D95] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:mt-10 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl"><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">Ready to move?</p><h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">Let's make your next move easier.</h3><p className="mt-2 text-sm leading-6 text-slate-300">Tell us what you need and let SHIFT handle the relocation process.</p></div>
        <Link to="/booking" className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50 sm:w-auto">Book a Move</Link>
      </div>
    </motion.div>
  </div>
</section>

      {/* =========================================================
          WORKFLOW SECTION
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-white to-orange-50 px-3 py-8 sm:px-5 sm:py-12 lg:px-10 xl:px-16">

        {/* ========================================================= */}
        {/* BACKGROUND DECORATIONS                                   */}
        {/* ========================================================= */}

        <motion.div
          className="
      pointer-events-none
      absolute
      -left-32
      top-10
      h-64
      w-64
      rounded-full
      bg-violet-300/20
      blur-3xl
      sm:h-80
      sm:w-80
    "
          animate={{
            scale: [1, 1.18, 1],
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
      pointer-events-none
      absolute
      -right-32
      bottom-0
      h-64
      w-64
      rounded-full
      bg-orange-300/20
      blur-3xl
      sm:h-80
      sm:w-80
    "
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating center glow */}

        <motion.div
          className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-48
      w-48
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-fuchsia-300/10
      blur-3xl
    "
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Moving horizontal light */}

        <motion.div
          className="
      pointer-events-none
      absolute
      left-0
      top-1/2
      h-px
      w-full
      bg-gradient-to-r
      from-transparent
      via-violet-300/40
      to-transparent
    "
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 w-full">

          {/* ========================================================= */}
          {/* MAIN CONTENT                                             */}
          {/* ========================================================= */}

          <div className="relative grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* ======================================================= */}
            {/* LEFT CONTENT                                            */}
            {/* ======================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* SMALL LABEL */}

              <motion.div
                className="mb-2 flex items-center gap-2"
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
              >

                <motion.span
                  className="
              h-2
              w-2
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-orange-400
              shadow-[0_0_12px_rgba(124,58,237,0.7)]
            "
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.p
                  className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-fuchsia-500
              sm:text-sm
            "
                  animate={{
                    letterSpacing: ['0.2em', '0.24em', '0.2em'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Simple workflow
                </motion.p>

              </motion.div>


              {/* HEADING */}

              <motion.h2
                className="
            mt-2
            max-w-2xl
            text-2xl
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-slate-900
            sm:text-4xl
            lg:text-5xl
          "
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
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                One request.
                <br />

                Clear updates.
                <br />

                <motion.span
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: [
                      '0% 50%',
                      '100% 50%',
                      '0% 50%',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Better moving days.
                </motion.span>

              </motion.h2>


              {/* DESCRIPTION */}

              <motion.p
                className="
            mt-4
            max-w-2xl
            text-xs
            leading-5
            text-slate-600
            sm:mt-5
            sm:text-base
            sm:leading-7
          "
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
                  duration: 0.7,
                  delay: 0.4,
                }}
              >
                Create an account, choose a service, submit your move details
                and follow the request status from your customer area.
              </motion.p>


              {/* ANIMATED LINE */}

              <motion.div
                className="
            mt-5
            h-1
            rounded-full
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-500
            to-orange-400
          "
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 96,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.55,
                  ease: 'easeOut',
                }}
              />

            </motion.div>


            {/* ======================================================= */}
            {/* STEPS                                                    */}
            {/* ======================================================= */}

            <div className="relative">

              {/* ===================================================== */}
              {/* CONNECTING LINE                                      */}
              {/* ===================================================== */}

              <div
                className="
            pointer-events-none
            absolute
            left-[16%]
            right-[16%]
            top-[30%]
            hidden
            h-[2px]
            bg-gradient-to-r
            from-violet-300
            via-fuchsia-300
            to-orange-300
            lg:block
          "
              />

              <motion.div
                className="
            pointer-events-none
            absolute
            left-[16%]
            top-[30%]
            hidden
            h-[3px]
            w-10
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-violet-500
            to-transparent
            lg:block
          "
                animate={{
                  x: ['0%', '720%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />


              {/* ===================================================== */}
              {/* THREE COLUMNS - EVEN ON MOBILE                       */}
              {/* ===================================================== */}

              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 lg:gap-4">

                {[
                  {
                    title: 'Register',
                    text: 'Create your SHIFT customer account.',
                  },
                  {
                    title: 'Submit',
                    text: 'Share pickup, destination and service needs.',
                  },
                  {
                    title: 'Track',
                    text: 'See the latest enquiry or booking status.',
                  },
                ].map((step, i) => (

                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 70,
                      scale: 0.9,
                      rotateX: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.025,
                      rotate: i === 1 ? 0 : i === 0 ? -1 : 1,
                    }}
                    className="group relative min-w-0"
                  >

                    {/* ================================================= */}
                    {/* CARD                                               */}
                    {/* ================================================= */}

                    <div
                      className="
                  relative
                  min-h-[190px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/80
                  bg-white/75
                  p-2.5
                  shadow-[0_12px_35px_rgba(124,58,237,0.10)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:bg-white/95
                  group-hover:shadow-[0_22px_50px_rgba(124,58,237,0.20)]
                  sm:min-h-[235px]
                  sm:rounded-2xl
                  sm:p-4
                  lg:min-h-[250px]
                  lg:rounded-3xl
                  lg:p-6
                "
                    >

                      {/* CARD GLOW */}

                      <motion.div
                        className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-violet-400/15
                    blur-2xl
                  "
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'easeInOut',
                        }}
                      />


                      {/* ================================================= */}
                      {/* NUMBER                                             */}
                      {/* ================================================= */}

                      <motion.div
                        className="
                    relative
                    z-10
                    text-xl
                    font-extrabold
                    leading-none
                    text-violet-600
                    sm:text-3xl
                    lg:text-4xl
                  "
                        animate={{
                          opacity: [0.65, 1, 0.65],
                          scale: [1, 1.04, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        0{i + 1}
                      </motion.div>


                      {/* ================================================= */}
                      {/* TITLE                                              */}
                      {/* ================================================= */}

                      <motion.h3
                        className="
                    relative
                    z-10
                    mt-3
                    text-[10px]
                    font-extrabold
                    leading-tight
                    text-slate-900
                    sm:mt-5
                    sm:text-sm
                    lg:text-base
                  "
                        whileHover={{
                          x: 3,
                        }}
                      >
                        {step.title}
                      </motion.h3>


                      {/* ================================================= */}
                      {/* DESCRIPTION                                        */}
                      {/* ================================================= */}

                      <p
                        className="
                    relative
                    z-10
                    mt-1.5
                    text-[8px]
                    font-medium
                    leading-[1.45]
                    text-slate-500
                    sm:mt-2
                    sm:text-xs
                    sm:leading-5
                    lg:text-sm
                  "
                      >
                        {step.text}
                      </p>


                      {/* ================================================= */}
                      {/* PROGRESS LINE                                      */}
                      {/* ================================================= */}

                      <div className="absolute bottom-3 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4">

                        <div className="h-1 overflow-hidden rounded-full bg-slate-100">

                          <motion.div
                            className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        via-fuchsia-500
                        to-orange-400
                      "
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: '100%',
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.6 + i * 0.2,
                              ease: 'easeOut',
                            }}
                          />

                        </div>

                      </div>


                      {/* ================================================= */}
                      {/* MOVING BORDER                                      */}
                      {/* ================================================= */}

                      <motion.div
                        className="
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    z-20
                    rounded-xl
                    border
                    border-transparent
                    sm:rounded-2xl
                    lg:rounded-3xl
                  "
                        animate={{
                          borderColor: [
                            'rgba(124,58,237,0.10)',
                            'rgba(124,58,237,0.65)',
                            'rgba(249,115,22,0.55)',
                            'rgba(124,58,237,0.10)',
                          ],
                          boxShadow: [
                            '0 0 0 rgba(124,58,237,0)',
                            '0 0 18px rgba(124,58,237,0.18)',
                            '0 0 25px rgba(249,115,22,0.12)',
                            '0 0 0 rgba(124,58,237,0)',
                          ],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: 'easeInOut',
                        }}
                      />


                      {/* ================================================= */}
                      {/* MOVING LIGHT                                      */}
                      {/* ================================================= */}

                      <div
                        className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    z-30
                    h-[2px]
                    overflow-hidden
                  "
                      >

                        <motion.div
                          className="
                      absolute
                      -left-1/2
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-violet-500
                      to-transparent
                    "
                          animate={{
                            x: ['0%', '300%'],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            delay: i * 0.45,
                            ease: 'linear',
                          }}
                        />

                      </div>


                      {/* ================================================= */}
                      {/* HOVER BORDER                                      */}
                      {/* ================================================= */}

                      <div
                        className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    border
                    border-transparent
                    transition-all
                    duration-500
                    group-hover:border-violet-400/70
                    group-hover:shadow-[0_0_25px_rgba(124,58,237,0.20)]
                    sm:rounded-2xl
                    lg:rounded-3xl
                  "
                      />

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* BOTTOM MESSAGE                                           */}
          {/* ========================================================= */}

          <motion.div
            className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        text-center
        sm:mt-8
      "
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
              duration: 0.7,
              delay: 0.4,
            }}
          >

            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-violet-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.16em]">
              Simple booking • Safe handling • Reliable relocation
            </p>

            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

          </motion.div>

        </div>

      </section>
    </main>
  )
}


/* =========================================================
   STAT CARD
========================================================= */

function Stat({ n, t, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="group rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg hover:shadow-violet-100/60"
    >
      <motion.div
        className="text-2xl font-extrabold text-slate-900"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
        }}
      >
        {n}
      </motion.div>

      <div className="mt-1 text-xs font-medium text-slate-500">
        {t}
      </div>

      <motion.div
        className="mt-3 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-orange-400"
        initial={{
          width: 0,
        }}
        animate={{
          width: '55%',
        }}
        transition={{
          duration: 0.8,
          delay: delay + 0.3,
        }}
      />
    </motion.div>
  )
}
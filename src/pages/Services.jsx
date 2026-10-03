import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function Services() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#151B35] to-[#24104F]">
        {/* Gradient Glow */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="text-sm font-semibold tracking-wide text-violet-200">
                SHIFT Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Choose the{" "}
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                relocation service
              </span>{" "}
              you need.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore the core services available in the platform and send a
              request with your pickup location, destination, and preferred
              relocation date.
            </p>

            {/* Decorative Line */}
            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
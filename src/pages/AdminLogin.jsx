import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function AdminLogin() {
    const { adminLogin } = useApp()
    const nav = useNavigate()

    const [email, setEmail] = useState('admin@shift.com')
    const [password, setPassword] = useState('admin123')
    const [error, setError] = useState('')

    const submit = (e) => {
        e.preventDefault()

        const r = adminLogin(email, password)

        if (!r.ok) {
            setError(r.message)
        } else {
            nav('/admin')
        }
    }

    return (
        <section className="section-pad min-h-[calc(100vh-160px)] bg-gradient-to-br from-violet-100 via-white to-fuchsia-50">
            <div className="mx-auto max-w-md px-4">

                <div className="glass rounded-[2rem] p-6 sm:p-9">

                    {/* HEADER */}
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 sm:text-sm">
                            Admin Access
                        </p>

                        <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                            SHIFT Control Center
                        </h1>

                        <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                            Sign in to manage bookings, enquiries and
                            customer accounts.
                        </p>
                    </div>

                    {/* ERROR */}
                    {error && (
                        <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-3 text-xs font-semibold text-rose-600 sm:text-sm">
                            {error}
                        </div>
                    )}

                    {/* FORM */}
                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
                    >
                        <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
                            Email

                            <input
                                className="field mt-1.5"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
                            Password

                            <input
                                className="field mt-1.5"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="btn-primary w-full"
                        >
                            Open Admin Dashboard
                        </button>
                    </form>

                    {/* DEMO CREDENTIALS */}
                    <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50 p-3.5 sm:mt-6 sm:p-4">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-violet-500">
                            Demo Credentials
                        </p>

                        <p className="mt-1.5 text-[11px] leading-5 text-violet-700 sm:text-xs">
                            admin@shift.com / admin123
                        </p>
                    </div>

                    {/* BACK TO WEBSITE */}
                    <div className="mt-4 border-t border-slate-200 pt-4 sm:mt-5 sm:pt-5">
                        <Link
                            to="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 sm:py-3 sm:text-sm"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                ←
                            </span>

                            Back to Website
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
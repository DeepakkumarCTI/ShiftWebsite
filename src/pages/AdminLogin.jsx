import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function AdminLogin() {
    const { adminLogin } = useApp()
    const nav = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        setError('')
        setLoading(true)

        const trimmedEmail = email.trim()

        if (!trimmedEmail || !password) {
            setError('Please enter your email and password.')
            setLoading(false)
            return
        }

        const r = adminLogin(trimmedEmail, password)

        if (!r.ok) {
            setError(r.message || 'Invalid admin credentials.')
            setLoading(false)
            return
        }

        nav('/admin')
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

                    {/* ERROR MESSAGE */}
                    {error && (
                        <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-3 text-xs font-semibold leading-5 text-rose-600 sm:text-sm">
                            {error}
                        </div>
                    )}

                    {/* LOGIN FORM */}
                    <form
                        onSubmit={submit}
                        className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
                    >

                        {/* EMAIL */}
                        <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
                            Email

                            <input
                                className="field mt-1.5"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setError('')
                                }}
                                placeholder="Enter admin email"
                                autoComplete="username"
                                required
                            />
                        </label>

                        {/* PASSWORD */}
                        <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
                            Password

                            <input
                                className="field mt-1.5"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError('')
                                }}
                                placeholder="Enter admin password"
                                autoComplete="current-password"
                                required
                            />
                        </label>

                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn-primary w-full transition-all ${
                                loading
                                    ? 'cursor-not-allowed opacity-70'
                                    : ''
                            }`}
                        >
                            {loading ? 'Signing In...' : 'Open Admin Dashboard'}
                        </button>
                    </form>

                    {/* LOGIN INFORMATION */}
                    <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50 p-3.5 sm:mt-6 sm:p-4">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-violet-500">
                            Admin Login
                        </p>

                        <p className="mt-1.5 text-[11px] leading-5 text-violet-700 sm:text-xs">
                            Enter your admin email and password manually to
                            access the dashboard.
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
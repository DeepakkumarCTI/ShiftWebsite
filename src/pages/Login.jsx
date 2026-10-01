import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Login() {
    const { login } = useApp()
    const nav = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const submit = (e) => {
        e.preventDefault()

        const r = login(form.email, form.password)

        if (!r.ok) {
            setError(r.message)
        } else {
            nav('/')
        }
    }

    return (
        <AuthShell
            title="Welcome back"
            text="Sign in to view and track your SHIFT requests."
        >
            <form
                onSubmit={submit}
                className="space-y-4 sm:space-y-5"
            >
                {error && <Alert>{error}</Alert>}

                <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(value) =>
                        setForm({
                            ...form,
                            email: value,
                        })
                    }
                />

                <Field
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={(value) =>
                        setForm({
                            ...form,
                            password: value,
                        })
                    }
                />

                <button
                    type="submit"
                    className="btn-primary w-full"
                >
                    Sign In
                </button>

                <p className="text-center text-xs text-slate-500 sm:text-sm">
                    New to SHIFT?{' '}
                    <Link
                        className="font-semibold text-violet-600 transition-colors hover:text-fuchsia-600"
                        to="/register"
                    >
                        Create an account
                    </Link>
                </p>

                {/* BACK TO WEBSITE */}
                <div className="border-t border-slate-200 pt-4 sm:pt-5">
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
            </form>
        </AuthShell>
    )
}

/* =========================================================
   AUTH SHELL
========================================================= */

function AuthShell({
    title,
    text,
    children,
}) {
    return (
        <section className="section-pad min-h-[calc(100vh-160px)] bg-gradient-to-br from-violet-50 via-white to-orange-50">
            <div className="mx-auto max-w-md px-3 sm:px-4">

                {/* LOGO + HEADER */}
                <div className="mb-5 text-center sm:mb-7">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-lg font-extrabold text-white shadow-lg shadow-violet-500/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
                        S
                    </div>

                    <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:mt-5 sm:text-3xl">
                        {title}
                    </h1>

                    <p className="mx-auto mt-1.5 max-w-sm text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                        {text}
                    </p>
                </div>

                {/* LOGIN CARD */}
                <div className="glass rounded-[1.5rem] p-5 shadow-[0_15px_45px_rgba(76,29,149,0.08)] sm:rounded-[2rem] sm:p-8">
                    {children}
                </div>
            </div>
        </section>
    )
}

/* =========================================================
   FIELD
========================================================= */

function Field({
    label,
    value,
    onChange,
    type = 'text',
}) {
    return (
        <label className="block text-xs font-semibold text-slate-700 sm:text-sm">
            {label}

            <input
                required
                type={type}
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="field mt-1.5 sm:mt-2"
            />
        </label>
    )
}

/* =========================================================
   ALERT
========================================================= */

function Alert({ children }) {
    return (
        <div className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-xs font-semibold text-rose-600 sm:rounded-2xl sm:text-sm">
            {children}
        </div>
    )
}

export { AuthShell }
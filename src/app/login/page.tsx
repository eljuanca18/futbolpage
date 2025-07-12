'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import '@/styles/auth.css';

export default function RegistroPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setMsg('Las contraseñas no coinciden');
      return;
    }
    const { error } = await supabase.auth.signUp({ email, password });
    setMsg(error ? error.message : 'Revisa tu correo para confirmar tu cuenta');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="text-center">
          <img src="/icon-basket.svg" width={40} />
          <h2 className="auth-title">BasketPro</h2>
          <p className="auth-subtitle">Crea tu cuenta para comenzar</p>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="form-control mb-3"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button type="submit" className="btn auth-btn w-100 mb-2">
            Registrarse
          </button>
        </form>

        {msg && <p className="text-center text-danger">{msg}</p>}

        <p className="text-center mt-3">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-warning fw-bold">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

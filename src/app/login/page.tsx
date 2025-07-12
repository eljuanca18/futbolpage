'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setPassword('');
    setConfirm('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!isLogin && password !== confirm) {
      setMessage('❌ Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage('❌ Credenciales incorrectas');
      else {
        setMessage('✅ Iniciando sesión...');
        router.push('/');
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      setMessage(
        error
          ? `❌ ${error.message}`
          : '✅ Registro exitoso. Revisa tu correo para confirmar tu cuenta.'
      );
    }

    setLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="text-center mb-3">
          <div style={{ fontSize: '2.5rem' }}>⚽</div>
          <h2 className="auth-title">FutbolPage</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Inicia sesión para continuar' : 'Crea tu cuenta para comenzar'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
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

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="form-control mb-3"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          )}

          <button type="submit" className="btn auth-btn w-100 mb-2" disabled={loading}>
            {loading
              ? isLogin
                ? 'Iniciando...'
                : 'Registrando...'
              : isLogin
              ? 'Iniciar sesión'
              : 'Registrarse'}
          </button>
        </form>

        {message && <p className="text-center mt-2">{message}</p>}

        <p className="text-center mt-3">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <button onClick={toggleMode} className="btn btn-link p-0 auth-link">
            {isLogin ? 'Registrarse' : 'Iniciar sesión'}
          </button>
        </p>
      </div>
    </div>
  );
}

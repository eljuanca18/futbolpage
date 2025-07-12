'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage("Error al enviar el correo.");
    } else {
      setMessage("Correo de verificación enviado.");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión por correo</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Tu correo"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Enviar enlace</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}

'use client';

import { useUser } from '@/utils/useUser';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const { user, loading } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user]);

  if (loading || !user) return <p className="text-white text-center mt-5">Cargando...</p>;

  return (
    <div className="container text-white">
      <h1 className="mb-3">⚽ Bienvenido a FutbolPage</h1>
      <p className="mb-4">Sesión iniciada como: <strong>{user.email}</strong></p>

      <div className="row g-4">
        <div className="col-md-4">
          <Link href="/equipos" className="text-decoration-none">
            <div className="p-4 bg-success bg-opacity-75 rounded shadow text-center h-100">
              <h3>🏟️ Equipos</h3>
              <p>Ver todos los equipos registrados</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/jugadores" className="text-decoration-none">
            <div className="p-4 bg-success bg-opacity-75 rounded shadow text-center h-100">
              <h3>👟 Jugadores</h3>
              <p>Explora a los jugadores destacados</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/buscar" className="text-decoration-none">
            <div className="p-4 bg-success bg-opacity-75 rounded shadow text-center h-100">
              <h3>🔎 Buscar</h3>
              <p>Encuentra equipos o jugadores por nombre</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="text-center mt-5">
        <button onClick={handleLogout} className="btn btn-outline-light">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

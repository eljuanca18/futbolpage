'use client';

import data from "../../data/datosFutbol.json";
import Link from "next/link";
import { useAuth } from '@/components/AuthProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EquiposPage() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [loading, session]);

  if (loading || !session) return <p className="text-white text-center mt-5">Cargando...</p>;

  return (
    <div className="container">
      <h2 className="mb-4">🏟️ Equipos</h2>
      <ul className="list-group">
        {data.map(equipo => (
          <li key={equipo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {equipo.escudo && (
                <img
                  src={equipo.escudo}
                  alt={`Escudo de ${equipo.nombre}`}
                  width={40}
                  height={40}
                  className="me-3"
                />
              )}
              <Link href={`/equipo/${equipo.id}`} className="text-success fw-bold">
                {equipo.nombre}
              </Link>
            </div>
            <span className="badge bg-success">{equipo.liga}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

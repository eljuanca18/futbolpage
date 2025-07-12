"use client";

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

  if (loading || !session) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Equipos</h2>
      <ul className="list-group">
        {data.map(equipo => (
          <li key={equipo.id} className="list-group-item">
            <Link href={`/equipo/${equipo.id}`}>{equipo.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
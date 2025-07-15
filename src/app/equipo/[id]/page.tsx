import data from "@/data/datosFutbol.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EquipoPage({ params }: { params: { id: string } }) {
  const equipo = data.find((e) => e.id === parseInt(params.id));

  if (!equipo) return notFound();

  return (
    <div className="container">
      <div className="text-center mb-4">
        {equipo.escudo && (
          <img
            src={equipo.escudo}
            alt={`Escudo de ${equipo.nombre}`}
            width={100}
            height={100}
            className="mb-3"
          />
        )}
        <h2 className="text-white">{equipo.nombre}</h2>
        <p className="badge bg-success fs-6">{equipo.liga}</p>
      </div>

      <h4 className="text-white">👟 Jugadores</h4>
      <ul className="list-group">
        {equipo.jugadores.map((j) => (
          <li key={j.id} className="list-group-item d-flex justify-content-between">
            <Link href={`/jugador/${j.id}`} className="text-success fw-bold text-decoration-none">
              {j.nombre}
            </Link>
            <span className="text-muted">{j.posicion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

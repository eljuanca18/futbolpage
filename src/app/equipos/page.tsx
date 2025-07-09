import data from "../../data/datosFutbol.json";
import Link from "next/link";

export default function EquiposPage() {
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
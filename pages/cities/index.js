import { cities } from "@/lib/data";

export default function Cities() {
  <>
    <h1>All cities</h1>

    <ul>
      {cities.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </>;
}

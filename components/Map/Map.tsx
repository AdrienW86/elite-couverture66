"use client";
import { useState } from "react";
export default function Map() {
  const [show, setShow] = useState(false);
  return (
    <section>
      <h2 style={{ fontSize: "1.8rem" }}>Notre secteur</h2>
      <p>Perpignan et les Pyrénées-Orientales.</p>
      {show ? (
        <iframe
          title="Carte de Perpignan — Google Maps"
          src="https://www.google.com/maps?q=Perpignan,France&output=embed"
          width="480"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{ width: "100%", border: 0 }}
          allowFullScreen
        />
      ) : (
        <>
          <p className="image-note">
            L’affichage de cette carte transmet des données de connexion à
            Google.
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => setShow(true)}
          >
            Autoriser et afficher Google Maps ↗
          </button>
        </>
      )}
    </section>
  );
}

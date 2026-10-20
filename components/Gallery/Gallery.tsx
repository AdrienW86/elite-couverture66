'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
const images = [
  'Intervention sur une couverture', 'Pose de tuiles en terre cuite', 'Travaux sur un toit', 'Structure en bois', 'Entretien d’une gouttière', 'Travail sur une charpente', 'Isolation sous toiture', 'Détail d’une couverture en tuiles', 'Nettoyage d’une toiture', 'Entretien de tuiles', 'Traitement d’une couverture', 'Entretien au bord du toit', 'Pose d’une couverture', 'Assemblage de tuiles', 'Ossature de charpente', 'Mousses sur une couverture', 'Intervention d’entretien', 'Dépose d’une couverture',
].map((alt, index) => ({ src: `/image${index + 1}.avif`, alt }));
export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(images[0]);
  return <><div className="gallery-grid">{images.map((image, index) => <button key={image.src} type="button" aria-label={`Agrandir : ${image.alt}`} onClick={() => { setCurrent(image); dialog.current?.showModal(); }}><Image src={image.src} alt={image.alt} width={600} height={420} sizes="(max-width: 760px) 50vw, 33vw" /><span className="image-note">{String(index + 1).padStart(2, '0')} — {image.alt}</span></button>)}</div><dialog className="gallery-dialog" ref={dialog} aria-label={current.alt} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button type="button" onClick={() => dialog.current?.close()}>Fermer ×</button><Image src={current.src} alt={current.alt} width={1400} height={1000} sizes="95vw" /></dialog></>;
}

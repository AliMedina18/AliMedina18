import s from "@/styles/components/StarField.module.css";

/** Tres capas de estrellas que viajan hacia arriba. Colocar dentro de
 *  un `position: relative; overflow: hidden` con fondo oscuro. */
export default function StarField() {
  return (
    <>
      <div className={s.stars}  aria-hidden="true" />
      <div className={s.stars2} aria-hidden="true" />
      <div className={s.stars3} aria-hidden="true" />
    </>
  );
}

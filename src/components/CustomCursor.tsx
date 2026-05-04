'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => cursor.classList.add(styles.hover);
    const onMouseLeaveLink = () => cursor.classList.remove(styles.hover);

    document.addEventListener('mousemove', moveCursor);
    animate();

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={dotRef} className={styles.dot} />
    </>
  );
}

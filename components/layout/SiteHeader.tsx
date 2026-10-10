"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { site } from "@/content/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on navigation (e.g. back/forward buttons; link clicks close it directly).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close if resized up to desktop while open.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 561px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open ]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo.png" alt="" width={34} height={34} priority />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul className={styles.list}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <Button size="sm" href={site.cta.href}>
                {site.cta.label}
              </Button>
            </li>
          </ul>
        </nav>

        <div className={styles.mobileActions}>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className={styles.bars}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={styles.mobilePanel}
          onClick={() => setOpen(false)}
        >
          <ul className={styles.mobileList}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <Button href={site.cta.href}>{site.cta.label}</Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

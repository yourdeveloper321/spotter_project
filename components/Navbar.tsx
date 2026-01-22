"use client";

import { useState } from "react";
import "../components/Navbar.css";
import Hero from "../components/Hero";

const navItems = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Company", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo">
          Spotter
        </a>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="cta-button" onClick={() => setOpen(false)}>
              Get Started
            </button>
          </li>
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="menu-button"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="cta-button" onClick={() => setOpen(false)}>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

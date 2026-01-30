'use client';

import { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [time, setTime] = useState('');

  // Client-only dynamic content
  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString());
  }, []);

  return (
    <section className="hero">
      <h1>Spotter AI</h1>
      <p>
        Track driver logs and fleet data effortlessly. Real-time insights to help
        your business stay compliant and efficient.
      </p>

      {/* Client-only dynamic text */}
      {time && <p className="live-time">Current time: {time}</p>}

      <button className="hero-button">Get Started</button>
    </section>
  );
}

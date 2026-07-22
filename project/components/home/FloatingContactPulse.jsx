'use client';

import { useEffect, useState } from 'react';
import FloatingContact from '../ui/FloatingContact';

export default function FloatingContactPulse() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setPulse(false), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={pulse ? 'ig-pulse' : ''} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, borderRadius: '50%' }}>
      <FloatingContact phone="+351912926688" whatsapp="351912926688" />
    </div>
  );
}

import './globals.css';
import { MotionConfig } from 'motion/react';

export const metadata = {
  title: 'Private Transfers & Tours in Portugal | Idealgreen',
  description:
    'Private airport transfers, tailor-made tours and an electric fleet across Portugal. Book a driver who knows the road, not a shared shuttle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}

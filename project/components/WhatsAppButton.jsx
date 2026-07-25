export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351912926688"
      target="_blank"
      rel="noopener"
      style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: 'var(--green-700)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.3)', zIndex: 50 }}
    >
      ●
    </a>
  );
}

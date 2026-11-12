// Swap for a real photo later: <img src="/images/x.jpg" alt="..." />
export default function Placeholder({ label = 'Image', ratio = '4 / 3', tall }) {
  return (
    <div className="ph" style={{ aspectRatio: ratio }} role="img" aria-label={label + ' placeholder'}>
      <svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"><path d="M8 24 32 14l24 10v24L32 58 8 48z"/><path d="M8 24l24 10 24-10M32 34v24"/></svg>
      <span>{label}</span>
    </div>
  )
}

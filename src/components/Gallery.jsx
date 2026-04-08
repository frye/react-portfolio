import { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

const photos = [
  { id: 'P1068057', thumb: '/images/gallery/thumbs/P1068057.jpg', display: '/images/gallery/display/P1068057.jpg' },
  { id: 'P1068062', thumb: '/images/gallery/thumbs/P1068062.jpg', display: '/images/gallery/display/P1068062.jpg' },
  { id: 'P1068290', thumb: '/images/gallery/thumbs/P1068290.jpg', display: '/images/gallery/display/P1068290.jpg' },
  { id: 'P1068502', thumb: '/images/gallery/thumbs/P1068502.jpg', display: '/images/gallery/display/P1068502.jpg' },
  { id: 'P1068507', thumb: '/images/gallery/thumbs/P1068507.jpg', display: '/images/gallery/display/P1068507.jpg' },
]

const gear = [
  { type: 'Body', name: 'Panasonic Lumix G9 Mark II' },
  { type: 'Lens', name: 'Leica DG Vario-Summilux 10-25mm F1.7 ASPH.' },
  { type: 'Lens', name: 'Leica DG Vario-Elmar 100-400mm F4-6.3 II ASPH. POWER O.I.S.' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [gearOpen, setGearOpen] = useState(false)
  const isOpen = lightboxIndex !== null

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex(i => (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setLightboxIndex(i => (i + 1) % photos.length), [])

  useEffect(() => {
    if (!isOpen) return
    function onKey(e) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1 className="gradient-text">Photo Gallery</h1>
        <p className="gallery-subtitle">
          Captured in the Pacific Northwest with Micro Four Thirds gear
        </p>
      </div>

      <div className="gear-section">
        <button
          className="gear-toggle glass-card"
          onClick={() => setGearOpen(o => !o)}
          aria-expanded={gearOpen}
        >
          <span>📷 Camera Gear</span>
          <span className={`gear-chevron ${gearOpen ? 'open' : ''}`}>▾</span>
        </button>
        {gearOpen && (
          <ul className="gear-list glass-card">
            {gear.map((g, i) => (
              <li key={i}>
                <span className="gear-type">{g.type}</span>
                <span className="gear-name">{g.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            className="gallery-thumb"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View photo ${photo.id}`}
          >
            <img src={photo.thumb} alt={`Photo ${photo.id}`} loading="lazy" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightboxIndex].display}
              alt={`Photo ${photos[lightboxIndex].id}`}
            />
            <button className="lb-close" onClick={close} aria-label="Close">✕</button>
            <button className="lb-prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="lb-next" onClick={next} aria-label="Next">›</button>
            <span className="lb-counter">
              {lightboxIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

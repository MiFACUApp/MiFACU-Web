import { useState } from 'react'
import { X } from 'lucide-react'
import { useCountdown } from '../hooks/useCountdown'

const DISMISS_KEY = 'mifacu-banner-v1'

export default function LaunchBanner() {
    const [visible, setVisible] = useState(() => !localStorage.getItem(DISMISS_KEY))
    const { days, launched } = useCountdown()

    function dismiss() {
        localStorage.setItem(DISMISS_KEY, '1')
        setVisible(false)
    }

    if (!visible || launched) return null

    return (
        <div
            role="status"
            aria-live="polite"
            style={{
                background: 'linear-gradient(90deg, #1A2B4A 0%, #2563EB 100%)',
                color: '#fff',
                padding: '9px 44px 9px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                position: 'relative',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.4,
            }}
        >
            <span aria-hidden="true">🚀</span>
            <span>
                miFACU llega el <strong>16 de Marzo de 2026</strong>
                {days > 0 && (
                    <> · <strong>{days} {days === 1 ? 'día' : 'días'}</strong> para el lanzamiento</>
                )}
            </span>
            <button
                onClick={dismiss}
                aria-label="Cerrar anuncio de lanzamiento"
                style={{
                    position: 'absolute',
                    right: 12,
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.65)',
                    cursor: 'pointer',
                    padding: 5,
                    display: 'flex',
                    borderRadius: 4,
                    transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >
                <X size={15} />
            </button>
        </div>
    )
}

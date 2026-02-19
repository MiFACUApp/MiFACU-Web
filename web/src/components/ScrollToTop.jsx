import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // If there is a hash, scroll to the element
        if (hash) {
            const id = hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // If no hash, scroll to top
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

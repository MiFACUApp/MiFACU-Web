import { createContext, useContext, useState } from 'react'
import LaunchModal from '../components/LaunchModal'

const LaunchContext = createContext()

export function LaunchProvider({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <LaunchContext.Provider value={{ openModal: () => setOpen(true) }}>
            {children}
            <LaunchModal open={open} onClose={() => setOpen(false)} />
        </LaunchContext.Provider>
    )
}

export const useLaunch = () => useContext(LaunchContext)

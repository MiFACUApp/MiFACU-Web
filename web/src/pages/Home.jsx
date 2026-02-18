import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import StatsBar from '../components/sections/StatsBar'
import Features from '../components/sections/Features'
import MiloSpotlight from '../components/sections/MiloSpotlight'
import CorrelativasSpotlight from '../components/sections/CorrelativasSpotlight'
import FeatureGrid from '../components/sections/FeatureGrid'
import Personalization from '../components/sections/Personalization'
import Pricing from '../components/sections/Pricing'
import Universities from '../components/sections/Universities'
import IdeaSection from '../components/sections/IdeaSection'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Hero />
            <StatsBar />
            <Features />
            <MiloSpotlight />
            <CorrelativasSpotlight />
            <FeatureGrid />
            <Personalization />
            <Pricing />
            <Universities />
            <IdeaSection />
            <FinalCTA />
        </motion.div>
    )
}

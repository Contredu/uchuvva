import Hero from '@/components/sections/Hero'
import MenuGrid from '@/components/sections/MenuGrid'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

/**
 * HomePage assembles all sections in order.
 * Each section has a unique id for smooth scroll navigation.
 * Ready for React Router: just wrap this in a <Route path="/" element={<HomePage />} />
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuGrid />
      <Services />
      <About />
      <Contact />
    </>
  )
}

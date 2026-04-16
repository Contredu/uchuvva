import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#7A8C6E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-['Inter'] text-[#6B4F3A] text-sm tracking-widest uppercase">Cargando...</p>
        </div>
      </div>
    }>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App

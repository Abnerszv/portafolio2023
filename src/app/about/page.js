import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <AboutSection />
        <br></br>
        <Footer />
      </div>
    </main>
  )
}
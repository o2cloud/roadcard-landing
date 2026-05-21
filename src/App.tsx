import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import System from './components/System/System'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Finance from './components/Finance/Finance'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import CookieBanner from './components/CookieBanner/CookieBanner'

import './App.css'

function App() {
  return (
		<>
			<div className='fixed top-0 left-0 right-0 h-11 bg-[#F2F1EC] backdrop-blur-xs z-[5]'></div>

			<Header />

			<main className='main-container'>
				<Hero />
				<System />
				<About />
				<Finance />
				<Features />
				<Contacts />
				<Footer />
			</main>

			<CookieBanner />
		</>
	)
}
export default App

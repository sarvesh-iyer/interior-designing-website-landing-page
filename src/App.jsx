import { Navbar } from './components/Navbar'
import './assets/styles/style.css'
import { Hero } from './components/Hero'
import { ScrollingSection } from './components/ScrollingSection'
import { HorizontalCarousel } from './components/HorizontalCarousel'
import { DesignSection } from './components/DesignSection'
import { Footer } from './components/Footer'

function App() {

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<ScrollingSection />
				<HorizontalCarousel />
				<DesignSection />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default App

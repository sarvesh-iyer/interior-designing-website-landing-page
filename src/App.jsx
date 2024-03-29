import { Navbar } from './components/Navbar'
import './assets/styles/style.css'
import { Hero } from './components/Hero'
import { ScrollingSection } from './components/ScrollingSection'
import { HorizontalCarousel } from './components/HorizontalCarousel'

function App() {

	return (
		<>
			<header>
				<Navbar />
			</header>
			<Hero />
			<ScrollingSection />
			<HorizontalCarousel />
		</>
	)
}

export default App

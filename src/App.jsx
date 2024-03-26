import { Navbar } from './components/Navbar'
import './assets/styles/style.css'
import { Hero } from './components/Hero'
import { ScrollingSection } from './components/ScrollingSection'

function App() {

	return (
		<>
			<header>
				<Navbar />
			</header>
			<Hero />
			<ScrollingSection />
		</>
	)
}

export default App

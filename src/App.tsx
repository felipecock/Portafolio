import "./App.css"
import { ProfileSection } from "./components/ProfileSection"
import { JumpReference } from "./components/JumpReference"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="code-background scroll-animation">
      <header id="header">
        <Navbar />
      </header>
      <main>
        <JumpReference id={"welcome-link"} />
        <ProfileSection />
        <JumpReference id={"projects-link"} />
        <Projects />
      </main>
        <JumpReference id={"contact-link"} />
        <Footer />
    </div>
  )
}

export default App

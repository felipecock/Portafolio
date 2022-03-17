import "./App.css"
import { ProfileSection } from "./components/ProfileSection"
import { JumpReference } from "./components/JumpReference"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import {ReactComponent as GithubIcon} from "./images/icons/github-icon.svg"

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
      <div id="contact-link" className="salto-preciso"></div>
      <footer>
        <div className="contact-info">
          <p className="contact-info">
            <strong>Felipe Cock</strong>
          </p>
          <p className="contact-info">Desarrollador Front-End</p>
          <p className="contact-info">
            <a
              className="contact-info"
              href="mailto:felipecock@gmail.com?subject=Nuevo Proyecto&body=Buenos días Felipe.%0D%0AEstamos trabajando en un nuevo proyecto y queremos que seas parte de nuestro equipo de desarrollo.">
              felipecock@gmail.com
            </a>
          </p>
          <p className="contact-info">Medellín, Colombia</p>
          <p className="contact-info">
            <a className="contact-info" target="_blank" rel="noreferrer" href="https://github.com/felipecock">
              <GithubIcon />
              <span className="content-info"> GitHub @felipecock</span>
            </a>
          </p>
          <p className="copyright">Copyright© 2022 Felipe Cock</p>
        </div>
      </footer>
    </div>
  )
}

export default App

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import personalInfo from "./db/personal_info.json";

function App() {
  return (
    <div>
      <Navbar />
      <About avatar={personalInfo.avatar} about={personalInfo.about} />
      <Projects />
      <Contact />
      <Footer
        insta={personalInfo.instagram}
        li={personalInfo.linkedin}
        yt={personalInfo.youtube}
        x={personalInfo.x}
        gh={personalInfo.github}
      />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technical_Proficiency from "./components/Technical_Proficiency";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-200 selection:text-black">
      {/* Background */}
      <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technical_Proficiency />
        <Experience /> 
        <Projects /> 
        <Contact /> 
      </div>
    </div>
  ); 
};

export default App;

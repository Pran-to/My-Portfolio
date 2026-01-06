import AboutSection from "../components/AboutSection";
import Background from "../components/Background";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme  Toggle  */}
      <ThemeToggle></ThemeToggle>
      {/* Background Effects  */}
      <Background></Background>
      {/* NaveBar  */}
      <Navbar />

      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
      </main>
    </div>
  );
};

export default Home;

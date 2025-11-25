import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
           {/* Theme  Toggle  */}
           <ThemeToggle></ThemeToggle>
           {/* Background Effects  */}
           <Background></Background>
        </div>
    );
};

export default Home;
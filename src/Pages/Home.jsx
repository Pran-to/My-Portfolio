import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
    return (
        <div className='main-h-screen bg-background text-foreground overflow-x-hidden '>
           {/* Theme  Toggle  */}
           <ThemeToggle></ThemeToggle>
        </div>
    );
};

export default Home;
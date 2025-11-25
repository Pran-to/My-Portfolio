import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        const  storeTheme = localStorage.getItem('theme')
        if(storeTheme ==  'dark'){
            setDarkMode (true);
            document.documentElement.classList.add('dark')
        }
        else{
            localStorage.setItem('theme','light')
            setDarkMode (false);
        }

    },[])

    const toggleTheme = ()=>{
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        setDarkMode(false)     
        }
        else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
            setDarkMode(true)
        } 
    }

    return (
        <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">
            {
                isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"></Sun>  : <Moon className="h-6 w-6 text-blue-900 fill-blue-950"></Moon>
            }
        </button>
    );
};

export default ThemeToggle;
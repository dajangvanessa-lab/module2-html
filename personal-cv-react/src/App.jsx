import { useState } from "react"; // [cite: 114]
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css'; // [cite: 108]

function App() {
  // Task 5: Initialize the dark mode state 
  const [darkMode, setDarkMode] = useState(false);

  return (
    /* Task 5: Use a ternary operator to conditionally apply the "dark-mode" class  */
    <div className={darkMode ? "dark-mode" : ""}>
      
      {/* Task 5: Add the toggle button with an onClick handler  */}
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <main className="container">
        {/* Task 5: Ensure Header and other components are rendered [cite: 120] */}
        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Vanessa Dajang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; // 
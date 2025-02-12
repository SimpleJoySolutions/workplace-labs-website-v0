import { Routes, Route } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import AiForHrMastermind from "@/pages/AiForHrMastermind";
import AiForHrChecklist from "@/pages/AiForHrChecklist";
import "./globals.css";

// Import Manrope font
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

const GA_TRACKING_ID = "G-DHSXQX35HP";

const App = () => {
  return (
    <div
      className={cn("antialiased min-h-screen flex flex-col", "font-manrope")}
    >
      {import.meta.env.PROD && <GoogleAnalytics gaId={GA_TRACKING_ID} />}
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ai-for-hr-mastermind" element={<AiForHrMastermind />} />
          <Route path="/ai-for-hr-checklist" element={<AiForHrChecklist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

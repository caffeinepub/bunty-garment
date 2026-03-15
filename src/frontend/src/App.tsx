import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Collections />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

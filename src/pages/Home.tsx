import BackgroundVideo from "../components/BackgroundVideo";
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <BackgroundVideo />
      <main>
        <Hero />
      </main>
    </PageTransition>
  );
}

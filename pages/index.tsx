import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}

import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PlaneCompose from "@/components/home/PlaneCompose";
import WhyPlane from "@/components/home/WhyPlane";
import Testimonials from "@/components/home/Testimonials";
import Importers from "@/components/home/Importers";
import Integrations from "@/components/home/Integrations";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import CTASection from "@/components/home/CTASection";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "PALANTIR-CODE - Spain's First Certified Plane Partner",
  "description": "Expert Plane implementation, migration, and custom solutions for Plane's unified workspace.",
  "url": "https://www.palantircode.com/",
  "mainEntity": {
    "@type": "Organization",
    "name": "PALANTIR-CODE",
    "description": "Spain's first certified Plane partner",
  }
};

const Index = () => {
  return (
    <Layout>
      <SEO 
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Stats />
      <PlaneCompose />
      <WhyPlane />
      <Testimonials />
      <Importers />
      <Integrations />
      <Services />
      <WhyUs />
      <CTASection />
    </Layout>
  );
};

export default Index;

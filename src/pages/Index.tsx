import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyPlane from "@/components/home/WhyPlane";
import Importers from "@/components/home/Importers";
import Integrations from "@/components/home/Integrations";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
// import TrustedBy from "@/components/home/TrustedBy";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <WhyPlane />
      <Importers />
      <Integrations />
      <Services />
      <WhyUs />
      {/* <TrustedBy /> */}
      <CTASection />
    </Layout>
  );
};

export default Index;

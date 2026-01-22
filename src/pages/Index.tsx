import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyPlane from "@/components/home/WhyPlane";
import Solutions from "@/components/home/Solutions";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import TrustedBy from "@/components/home/TrustedBy";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <WhyPlane />
      <Solutions />
      <Services />
      <WhyUs />
      <TrustedBy />
      <CTASection />
    </Layout>
  );
};

export default Index;

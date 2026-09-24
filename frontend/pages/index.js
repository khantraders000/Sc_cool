import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceAreaMarquee from '../components/ServiceAreaMarquee';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import FAQ from '../components/FAQ';
import FaqSchema from 'components/FaqSchema';

export default function Home() {
  return (
    <Layout>
      <SEO
        title="SC Cool Services | AC Repair, Installation & AMC in Mumbai"
        description="Mumbai’s most trusted AC repair, installation, gas refill and AMC service. Certified technicians, genuine parts, 90-day warranty. Book a free inspection today."
        path="/"
      />
      <FaqSchema />
      <Hero />
      <ServiceAreaMarquee />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <BookingForm />
      <FAQ />
    </Layout>
  );
}

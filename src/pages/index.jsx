import {
  UsedIn,
  AvailableOnManyPlatforms,
  CallToAction,
  Footer,
  Header,
  HelpUs,
  Hero,
  Integrations,
  Performance,
  SponsorsCarousel,
  Testimonial,
  ComposablePrimitives
} from '@/sections';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[130px] flex flex-col space-y-[150px]">
        <Hero />
        <UsedIn />
        <Performance />
        <Testimonial />
        <ComposablePrimitives />
        <AvailableOnManyPlatforms />
        <Integrations />
        <div className="flex flex-col space-y-[65px]">
          <HelpUs />
          <SponsorsCarousel />
          <CallToAction />
        </div>
        <Footer />
      </div>
    </>
  );
}

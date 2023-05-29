import getOpenCollectiveSponsors from '@/data/get-opencollective-sponsors';
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
import { useEffect } from 'react';

export default function Home({ sponsors }) {
  useEffect(() => {
    console.log('useEffect', sponsors);
  }, []);

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
          <SponsorsCarousel sponsors={sponsors} />
          <CallToAction />
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const sponsors = await getOpenCollectiveSponsors();
  return { props: { sponsors } };
}

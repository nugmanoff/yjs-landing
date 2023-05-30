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
      <div className="mt-[130px] flex flex-col space-y-[125px] md:space-y-[150px]">
        <Hero />
        <UsedIn />
        <Performance />
        <Testimonial
          logoSrc="/evernote.png"
          avatarSrc="/bartosz.jpg"
          fullname="Bartosz Sypytkowski"
          position="Co-founder, CTO @ Evernote"
          text={`“Yjs allowed us to add collaborative features to our application in
            no time. The API is extremely well-designed, which makes it easy to
            integrate with the existing part of the system. Kevin and the team
            also provided us first-class support.”`}
        />
        <ComposablePrimitives />
        <AvailableOnManyPlatforms />
        <Integrations />
        <div className="flex flex-col space-y-[35px] md:space-y-[65px]">
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

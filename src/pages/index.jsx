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
import Head from 'next/head';

export default function Home({ sponsors }) {
  const meta = {
    title: 'Yjs Home page',
    description: `Build local-first collaborative software.`,
    type: 'website'
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://yjs.dev`} />
        <link rel="canonical" href={`https://yjs.dev`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Yjs.dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Header />
      <div className="mt-[130px] flex flex-col space-y-[125px] md:space-y-[150px]">
        <Hero />
        <UsedIn />
        <Performance />
        <Testimonial
          logoSrc="/logos/evernote.png"
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
        <div className="flex flex-col space-y-9 md:space-y-16">
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

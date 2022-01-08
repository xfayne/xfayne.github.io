import './index.css';

import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import watch from 'assets/watch.glb';

import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import kebabKingTexture from 'assets/kebab-king-screen.jpg';
import predictorTextureLarge from 'assets/predictor-screen-large.jpg';
import travelbookPhoneTexture from 'assets/travelbook-mobile.jpeg';
import travelbookPhoneTextureLarge from 'assets/travelbook-mobile-large.jpeg';
import travelbookDesktopTexture from 'assets/travelbook-desktop.jpg';
import travelbookDesktopTextureLarge from 'assets/travelbook-desktop-large.jpg';
import predictorTexture from 'assets/predictor-screen.jpg';
import predictorTexturePlaceholder from 'assets/predictor-placeholder.jpg';
import cardiacWatchTexture from 'assets/cardiac-watch.jpg';
import cardiacPhoneTexture from 'assets/cardiac-phone.jpg';
import PredictorProjectPDF from 'assets/Predictor Project Booklet.pdf';

import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import Intro from 'pages/Home/Intro';
import Profile from 'pages/Home/Profile';
import ProjectSummary from 'pages/Home/Project/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Texts from './texts';

const disciplines = ['Software', 'Web', 'Android','Cloud'];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, projectOne, projectTwo, details];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Or Fayne | Softawre Developer</title>
        <meta
          name="description"
          content="Portfolio of Or Fayne – a softawre engineer working on web &amp; mobile
          apps."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
        <link rel="prefetch" href={watch} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        tag="Workplace"
        title={Texts.CardiacSense.title}
        description={Texts.CardiacSense.description}
        tech={["Android","NodeJS","postgreSQL","React Native","AWS"]}        
        buttonText="View App"
        buttonLink="https://www.cardiacsense.com/app-download/"
        model={{
          type: 'phone&watch',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              src: cardiacPhoneTexture,
              srcSet: `${cardiacPhoneTexture} 800w, ${cardiacPhoneTexture} 1440w`,
              placeholder: cardiacPhoneTexture,
            },
            {
              src: cardiacWatchTexture,
              srcSet: `${cardiacWatchTexture} 254w, ${cardiacWatchTexture} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        tag="Project"
        title={Texts.Travelbook.title}
        description={Texts.Travelbook.description}
        tech={["NodeJS","React Native","Mongodb","Javascript","CSS"]}   
        buttonText="View Website"
        buttonLink="https://travelbloggers.herokuapp.com/"
        model={{
          type: 'phone&laptop',
          alt: 'Travelbook',
          textures: [
            {
              src: travelbookDesktopTexture,
              srcSet: `${travelbookDesktopTexture} 254w, ${travelbookDesktopTextureLarge} 508w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              src: travelbookPhoneTexture,
              srcSet: `${travelbookPhoneTexture} 254w, ${travelbookPhoneTextureLarge} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        tag="Studies-Project"
        title={Texts.UniProject.title}
        description={Texts.UniProject.description}
        tech={["Python"]}
        buttonText="View Project"
        buttonLink={PredictorProjectPDF}
        model={{
          type: 'laptop',
          alt: 'Cognitive-load and stress predictor app',
          textures: [
            {
              src: predictorTexture,
              srcSet: `${predictorTexture} 980w, ${predictorTextureLarge} 1376w`,
              placeholder: predictorTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        tag="Project"
        title={Texts.KebabKing.title}
        description={Texts.KebabKing.description}
        tech={["React Native","NodeJS","Javascript"]}   
        buttonText="View Game"
        buttonLink="https://www.youtube.com/watch?v=FGOeqZzsAFE"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: kebabKingTexture,
              srcSet: `${kebabKingTexture} 254w, ${kebabKingTexture} 508w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;

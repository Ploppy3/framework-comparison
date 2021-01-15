import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'react-feather';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { FrameworksContext } from '../../contexts/frameworks.context';
import { AngularData } from '../../data/angular';
import { ReactData } from '../../data/react';
import { sections } from '../../data/sections';
import { Section } from '../Section';
import urlDancing from '../../assets/dancing.gif';

const A = styled.a`
  color: inherit;
`;

const ButtonUp = styled.button`
  display: flex;
  transition: opacity .5s ease;
  position: fixed;
  bottom: 8px;
  right: max(calc((100vw - 600px) / 2), 8px);
  background-color: #282c34;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  color: #1abc9c;
  box-shadow: 0 1px 1px rgba(16,27,30,0.15), 0 2px 2px rgba(16,27,30,0.15), 0 4px 4px rgba(16,27,30,0.15), 0 8px 8px rgba(16,27,30,0.15), 0 16px 16px rgba(16,27,30,0.15);
  border: none;
  cursor: pointer;
  & *{
    margin: auto;
  }
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`;

const ImgDancing = styled.img`
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25vh;
`;

export const Home = () => {

  const frameworksContext = {
    frameworks: [
      { name: 'Angular', data: AngularData },
      { name: 'React', data: ReactData },
    ],
  };

  const [showButtonScrollTop, setShowButtonScrollTop] = useState(false);

  const scrollHandler = useCallback(() => {
    // console.log(document.documentElement.scrollTop);
    const buttonShouldBeVisible = document.documentElement.scrollTop > 0;
    if (showButtonScrollTop !== buttonShouldBeVisible) {
      setShowButtonScrollTop(buttonShouldBeVisible);
    }
  }, [showButtonScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const refButtonUp = useRef(null);

  return (
    <FrameworksContext.Provider value={frameworksContext}>
      {/* {showButtonScrollTop ? 'button' : 'no button'} */}
      <ul>
        {
          Object.keys(sections).map((keySection, index) => (
            <li key={index}>
              <A href={'#' + keySection}>{sections[keySection].name}</A>
            </li>
          ))
        }
      </ul>
      {
        Object.keys(sections).map((keySection, index) => (
          <Section keySection={keySection} section={sections[keySection]} key={index}></Section>
        ))
      }
      <ImgDancing src={urlDancing} alt="dancing" />

      <CSSTransition in={showButtonScrollTop} nodeRef={refButtonUp} classNames="fade" timeout={500} mountOnEnter unmountOnExit>
        <ButtonUp ref={refButtonUp} onClick={scrollToTop}><ChevronUp /></ButtonUp>
      </CSSTransition>

    </FrameworksContext.Provider>
  );
};;
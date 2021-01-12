import styled from 'styled-components';
import { FrameworksContext } from '../../contexts/frameworks.context';
import { AngularData } from '../../data/angular';
import { ReactData } from '../../data/react';
import { sections } from '../../data/sections';
import { Section } from '../Section';

const Anchor = styled.a`
  color: inherit;
`;

export const Home = () => {

  const frameworksContext = {
    frameworks: [
      { name: 'Angular', data: AngularData },
      { name: 'React', data: ReactData },
    ],
  };

  return (
    <FrameworksContext.Provider value={frameworksContext}>
      <ul>
        {
          Object.keys(sections).map((keySection, index) => (
            <li key={index}>
              <Anchor href={'#' + keySection}>{sections[keySection].name}</Anchor>
            </li>
          ))
        }
      </ul>
      {
        Object.keys(sections).map((keySection, index) => (
          <Section keySection={keySection} section={sections[keySection]} key={index}></Section>
        ))
      }
    </FrameworksContext.Provider>
  );
};
import React, { useContext } from 'react';
import styled from 'styled-components';
import { FrameworksContext } from '../contexts/frameworks.context';
import { Section as _Section } from '../data/sections';
import { Block } from './Block';

const H2 = styled.h2`
  margin-left: 8px;
  margin-right: 8px;
  border-left: 4px solid #1abc9c;
  padding-left: 8px;
`;

const P = styled.p`
  margin-left: 8px;
  margin-right: 8px;
`;

const NameFramework = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  color: #1abc9c;
`;

export const Section = (props: { section: _Section; keySection: string; }) => {

  const frameworksContext = useContext(FrameworksContext);

  return (
    <>
      <H2 id={props.keySection}>{props.section.name}</H2>
      <P>{props.section.description}</P>
      {
        frameworksContext.frameworks.map((framework, index) => (
          framework.data[props.keySection] &&
          <div key={index}>
            <NameFramework>-- {framework.name}</NameFramework>
            {
              framework.data[props.keySection].map((block, index) => (
                <Block block={block} key={index}></Block>
              ))
            }
          </div>
        ))
      }
    </>
  );
};
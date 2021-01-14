import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FrameworksContext } from '../contexts/frameworks.context';
import { Section as _Section } from '../data/sections';
import { Block } from './Block';
import { Link2 } from 'react-feather';
import { SnackBar } from './modals/SnackBar';

const H2 = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  border-left: 4px solid #1abc9c;
  padding-left: 8px;
  cursor: pointer;
  & svg{
    margin-right: 8px;
  }
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

const MessageCopied = styled.div`
  padding: 8px;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
`;

export const Section = (props: { section: _Section; keySection: string; }) => {

  const frameworksContext = useContext(FrameworksContext);

  const [linkVisible, setLinkVisible] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href.split('#')[0] + `#${props.keySection}`);
    setShowSnackBar(true);
  };

  return (
    <>
      <H2
        id={props.keySection}
        onClick={copyLink}
        onMouseEnter={() => setLinkVisible(true)}
        onMouseLeave={() => setLinkVisible(false)}>
        {
          linkVisible &&
          <Link2 />
        }
        <span>{props.section.name}</span>
      </H2>
      {
        props.section.description &&
        <P>{props.section.description}</P>
      }
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
      <SnackBar opened={showSnackBar} onClose={() => { setShowSnackBar(false); }}>
        <MessageCopied>Copied!</MessageCopied>
      </SnackBar>
    </>
  );
};